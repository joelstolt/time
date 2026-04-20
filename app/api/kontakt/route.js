import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

const TO_EMAIL = "joelstolt90@gmail.com";
const FROM_EMAIL = "Timeout Service <info@timeoutservice.se>";

const MAX_FILES = 10;
const MAX_FILE_BYTES = 4 * 1024 * 1024; // 4 MB per fil
const MAX_TOTAL_BYTES = 8 * 1024 * 1024; // 8 MB totalt

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
    const form = await req.formData();

    if (form.get("company")) {
      return NextResponse.json({ success: true });
    }

    const namn = String(form.get("namn") || "").trim();
    const email = String(form.get("email") || "").trim();
    const telefon = String(form.get("telefon") || "").trim();
    const arende = String(form.get("arende") || "").trim();
    const meddelande = String(form.get("meddelande") || "").trim();

    if (!namn || !email || !telefon) {
      return NextResponse.json(
        { error: "Namn, e-post och telefon krävs." },
        { status: 400 }
      );
    }

    const rawFiles = form.getAll("files").filter((f) => f && typeof f.arrayBuffer === "function");
    if (rawFiles.length > MAX_FILES) {
      return NextResponse.json(
        { error: `Max ${MAX_FILES} bilder.` },
        { status: 400 }
      );
    }

    let totalBytes = 0;
    const attachments = [];
    for (const file of rawFiles) {
      if (file.size > MAX_FILE_BYTES) {
        return NextResponse.json(
          { error: `Bilden "${file.name}" är större än 4 MB.` },
          { status: 400 }
        );
      }
      totalBytes += file.size;
      if (totalBytes > MAX_TOTAL_BYTES) {
        return NextResponse.json(
          { error: "Totala filstorleken överstiger 8 MB." },
          { status: 400 }
        );
      }
      const buf = Buffer.from(await file.arrayBuffer());
      attachments.push({
        filename: file.name || "bifogad-bild",
        content: buf,
      });
    }

    const subject = arende
      ? `Kontakt: ${arende} — ${namn}`
      : `Kontakt — ${namn}`;

    const html = `
      <div style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;max-width:600px;margin:0 auto;color:#0f172a">
        <h2 style="color:#0072b9;margin:0 0 16px;font-size:20px">Nytt kontaktmeddelande</h2>
        <table style="border-collapse:collapse;font-size:14px;line-height:1.5">
          ${row("Namn", namn)}
          ${row("E-post", email)}
          ${row("Telefon", telefon)}
          ${row("Ärende", arende)}
          ${row("Meddelande", meddelande)}
          ${row("Bifogade bilder", attachments.length || "")}
        </table>
      </div>
    `;

    await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      replyTo: email,
      subject,
      html,
      attachments: attachments.length ? attachments : undefined,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Kontakt email error:", error);
    return NextResponse.json(
      { error: "Kunde inte skicka meddelandet." },
      { status: 500 }
    );
  }
}
