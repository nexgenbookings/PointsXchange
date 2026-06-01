import { Resend } from "resend";
import { contactEmail } from "@/lib/content";

export async function sendLeadEmail(subject: string, html: string) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) return { skipped: true };

  const resend = new Resend(apiKey);
  return resend.emails.send({
    from: "Points Xchange <leads@pointsxchange.cc>",
    to: process.env.LEAD_TO_EMAIL || contactEmail,
    subject,
    html
  });
}
