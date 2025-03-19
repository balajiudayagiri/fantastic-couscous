import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

function formatSubject(subject: string): string {
  return subject
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, message, subject } = body;

    if (!name || !email || !message || !subject) {
      return NextResponse.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      subject: `${formatSubject(subject)} from ${name}`,
      html: `
    <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #ddd; border-radius: 8px; overflow: hidden;">
      <div style="background-color: #000000; color: white; padding: 20px; text-align: center;">
        <h1 style="margin: 0; font-size: 24px;">Message from ${name} on ${formatSubject(
        subject
      )}</h1>
      </div>
      <div style="padding: 20px;">
        <h1 style="margin: 0 0 10px; text-transform: capitalize;"><strong></strong>${name}</h1>
        <p style="margin: 0 0 10px;"><strong>Email:</strong> ${email}</p>
        <p style="margin: 0 0 10px;"><strong>Subject:</strong> ${formatSubject(
          subject
        )}</p>
        <p style="margin: 0 0 10px;"><strong>Message:</strong></p>
        <div style="background-color: #f9f9f9; padding: 5px 10px; border-radius: 5px; border: 1px solid #ddd; font-family: 'Google Sans'; font-size: large;">
          ${message.replace(/\n/g, "<br>")}
        </div>
      </div>
      <div style="background-color: #f1f1f1; color: #555; padding: 10px; text-align: center; font-size: 12px;">
        <p style="margin: 0;">This email was sent from your website's contact form.</p>
        <p style="margin: 0;">&copy; ${new Date().getFullYear()} Balaji Udayagiri. All rights reserved.</p>
      </div>
    </div>
  `,
    });

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { message: "Failed to send email", error: error.message },
      { status: 500 }
    );
  }
}
