import { IUser } from "@/models/User";

export const createOrganization = async ({ title, user }: IOrganizationParams) => {
  const body = JSON.stringify({
    title,
    user
  });

  const response = await fetch('/api/organizations', {
    method: 'POST',
    body
  });

  return response.json();
};

export type IOrganizationParams = {
  title: string;
  user: IUser | null
}