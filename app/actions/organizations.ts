'use server'

export const createOrganization = async ({ title, user }: { title: string; user: { name: string; email: string; }}) => {
  console.log(title, user)
  return {
    title: 'Org 1'
  }
};