'use server'
import { z } from "zod";
import { action } from "@/lib/safe-actions";
import getErrorMessage from "@/lib/errors/getErrorMessage";
import Organization from "@/lib/models/Organization";
import dbConnect from "@/lib/mongodb";

// schemas
const organizationSchema = z.object({
  title: z.string().min(3).max(100)
});

// export const createOrganization = action(organizationSchema, async ({ title, user }) => {
//   // console.log(user)
//   // await dbConnect();
//   // try {
//   //   const newOrg =  await Organization.create({ title, users: [user] });
//   //   return {
//   //     success: newOrg
//   //   }
//   // } catch (error) {
//   //   return {
//   //     error: getErrorMessage(error)
//   //   }
//   // }
// });

export async function addOrganization(formData: FormData) {
  // add organization to user
  // permissions?
}