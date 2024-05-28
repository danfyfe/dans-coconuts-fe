'use server'

import { Organization } from "@/models/task-management/Organization";

export const getOrganizationByTitle = async ({ title }: { title: string; }) => {
  const organization = await Organization.findOne({ title});
  // console.log(organization)
};
