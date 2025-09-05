import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: Number(process.env.EMAIL_PORT) || 465,
  secure: process.env.EMAIL_SECURE === "true", // true for 465, false for 587
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Optional: verify connection once
transporter.verify((error, success) => {
  if (error) {
    console.error("❌ SMTP connection error:", error);
  } else {
    console.log("✅ Email server is ready to send messages");
  }
});

export const sendEmail = async (to: string, subject: string, text: string) => {
  await transporter.sendMail({
    from: `"Ideovent Bot" <${process.env.EMAIL_USER}>`,
    to,
    subject,
    text,
  });
};
