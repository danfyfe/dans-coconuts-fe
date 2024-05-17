'use server'

export async function createOrganization(formData: FormData) {
  'use server'
  const rawFormData = {
    title: formData.get('title')
  }
  console.log(rawFormData)
};

export async function addOrganization(formData: FormData) {
  'use server'
  const rawFormData = {
    title: formData.get('title')
  }
  console.log(rawFormData)
}