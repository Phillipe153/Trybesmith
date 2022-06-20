import { Request, Response, NextFunction } from 'express';
import { IUsers } from '../interfaces/index';

function validateNewUserReuired(
  username: string, 
  classe: string, 
  level: number, 
  password: string,
) {
  if (!username) {    
    return { status: 400, message: '"username" is required' };
  }
  if (!classe) {
    return { status: 400, message: '"classe" is required' };
  }
  if (!level) {    
    return { status: 400, message: '"level" is required' };
  }
  if (!password) {
    return { status: 400, message: '"password" is required' };
  } return null;
}

function validateNewUserLength(
  username: string, 
  classe: string, 
  level: number, 
  password: string,
) {
  if (username.length < 3) {
    return { status: 422, message: '"username" length must be at least 3 characters long' };
  }
  if (classe.length < 3) {
    return { status: 422, message: '"classe" length must be at least 3 characters long' };
  }
  if (level < 1) {    
    console.log('cjhamou 3');

    return { status: 422, message: '"level" must be greater than or equal to 1' };
  }
  if (password.length <= 8) {
    return { status: 422, message: '"password" length must be at least 8 characters long' };
  } return null;
}

function validateNewUserType(
  username: string, 
  classe: string, 
  level: number, 
  password: string,
) {
  if (typeof username !== 'string') {    
    return { status: 422, message: '"username" must be a string' };
  }
  if (typeof classe !== 'string') {
    return { status: 422, message: '"classe" must be a string' };
  }
  if (typeof level !== 'number') {    
    return { status: 422, message: '"level" must be a number' };
  }
  if (typeof password !== 'string') {
    return { status: 422, message: '"password" must be a string' };
  } return null;
}
export default function postNewUserMiddlewares(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  const { username, classe, level, password } = req.body as IUsers;
  
  const required = validateNewUserReuired(username, classe, level, password);    
  if (required) {
    return res.status(required.status).json({ message: required.message });
  }

  const userLength = validateNewUserLength(username, classe, level, password);   
  
  if (userLength) {
    return res.status(userLength.status).json({ message: userLength.message });
  }

  const type = validateNewUserType(username, classe, level, password);    
  if (type) {
    return res.status(type.status).json({ message: type.message });
  }
  next();
}
