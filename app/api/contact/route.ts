import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, service, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email and message are required." },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"Odd Marketing Contact Form" <${process.env.GMAIL_USER}>`,
      to: "toufiqhussain.30@gmail.com",
      replyTo: email,
      subject: `New Contact: ${name}${service ? ` — interested in ${service}` : ""}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background: #0a0a0a; color: #fafafa; padding: 32px; border-radius: 12px; border: 1px solid #222;">
          <h2 style="color: #ff5c35; margin-top: 0;">New Message from Odd Marketing Website</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; color: #888; font-size: 13px; width: 130px;">Name</td>
              <td style="padding: 10px 0; color: #fafafa; font-size: 14px; font-weight: 600;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #888; font-size: 13px;">Email</td>
              <td style="padding: 10px 0; font-size: 14px;"><a href="mailto:${email}" style="color: #ff5c35;">${email}</a></td>
            </tr>
            ${service ? `
            <tr>
              <td style="padding: 10px 0; color: #888; font-size: 13px;">Service</td>
              <td style="padding: 10px 0; color: #fafafa; font-size: 14px;">${service}</td>
            </tr>` : ""}
          </table>
          <hr style="border: none; border-top: 1px solid #222; margin: 20px 0;" />
          <p style="color: #888; font-size: 13px; margin-bottom: 8px;">Message</p>
          <p style="color: #fafafa; font-size: 14px; line-height: 1.7; white-space: pre-wrap;">${message}</p>
          <hr style="border: none; border-top: 1px solid #222; margin: 20px 0;" />
          <p style="color: #555; font-size: 12px; margin: 0;">Sent from oddmarketing.co contact form</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Email send error:", err);
    return NextResponse.json(
      { error: "Failed to send email. Please try again." },
      { status: 500 }
    );
  }
}
