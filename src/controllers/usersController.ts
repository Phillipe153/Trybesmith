import { Request, Response } from 'express';
import { IUsers } from '../interfaces/index';
import postUserService from '../services/usersService';

export default async function postUserController(req: Request, res: Response) {
  const newUser = req.body as IUsers;
  const { status, token } = await postUserService(newUser);
  return res.status(status).json({ token });    
}