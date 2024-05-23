import jwt from 'jsonwebtoken';
import { NextRequest } from 'next/server';
import getErrorMessage from '../errors/getErrorMessage';

export const getDataFromToken = (request: NextRequest) => {
  try {
    const JWTtoken = request.cookies.get('token')?.value || '';

    const decodedToken = jwt.verify(JWTtoken, process.env.JWT_SECRET!);
    console.log('decorded token:', decodedToken)
    return decodedToken.id;
  } catch(error) {
    throw new Error(getErrorMessage(error));
  }
};
