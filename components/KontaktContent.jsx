"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, ChevronRight, ChevronDown } from "lucide-react";

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

              <form style={{ display: "grid", gap: 16 }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="hero-form-grid">
                  <div>
                    <label style={{ display: "block", fontSize: 14, fontWeight: 600, color: "var(--color-heading)", marginBottom: 6 }}>Namn *</label>
                    <input required placeholder="Ditt namn" style={inputStyle} onFocus={focus} onBlur={blur} />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: 14, fontWeight: 600, color: "var(--color-heading)", marginBottom: 6 }}>E-post *</label>
                    <input type="email" required placeholder="din@email.se" style={inputStyle} onFocus={focus} onBlur={blur} />
                  </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="hero-form-grid">
                  <div>
                    <label style={{ display: "block", fontSize: 14, fontWeight: 600, color: "var(--color-heading)", marginBottom: 6 }}>Telefon *</label>
                    <input type="tel" required placeholder="07X-XXX XX XX" style={inputStyle} onFocus={focus} onBlur={blur} />
                  </div>
                  <div>
                    <label style={{ display: "block", fontSize: 14, fontWeight: 600, color: "var(--color-heading)", marginBottom: 6 }}>Ditt ärende</label>
                    <div style={{ position: "relative" }}>
                      <select style={{ ...inputStyle, appearance: "none", cursor: "pointer", paddingRight: 40 }} onFocus={focus} onBlur={blur}>
                        <option value="">Välj ärende...</option>
                        {arenden.map((a) => <option key={a} value={a}>{a}</option>)}
                      </select>
                      <ChevronDown size={18} style={{ position: "absolute", right: 14, top: "50%", transform: "translateY(-50%)", color: "#666", pointerEvents: "none" }} />
                    </div>
                  </div>
                </div>

                <div>
                  <label style={{ display: "block", fontSize: 14, fontWeight: 600, color: "var(--color-heading)", marginBottom: 6 }}>Meddelande</label>
                  <textarea rows={5} placeholder="Berätta vad du behöver hjälp med..." style={{ ...inputStyle, resize: "vertical" }} onFocus={focus} onBlur={blur} />
                </div>

                <button type="submit" className="btn-primary" style={{ width: "100%", justifyContent: "center", padding: 18, fontSize: 16 }}>
                  Skicka meddelande
                </button>
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
