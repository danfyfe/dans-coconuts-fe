import jwt from 'jsonwebtoken';
import getErrorMessage from '../errors/getErrorMessage';
import { IUser, UserModel } from '../models/User';
import connectMongoDB from '../mongodb';

export const getDataFromToken = async (JWTtoken: string): Promise<{ success: boolean; message?: string; user?:IUser; }> => {
  try {
    const tokenData = jwt.verify(JWTtoken, process.env.JWT_SECRET!) as { email: string };
    await connectMongoDB();
    if (tokenData.email) {
      const userData = await UserModel.findOne({
        email: tokenData.email
      }).select('-password');

      
      if (userData) {
        const user = {
          email: userData.email,
          id: userData.id,
          username: userData.username,
          image: userData.image
        };
    
        return {
          success: true,
          user
        }
      }
    }


    return {
      success: false,
      message: 'User not found.'
    }
  } catch(error) {
    return {
      success: false,
      message: getErrorMessage(error)
    }
  }
};
