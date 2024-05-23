export async function sendContactEmail({ email, subject, message }: IContactEmailParams) {

};

export type IContactEmailParams = {
  email: string;
  subject: string;
  message: string;
};
