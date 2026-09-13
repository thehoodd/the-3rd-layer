import { Resend } from 'resend';

export const runtime = 'nodejs';

let resend: Resend | null = null;

function getResend(): Resend {
  if (!process.env.RESEND_API_KEY) {
    throw new Error('Missing Resend API key.');
  }
  if (!resend) {
    resend = new Resend(process.env.RESEND_API_KEY);
  }
  return resend;
}

interface ContactPayload {
  name?: string;
  email?: string;
  service?: string;
  details?: string;
}

function escapeHtml(value: string): string {
  return value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

export async function POST(request: Request) {
  let payload: ContactPayload;
  try {
    payload = (await request.json()) as ContactPayload;
  } catch {
    return Response.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const name = escapeHtml((payload.name ?? '').trim());
  const service = escapeHtml((payload.service ?? '').trim());
  const details = escapeHtml((payload.details ?? '').trim());
  const email = (payload.email ?? '').trim();

  if (!name || !email || !details) {
    return Response.json({ error: 'Name, email, and project details are required.' }, { status: 400 });
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return Response.json({ error: 'Please provide a valid email address.' }, { status: 400 });
  }

  if (!process.env.RESEND_API_KEY) {
    return Response.json({ error: 'Resend API key is not configured.' }, { status: 500 });
  }

  const to = process.env.CONTACT_TO_EMAIL?.trim() || 'hello@the3rdlayers.com';

  try {
    const { data, error } = await getResend().emails.send({
      from: `Website Contact <onboarding@resend.dev>`,
      to: [to],
      replyTo: email,
      subject: `New Project Inquiry // ${name}`,
      html: `
        <div style="font-family: Arial, Helvetica, sans-serif; background: #0A0A0A; color: #F3F0E9; padding: 32px;">
          <div style="max-width: 560px; margin: 0 auto; background: #141414; border: 1px solid #333; padding: 28px;">
            <p style="font-size: 12px; color: #DE3D1C; letter-spacing: 2px; text-transform: uppercase; margin: 0 0 16px;">
              New Project Inquiry
            </p>
            <h1 style="font-size: 24px; margin: 0 0 20px; letter-spacing: 1px;">${name}</h1>
            <table style="width: 100%; font-size: 14px; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; color: #ffffff88; text-transform: uppercase; font-size: 11px; letter-spacing: 1px; width: 130px;">Email</td>
                <td style="padding: 8px 0; color: #ffffff;"><a href="mailto:${email}" style="color: #DE3D1C;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #ffffff88; text-transform: uppercase; font-size: 11px; letter-spacing: 1px;">Service</td>
                <td style="padding: 8px 0; color: #ffffff;">${service}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #ffffff88; text-transform: uppercase; font-size: 11px; letter-spacing: 1px; vertical-align: top;">Details</td>
                <td style="padding: 8px 0; color: #ffffff; white-space: pre-wrap;">${details}</td>
              </tr>
            </table>
          </div>
        </div>
      `,
    });

    if (error) {
      return Response.json({ error: error.message }, { status: 500 });
    }

    return Response.json({ success: true, id: data?.id }, { status: 200 });
  } catch {
    return Response.json({ error: 'Failed to send your inquiry. Please try again.' }, { status: 500 });
  }
}