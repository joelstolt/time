import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

const TO_EMAIL = "joelstolt90@gmail.com";
const FROM_EMAIL = "Timeout Service <noreply@timeoutservice.se>";

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
    const body = await req.json();

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
        </table>
      </div>
    `;

    await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email,
      subject,
      html,
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
