import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

import dotenv from 'dotenv';

dotenv.config();

const erroHandler = (status: number, message: string) => ({
  status,
  message,
});

const authToken = (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      throw erroHandler(401, 'Token not found');
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
      if (err) {
        throw erroHandler(401, 'Expired or invalid token');
      }

      req.user = decoded.data;
    });
        
    next();
  } catch (err: Error) {
    return res.status(err.status).json({ message: err.message });
  }
};

export default authToken;