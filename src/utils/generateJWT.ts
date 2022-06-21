import jwt, { SignOptions } from 'jsonwebtoken';
import dotenv from 'dotenv';
import { User } from '../interfaces/index';

dotenv.config();
const jwtConfig: SignOptions = {
  expiresIn: '1d',
  algorithm: 'HS256',
};
const secret = 'minhaSenhaSecretaDoProjetoTrybeSmith';

// const secret = <string> (process.env.JWT_SECRET);

const generateJWT = (payload: User) => {
  const token = jwt.sign({ data: payload }, secret, jwtConfig);

  return token;
};

export default generateJWT;