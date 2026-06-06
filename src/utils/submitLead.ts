export type LeadSource = 'welcome_modal' | 'inline_form' | 'exit_popup' | 'contact_form';

export type LeadPayload = {
  name: string;
  phone: string;
  interest?: string;
  city?: string;
  preferredTime?: string;
  message?: string;
  source: LeadSource;
  timestamp: string;
};

export const PHONE_DISPLAY = '+91 8100677351';
export const PHONE_TEL = '+918100677351';
export const WHATSAPP_NUMBER = '918100677351';
export const STUDIO_ADDRESS =
  'Amala Nursing Home, Vivekananda Rd, Chinsurah R S, Chinsurah, West Bengal 712103, India';
export const MAP_EMBED_URL =
  'https://maps.google.com/maps?q=Amala+Nursing+Home,+Vivekananda+Rd,+Chinsurah+R+S,+Chinsurah,+West+Bengal+712103,+India&z=15&output=embed';

export async function submitLead(
  data: Omit<LeadPayload, 'timestamp'>
): Promise<{ ok: boolean }> {
  const payload: LeadPayload = {
    ...data,
    timestamp: new Date().toISOString(),
  };

  // Replace with EmailJS / Airtable / Google Forms / Make.com webhook
  // const WEBHOOK_URL = import.meta.env.VITE_LEAD_WEBHOOK_URL;
  // if (WEBHOOK_URL) {
  //   await fetch(WEBHOOK_URL, {
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify(payload),
  //   });
  // }

  // eslint-disable-next-line no-console
  console.log('Lead captured:', payload);
  await new Promise((r) => setTimeout(r, 400));
  return { ok: true };
}
