/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { type JSXElementConstructor, type ReactElement } from "react";
import { Resend } from "resend";
import { env } from "~/env";

export const resend = new Resend(env.SMTP_PASSWORD);

export const sendEmail = async ({
  email,
  subject,
  react,
  test,
}: {
  email: string;
  subject: string;
  react: ReactElement<any, string | JSXElementConstructor<any>>;
  marketing?: boolean;
  test?: boolean;
}) => {
  if (!env.SMTP_PASSWORD) {
    console.log(
      "Resend is not configured. You need to add a RESEND_API_KEY in your .env file for emails to work.",
    );
    return Promise.resolve();
  }
  return resend.emails.send({
    from: `${env.EMAIL_FROM}`,
    to: test ? "delivered@resend.dev" : email,
    subject,
    react,
  });
};