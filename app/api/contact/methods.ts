export const sendContactEmail = async ({ email, subject, message }: IContactEmailParams) => {
  const body = JSON.stringify({
    email, subject, message
  });

  await fetch('/api/contact', {
    method: 'POST',
    body
  });
};


export type IContactEmailParams = {
  email: string;
  subject: string;
  message: string;
};