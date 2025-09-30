import nodemailer from "nodemailer";
import { WELCOME_EMAIL_TEMPLATE } from "./templates";
export const transporterConfig = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.NODEMAILER_EMAIL,
    pass: process.env.NODEMAILER_PASSWORD,
  },
});

export const sendWelcomeEmail = async ({
  email,
  name,
  intro,
}: WelcomeEmailData) => {
  const htmlTemplate = WELCOME_EMAIL_TEMPLATE.replace("{{name}}", name).replace(
    "{{intro}}",
    intro
  );
  const mailOptions = {
    from: `"Stacklet" <${process.env.NODEMAILER_EMAIL}>`,
    to: email,
    subject: "Welcome to Stacklet! - your stock market toolkit is ready!",
    text: "Thanks for joining Stacklet. We're excited to have you on board!",
    html: htmlTemplate,
  };
  await transporterConfig.sendMail(mailOptions);
};
