'use server'
import { z } from "zod";
import { action } from "@/lib/safe-actions";

// schemas
const organizationSchema = z.object({
  title: z.string().min(3).max(100)
});


export const createOrganization = () => {}

export async function addOrganization(formData: FormData) {

}