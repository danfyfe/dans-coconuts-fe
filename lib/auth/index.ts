import jwt from 'jsonwebtoken';
import { NextRequest } from 'next/server';
import getErrorMessage from '../errors/getErrorMessage';
import { IUser, UserModel } from '../models/User';

export const getDataFromToken = async (JWTtoken: string) => {
  try {
    const tokenData = jwt.verify(JWTtoken, process.env.JWT_SECRET!) as { email: string };
    const userData = await UserModel.findOne({
      email: tokenData.email
    }).select('-password');

    const user: IUser = {
      email: userData.email,
      id: userData.id,
      username: userData.username,
      image: userData.image
    };

    return user
  } catch(error) {
    throw new Error(getErrorMessage(error));
  }
};
