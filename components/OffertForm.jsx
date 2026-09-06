"use client";

import { useState } from "react";
import { CheckCircle2, Loader2, Phone } from "lucide-react";

const inputStyle = {
  width: "100%", padding: "13px 16px", fontSize: 15,
  border: "2px solid var(--color-border)", borderRadius: 10,
  background: "white", color: "var(--color-heading)", outline: "none",
  fontFamily: "var(--font-body)", transition: "border-color 0.2s",
};

const labelStyle = { display: "block", fontSize: 13, fontWeight: 600, color: "var(--color-heading)", marginBottom: 5 };

/**
 * Kompakt förfrågningsformulär som postar till /api/kontakt.
 * foretag=true lägger till fälten Företag och Lokalens storlek.
 * Umami-eventet skickas först när API:t svarat ok.
 */
export default function OffertForm({
  title = "Få en offert",
  subtitle = "Fyll i formuläret så återkommer vi med ett prisförslag.",
  arende = "Offertförfrågan",
  event = "lead-kontakt",
  foretag = false,
  buttonText,
}) {
  const [form, setForm] = useState({ foretag: "", namn: "", email: "", telefon: "", yta: "", meddelande: "", hp: "" });
  const [status, setStatus] = useState({ state: "idle", error: "" });

  const focus = (e) => (e.target.style.borderColor = "var(--color-primary)");
  const blur = (e) => (e.target.style.borderColor = "var(--color-border)");
  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const onSubmit = async (e) => {
    e.preventDefault();
    if (status.state === "loading") return;
    setStatus({ state: "loading", error: "" });
    try {
      const data = new FormData();
      data.append("namn", form.namn);
      data.append("email", form.email);
      data.append("telefon", form.telefon);
      data.append("arende", arende);
      const rader = [];
      if (foretag && form.foretag) rader.push(`Företag: ${form.foretag}`);
      if (foretag && form.yta) rader.push(`Lokalens storlek: ${form.yta}`);
      if (form.meddelande) rader.push(form.meddelande);
      data.append("meddelande", rader.join("\n"));
      data.append("hp_field", form.hp);
      const res = await fetch("/api/kontakt", { method: "POST", body: data });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(json.error || "Något gick fel. Ring oss så hjälper vi dig direkt.");
      setStatus({ state: "success", error: "" });
      if (typeof window !== "undefined" && window.umami) { window.umami.track(event); }
    } catch (err) {
      setStatus({ state: "error", error: err.message });
    }
  };

  const card = {
    background: "white", border: "1px solid var(--color-border)", borderRadius: 16,
    padding: "28px 28px 24px", boxShadow: "0 12px 40px rgba(12,26,43,0.08)",
  };

  if (status.state === "success") {
    return (
      <div style={{ ...card, textAlign: "center", padding: "40px 28px" }}>
        <CheckCircle2 size={44} style={{ color: "var(--color-success)", margin: "0 auto 14px" }} />
        <h2 style={{ fontSize: 24, marginBottom: 10 }}>Tack, vi har fått din förfrågan</h2>
        <p style={{ fontSize: 15, color: "var(--color-body)", lineHeight: 1.6, marginBottom: 18 }}>
          Vi återkommer till dig så snart vi kan. Vill du ha svar direkt går det bra att ringa.
        </p>
        <a href="tel:08-377176" className="btn-secondary"><Phone size={16} /> 08-37 71 76</a>
      </div>
    );
  }

  return (
    <div style={card}>
      <h2 style={{ fontSize: 24, marginBottom: 6 }}>{title}</h2>
      <p style={{ fontSize: 14, color: "var(--color-muted)", lineHeight: 1.5, marginBottom: 20 }}>{subtitle}</p>

      <form onSubmit={onSubmit} style={{ display: "grid", gap: 14 }}>
        {foretag && (
          <div>
            <label style={labelStyle} htmlFor={`${event}-foretag`}>Företag *</label>
            <input id={`${event}-foretag`} required placeholder="Företagets namn" value={form.foretag} onChange={update("foretag")} style={inputStyle} onFocus={focus} onBlur={blur} autoComplete="organization" />
          </div>
        )}

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }} className="hero-form-grid">
          <div>
            <label style={labelStyle} htmlFor={`${event}-namn`}>{foretag ? "Kontaktperson *" : "Namn *"}</label>
            <input id={`${event}-namn`} required placeholder="Ditt namn" value={form.namn} onChange={update("namn")} style={inputStyle} onFocus={focus} onBlur={blur} autoComplete="name" />
          </div>
          <div>
            <label style={labelStyle} htmlFor={`${event}-telefon`}>Telefon *</label>
            <input id={`${event}-telefon`} type="tel" required placeholder="07X-XXX XX XX" value={form.telefon} onChange={update("telefon")} style={inputStyle} onFocus={focus} onBlur={blur} autoComplete="tel" />
          </div>
        </div>

        <div>
          <label style={labelStyle} htmlFor={`${event}-email`}>E-post *</label>
          <input id={`${event}-email`} type="email" required placeholder="din@email.se" value={form.email} onChange={update("email")} style={inputStyle} onFocus={focus} onBlur={blur} autoComplete="email" />
        </div>

        {foretag && (
          <div>
            <label style={labelStyle} htmlFor={`${event}-yta`}>Lokalens storlek</label>
            <input id={`${event}-yta`} placeholder="T.ex. 250 kvm, två våningar" value={form.yta} onChange={update("yta")} style={inputStyle} onFocus={focus} onBlur={blur} />
          </div>
        )}

        <div>
          <label style={labelStyle} htmlFor={`${event}-meddelande`}>{foretag ? "Vad behöver ni hjälp med?" : "Vad behöver du hjälp med?"}</label>
          <textarea id={`${event}-meddelande`} rows={3} placeholder={foretag ? "Hur ofta, vilka tider och något särskilt vi bör veta" : "Vilken tjänst, hur stor bostad och när det passar"} value={form.meddelande} onChange={update("meddelande")} style={{ ...inputStyle, resize: "vertical" }} onFocus={focus} onBlur={blur} />
        </div>

        {/* Honeypot: dolt för människor, fylls bara i av robotar */}
        <div aria-hidden="true" style={{ position: "absolute", left: -9999, top: "auto", width: 1, height: 1, overflow: "hidden" }}>
          <label htmlFor={`${event}-hp`}>Lämna tomt</label>
          <input id={`${event}-hp`} name="hp_field" tabIndex={-1} autoComplete="off" value={form.hp} onChange={update("hp")} />
        </div>

        {status.state === "error" && (
          <p role="alert" style={{ fontSize: 14, color: "#B91C1C", background: "#FEF2F2", padding: "10px 14px", borderRadius: 8 }}>{status.error}</p>
        )}

        <button type="submit" disabled={status.state === "loading"} className="btn-primary" style={{ width: "100%", justifyContent: "center", padding: 16, fontSize: 16, opacity: status.state === "loading" ? 0.7 : 1, cursor: status.state === "loading" ? "wait" : "pointer" }}>
          {status.state === "loading" ? (<><Loader2 size={18} className="spin" /> Skickar...</>) : (buttonText || (foretag ? "Skicka offertförfrågan" : "Skicka förfrågan"))}
        </button>
        <p style={{ fontSize: 12, color: "var(--color-muted)", textAlign: "center", margin: 0 }}>Kostnadsfritt och utan förbindelse.</p>
      </form>
    </div>
  );
}
