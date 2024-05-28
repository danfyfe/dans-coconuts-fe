'use server'
import getErrorMessage from "@/lib/errors/getErrorMessage";
import { Organization } from "@/lib/models/Organization";
import { User } from "next-auth";
import dbConnect from "@/lib/mongodb";

export const createOrganization = async ({ title, user }: { title: string; user?: User}) => {
 await dbConnect();
 try {
  const newOrganization = await Organization.create({
    title, users: [{ ...user, admin: true }]
  });

  return {
    success: newOrganization
  }
 } catch(error) {
  return {
    error: getErrorMessage(error)
  }
 }
};
