import { Resend } from "resend";
import { contactEmail } from "@/lib/content";

// Use verified domain sender if available, fall back to Resend test sender.
// NOTE: onboarding@resend.dev can ONLY deliver to the Resend account owner's email.
// All real delivery requires a verified domain (leads@pointsxchange.cc).
const FROM_ADDRESS = process.env.EMAIL_FROM || "Points Xchange <leads@leads.pointsxchange.cc>";

export async function sendLeadEmail(subject: string, html: string) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn("[email] RESEND_API_KEY not set — skipping admin notification");
    return { skipped: true };
  }

  const resend = new Resend(apiKey);
  const result = await resend.emails.send({
    from: FROM_ADDRESS,
    to: process.env.LEAD_TO_EMAIL || contactEmail,
    subject,
    html
  });

  if (result.error) {
    console.error("[email] sendLeadEmail error:", JSON.stringify(result.error));
  }
  return result;
}

export async function sendCustomerConfirmationEmail(
  to: string,
  name: string,
  programName: string,
  pointsAmount: number,
  low: number,
  high: number
) {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.warn("[email] RESEND_API_KEY not set — skipping customer confirmation");
    return { skipped: true };
  }

  const resend = new Resend(apiKey);
  const result = await resend.emails.send({
    from: FROM_ADDRESS,
    to,
    subject: "Your Points Xchange quote request — we're on it",
    html: `
      <div style="font-family: sans-serif; max-width: 540px; margin: 0 auto; background: #0A0A0A; color: #fff; border-radius: 12px; overflow: hidden;">
        <div style="background: #111; border-bottom: 1px solid rgba(255,255,255,0.08); padding: 32px 32px 24px;">
          <p style="margin: 0 0 4px; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.16em; color: #D4AF37;">Points Xchange</p>
          <h1 style="margin: 0; font-size: 24px; font-weight: 600;">Quote request received</h1>
        </div>
        <div style="padding: 28px 32px;">
          <p style="color: #A0A0A0; line-height: 1.6;">Hi ${name},</p>
          <p style="color: #A0A0A0; line-height: 1.6;">Thanks for submitting your quote request. Our desk has received it and will follow up within one business day.</p>

          <div style="background: #111; border: 1px solid rgba(255,255,255,0.08); border-radius: 10px; padding: 20px 24px; margin: 24px 0;">
            <p style="margin: 0 0 12px; font-size: 11px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.14em; color: #A0A0A0;">Your request summary</p>
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 6px 0; color: #A0A0A0; font-size: 14px;">Program</td><td style="padding: 6px 0; color: #fff; font-size: 14px; text-align: right;">${programName}</td></tr>
              <tr><td style="padding: 6px 0; color: #A0A0A0; font-size: 14px;">Points</td><td style="padding: 6px 0; color: #fff; font-size: 14px; text-align: right;">${pointsAmount.toLocaleString()}</td></tr>
              <tr style="border-top: 1px solid rgba(255,255,255,0.08);">
                <td style="padding: 12px 0 6px; color: #A0A0A0; font-size: 14px;">Estimated range</td>
                <td style="padding: 12px 0 6px; color: #D4AF37; font-size: 18px; font-weight: 600; text-align: right;">$${low.toFixed(0)} – $${high.toFixed(0)}</td>
              </tr>
            </table>
            <p style="margin: 12px 0 0; font-size: 11px; color: #666;">This estimate is valid for 24 hours. Exact offer issued after desk review.</p>
          </div>

          <p style="color: #A0A0A0; font-size: 14px; line-height: 1.6;">Questions? Reply to this email or reach us on WhatsApp anytime.</p>
        </div>
        <div style="padding: 16px 32px; border-top: 1px solid rgba(255,255,255,0.06);">
          <p style="margin: 0; font-size: 12px; color: #555;">Points Xchange · Private Points Brokerage · Info@pointsxchange.cc</p>
        </div>
      </div>
    `
  });

  if (result.error) {
    console.error("[email] sendCustomerConfirmationEmail error:", JSON.stringify(result.error));
  }
  return result;
}
