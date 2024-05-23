import jwt from 'jsonwebtoken';
import { NextRequest } from 'next/server';
import getErrorMessage from '../errors/getErrorMessage';

export const getDataFromToken = (JWTtoken: string) => {
  try {
    const userData = jwt.verify(JWTtoken, process.env.JWT_SECRET!);
    return userData
  } catch(error) {
    throw new Error(getErrorMessage(error));
  }
};
