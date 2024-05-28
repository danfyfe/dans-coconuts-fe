'use server'

import { Organization } from "@/lib/models/Organization";

export const getOrganizationByTitle = async ({ title }: { title: string; }) => {
  const organization = await Organization.findOne({ title});
  console.log(organization)
};
