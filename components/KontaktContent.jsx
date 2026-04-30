"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Phone, Mail, MapPin, Clock, ChevronRight, ChevronDown, Paperclip, X, Loader2 } from "lucide-react";
import { compressImage } from "./imageCompression";

const arenden = [
  "Boka städning",
  "Frågor om företagstjänster",
  "Boka offertmöte",
  "Fakturafrågor",
  "Jobbansökan",
  "Övrigt",
];

const inputStyle = {
  width: "100%", padding: "14px 18px", fontSize: 15,
  border: "2px solid var(--color-border)", borderRadius: 10,
  background: "white", color: "var(--color-heading)", outline: "none",
  fontFamily: "var(--font-body)", transition: "border-color 0.2s",
};

export default function KontaktContent() {
  const focus = (e) => (e.target.style.borderColor = "var(--color-primary)");
  const blur = (e) => (e.target.style.borderColor = "var(--color-border)");
  const [files, setFiles] = useState([]);
  const [form, setForm] = useState({ namn: "", email: "", telefon: "", arende: "", meddelande: "" });
  const [status, setStatus] = useState({ state: "idle", error: "" });
  const [compressing, setCompressing] = useState(false);
  const handleFiles = async (e) => {
    const picked = Array.from(e.target.files || []);
    e.target.value = "";
    if (picked.length === 0) return;
    setCompressing(true);
    try {
      const compressed = await Promise.all(picked.map(compressImage));
      setFiles((prev) => [...prev, ...compressed].slice(0, 10));
    } finally {
      setCompressing(false);
    }
  };
  const removeFile = (i) => setFiles((prev) => prev.filter((_, idx) => idx !== i));
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
      data.append("arende", form.arende);
      data.append("meddelande", form.meddelande);
      files.forEach((f) => data.append("files", f));
      const res = await fetch("/api/kontakt", { method: "POST", body: data });
      const json = await res.json().catch(() => ({}));
      if (!res.ok) {
        if (res.status === 413) throw new Error("Bilderna är för stora. Försök med färre eller mindre bilder.");
        throw new Error(json.error || "Något gick fel.");
      }
      setStatus({ state: "success", error: "" });
      setForm({ namn: "", email: "", telefon: "", arende: "", meddelande: "" });
      setFiles([]);
    } catch (err) {
      setStatus({ state: "error", error: err.message });
    }
  };

  return (
    <>
      <div style={{ background: "var(--color-bg-alt)", borderBottom: "1px solid var(--color-border-light)" }}>
        <nav aria-label="Brödsmulor" className="container" style={{ padding: "12px 20px", fontSize: 13, color: "var(--color-muted)", display: "flex", alignItems: "center", gap: 4 }}>
          <a href="/" style={{ color: "var(--color-muted)", textDecoration: "none" }}>Hem</a><ChevronRight size={12} />
          <span style={{ color: "var(--color-heading)", fontWeight: 500 }}>Kontakt</span>
        </nav>
      </div>

      <section className="section">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 400px", gap: 64, alignItems: "start" }} className="services-layout">
            {/* Form */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h1 style={{ fontSize: "clamp(28px, 4vw, 40px)", marginBottom: 8 }}>Kontakta oss</h1>
              <p style={{ fontSize: 17, color: "var(--color-muted)", marginBottom: 36, lineHeight: 1.6 }}>
                Har du några frågor? Tveka inte på att kontakta oss. Fyll i formuläret så återkommer vi inom kort.
              </p>

              <form onSubmit={onSubmit} style={{ display: "grid", gap: 16 }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="hero-form-grid">
                  <div>
                    <label style={{ display: "block", fontSize: 14, fontWeight: 600, color: "var(--color-heading)", marginBottom: 6 }}>Namn *</label>
                    <input required placeholder="Ditt namn" value={form.namn} onChange={update("namn")} style={inputStyle} onFocus={focus} onBlur={blur} />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: 14, fontWeight: 600, color: "var(--color-heading)", marginBottom: 6 }}>E-post *</label>
                    <input type="email" required placeholder="din@email.se" value={form.email} onChange={update("email")} style={inputStyle} onFocus={focus} onBlur={blur} />
                  </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="hero-form-grid">
                  <div>
                    <label style={{ display: "block", fontSize: 14, fontWeight: 600, color: "var(--color-heading)", marginBottom: 6 }}>Telefon *</label>
                    <input type="tel" required placeholder="07X-XXX XX XX" value={form.telefon} onChange={update("telefon")} style={inputStyle} onFocus={focus} onBlur={blur} />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: 14, fontWeight: 600, color: "var(--color-heading)", marginBottom: 6 }}>Ditt ärende</label>
                    <div style={{ position: "relative" }}>
                      <select value={form.arende} onChange={update("arende")} style={{ ...inputStyle, appearance: "none", cursor: "pointer", paddingRight: 40 }} onFocus={focus} onBlur={blur}>
                        <option value="">Välj ärende...</option>
                        {arenden.map((a) => <option key={a} value={a}>{a}</option>)}
                      </select>
                      <ChevronDown size={18} style={{ position: "absolute", right: 14, top: "50%", transform: "translateY(-50%)", color: "#666", pointerEvents: "none" }} />
                    </div>
                  </div>
                </div>

                <div>
                  <label style={{ display: "block", fontSize: 14, fontWeight: 600, color: "var(--color-heading)", marginBottom: 6 }}>Meddelande</label>
                  <textarea rows={5} placeholder="Berätta vad du behöver hjälp med..." value={form.meddelande} onChange={update("meddelande")} style={{ ...inputStyle, resize: "vertical" }} onFocus={focus} onBlur={blur} />
                </div>

                <div>
                  <label style={{ display: "block", fontSize: 14, fontWeight: 600, color: "var(--color-heading)", marginBottom: 6 }}>Bifoga bilder (valfritt)</label>
                  <label style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, padding: 14, border: "2px dashed var(--color-border)", borderRadius: 10, cursor: compressing ? "wait" : "pointer", background: "white", fontSize: 14, color: "var(--color-muted)", transition: "border-color 0.2s", opacity: compressing ? 0.7 : 1 }}
                    onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--color-primary)")}
                    onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--color-border)")}>
                    {compressing ? <Loader2 size={16} className="spin" /> : <Paperclip size={16} />}
                    <span>{compressing ? "Förbereder bilder..." : "Klicka för att välja bilder eller släpp filer här"}</span>
                    <input type="file" accept="image/*" multiple onChange={handleFiles} disabled={compressing} style={{ display: "none" }} />
                  </label>
                  <p style={{ fontSize: 12, color: "var(--color-muted)", marginTop: 6 }}>Max 10 bilder. Bilderna komprimeras automatiskt innan de skickas.</p>
                  {files.length > 0 && (
                    <ul style={{ listStyle: "none", padding: 0, margin: "12px 0 0", display: "grid", gap: 6 }}>
                      {files.map((f, i) => (
                        <li key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10, padding: "8px 12px", background: "var(--color-bg-alt)", borderRadius: 8, fontSize: 13 }}>
                          <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{f.name} <span style={{ color: "var(--color-muted)" }}>({(f.size / 1024).toFixed(0)} kB)</span></span>
                          <button type="button" onClick={() => removeFile(i)} aria-label="Ta bort" style={{ background: "transparent", border: "none", cursor: "pointer", color: "var(--color-muted)", display: "flex", alignItems: "center" }}>
                            <X size={16} />
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <button type="submit" disabled={status.state === "loading"} className="btn-primary" style={{ width: "100%", justifyContent: "center", padding: 18, fontSize: 16, opacity: status.state === "loading" ? 0.7 : 1, cursor: status.state === "loading" ? "wait" : "pointer" }}>
                  {status.state === "loading" ? "Skickar..." : "Skicka meddelande"}
                </button>

                {status.state === "success" && (
                  <div role="status" style={{ padding: 14, borderRadius: 10, background: "var(--color-primary-light, rgba(0,114,185,0.08))", color: "var(--color-primary)", fontSize: 14, fontWeight: 600 }}>
                    Tack! Meddelandet är skickat — vi återkommer inom kort.
                  </div>
                )}
                {status.state === "error" && (
                  <div role="alert" style={{ padding: 14, borderRadius: 10, background: "rgba(220,38,38,0.08)", color: "#dc2626", fontSize: 14, fontWeight: 600 }}>
                    {status.error || "Något gick fel. Försök igen eller ring oss direkt."}
                  </div>
                )}
              </form>
            </motion.div>

            {/* Sidebar */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }}>
              <div style={{ background: "var(--color-primary)", borderRadius: 16, padding: 32, color: "white", marginBottom: 24 }}>
                <h2 style={{ fontSize: 20, color: "white", marginBottom: 24 }}>Kontaktuppgifter</h2>
                <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                  <a href="tel:08-377176" style={{ color: "white", textDecoration: "none", display: "flex", alignItems: "center", gap: 12, fontSize: 16, fontWeight: 600 }}>
                    <Phone size={20} /> 08-37 71 76
                  </a>
                  <div style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", marginTop: -10, paddingLeft: 32 }}>Växel</div>

                  <a href="tel:073-5411068" style={{ color: "rgba(255,255,255,0.9)", textDecoration: "none", display: "flex", alignItems: "center", gap: 12, fontSize: 15 }}>
                    <Phone size={18} /> 073-541 10 68
                  </a>
                  <div style={{ fontSize: 13, color: "rgba(255,255,255,0.6)", marginTop: -10, paddingLeft: 32 }}>Jourtelefon (avtalskunder)</div>

                  <a href="mailto:info@timeoutservice.se" style={{ color: "rgba(255,255,255,0.9)", textDecoration: "none", display: "flex", alignItems: "center", gap: 12, fontSize: 15 }}>
                    <Mail size={18} /> info@timeoutservice.se
                  </a>

                  <div style={{ display: "flex", alignItems: "flex-start", gap: 12, fontSize: 15, color: "rgba(255,255,255,0.9)" }}>
                    <MapPin size={18} style={{ flexShrink: 0, marginTop: 2 }} /> Terrängvägen 43, 129 48 Hägersten
                  </div>

                  <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 15, color: "rgba(255,255,255,0.9)" }}>
                    <Clock size={18} /> Mån–Fre 08:00–17:00
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div style={{ borderRadius: 12, overflow: "hidden", border: "1px solid var(--color-border)", height: 220, background: "var(--color-bg-alt)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2038.5!2d17.9827!3d59.2965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTnCsDE3JzQ3LjQiTiAxN8KwNTgnNTcuNyJF!5e0!3m2!1ssv!2sse!4v1"
                  width="100%" height="220" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                  title="Timeout Service AB — Terrängvägen 43, Hägersten"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
