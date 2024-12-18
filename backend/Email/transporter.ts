import nodemailer from 'nodemailer';

export const transporter = nodemailer.createTransport({
    host: "smtp.forwardemail.net",
    port: 465,
    secure: true,
    auth: {
      user: "my_user",
      pass: "my_password",
    },
  });