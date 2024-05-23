import getErrorMessage from "@/lib/errors/getErrorMessage";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { email, subject, message } = await req.json();

  try {
    const transport = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: process.env.MAILER_USER,
        pass: process.env.MAILER_PASS
      }
    });

    const mailOptions = {
      from: email,
      to: 'fyfedaniel@gmail.com',
      subject: subject,
      html: `
        <p>
          ${message}
        </p>
      `
    };

    const mailResponse = await transport.sendMail(mailOptions);
    return NextResponse.json({
      success: true,
      data: mailResponse
    })
  } catch(error) {
    const message = getErrorMessage(error);
    return NextResponse.json({
      message,
      success: false
    })
  }
};

