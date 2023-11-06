import { NextRequest, NextResponse } from "next/server";

const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req: NextRequest) {
  if (req.method === "POST") {
    try {
      const { recipientEmail, senderEmail, subject, text } = await req.json();

      const msg = {
        to: recipientEmail,
        from: senderEmail,
        subject,
        text,
      };

      await sgMail.send(msg);

      return NextResponse.json(
        {
          message: "Email sent successfully",
        },
        { status: 200 }
      );
    } catch (error) {
      console.error("Error sending email:", error);
      return NextResponse.json(
        { error: "Email sending failed" },
        { status: 500 }
      );
    }
  } else {
    return NextResponse.json({ error: "Method not allowed" }, { status: 405 }); // Method not allowed
  }
}
