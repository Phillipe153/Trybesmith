import { IUsers } from '../interfaces/index';
import postUserModel from '../models/usersModel';
import generateJWT from '../utils/generateJWT';

export default async function postUserService(newUser: IUsers) {
  const UserCreated = await postUserModel(newUser);
  if (UserCreated) {
    const token = generateJWT(UserCreated);
    return { status: 201, token };
  }
  return { status: 500, message: 'fail' };
}