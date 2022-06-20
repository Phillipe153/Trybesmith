import { ResultSetHeader } from 'mysql2';

import connection from './connection';
import { IUsers, User } from '../interfaces/index';

export default async function postUserModel(newUser: IUsers): 
Promise<User> {
  const { username, classe, level, password } = newUser;
  const query = `INSERT INTO Trybesmith.Users (username, classe, level, password)
  VALUES (?, ?, ?, ?)`;
  const [data] = await connection
    .execute<ResultSetHeader>(query, [username, classe, level, password]);
  const { insertId: id } = data;

  const UserCreated = { id, ...newUser };

  return UserCreated;
}