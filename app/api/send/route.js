import { Resend } from "resend";
import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const maxDuration = 30;

let _resend;
const getResend = () => (_resend ||= new Resend(process.env.RESEND_API_KEY));

const TO_EMAIL = "info@timeoutservice.se";
const FROM_EMAIL = "Timeout Service <bokning@timeoutservice.se>";

const MAX_FILES = 10;
const MAX_FILE_BYTES = 8 * 1024 * 1024;
const MAX_TOTAL_BYTES = 20 * 1024 * 1024;

async function parseRequestBody(req) {
  const contentType = req.headers.get("content-type") || "";
  if (contentType.includes("multipart/form-data")) {
    const form = await req.formData();
    const body = {};
    const attachments = [];
    let totalBytes = 0;
    for (const [key, value] of form.entries()) {
      if (key === "files") {
        if (value && typeof value.arrayBuffer === "function" && value.size > 0) {
          if (attachments.length >= MAX_FILES) continue;
          if (value.size > MAX_FILE_BYTES) {
            throw new Error(`Bilden "${value.name}" är större än 8 MB.`);
          }
          totalBytes += value.size;
          if (totalBytes > MAX_TOTAL_BYTES) {
            throw new Error("Totala filstorleken överstiger 20 MB.");
          }
          const buf = Buffer.from(await value.arrayBuffer());
          attachments.push({ filename: value.name || "bifogad-bild", content: buf });
        }
      } else if (key === "tillval") {
        body.tillval = body.tillval ? [].concat(body.tillval, value) : [value];
      } else {
        body[key] = value;
      }
    }
    return { body, attachments };
  }
  return { body: await req.json(), attachments: [] };
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function row(label, value) {
  if (value === undefined || value === null || value === "") return "";
  const safe = escapeHtml(value).replace(/\n/g, "<br />");
  return `<tr>
    <td style="padding:6px 16px 6px 0;font-weight:600;color:#475569;vertical-align:top;white-space:nowrap">${escapeHtml(label)}</td>
    <td style="padding:6px 0;color:#0f172a">${safe}</td>
  </tr>`;
}

export async function POST(req) {
  try {
    const { body, attachments } = await parseRequestBody(req);

    // Honeypot — tyst 200 om en bot fyllt det dolda fältet
    if (body.company) {
      return NextResponse.json({ success: true });
    }

    const {
      // Kontaktuppgifter
      fornamn,
      efternamn,
      namn,
      email,
      telefon,
      // Adress
      adress,
      postnummer,
      ort,
      // Bokningsdetaljer
      tjanst,
      kvm,
      frekvens,
      tillval,
      pris,
      datum,
      meddelande,
      // Tillåter att uppringande komponent överskriver ämnesrad
      subject: subjectOverride,
    } = body;

    const fullName =
      fornamn || efternamn
        ? `${fornamn || ""} ${efternamn || ""}`.trim()
        : namn;

    if (!fullName || !email || !telefon) {
      return NextResponse.json(
        { error: "Namn, e-post och telefon krävs." },
        { status: 400 }
      );
    }

    const addressLine = [adress, [postnummer, ort].filter(Boolean).join(" ")]
      .filter(Boolean)
      .join(", ");
    const tillvalLine = Array.isArray(tillval) ? tillval.join(", ") : tillval;

    const subjectPrefix = tjanst ? `Ny bokning: ${tjanst}` : "Ny förfrågan";
    const subject = subjectOverride || `${subjectPrefix} — ${fullName}`;

    const html = `
      <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;max-width:600px;margin:0 auto;color:#0f172a">
        <h2 style="color:#0072b9;margin:0 0 16px;font-size:20px">Ny bokningsförfrågan</h2>
        <table style="border-collapse:collapse;font-size:14px;line-height:1.5">
          ${row("Namn", fullName)}
          ${row("E-post", email)}
          ${row("Telefon", telefon)}
          ${row("Adress", addressLine)}
          ${row("Tjänst", tjanst)}
          ${row("Storlek", kvm ? `${kvm} m²` : null)}
          ${row("Frekvens", frekvens)}
          ${row("Tillval", tillvalLine)}
          ${row("Beräknat pris", pris)}
          ${row("Önskat datum", datum)}
          ${row("Meddelande", meddelande)}
          ${row("Bifogade bilder", attachments.length || "")}
        </table>
      </div>
    `;

    await getResend().emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email,
      subject,
      html,
      attachments: attachments.length ? attachments : undefined,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email error:", error);
    return NextResponse.json(
      { error: "Kunde inte skicka förfrågan." },
      { status: 500 }
    );
  }
}
