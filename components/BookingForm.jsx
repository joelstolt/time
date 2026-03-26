"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const services = [
  "Hemstädning",
  "Flyttstädning",
  "Storstädning",
  "Fönsterputs",
  "Visningsstädning",
  "Köksstädning",
  "Badrumsstädning",
  "Mattvätt",
  "Kontorstädning",
  "Företagsstäd",
];

function BookingFormInner() {
  const searchParams = useSearchParams();
  const preService = searchParams.get("tjanst") || "";
  const preSqm = searchParams.get("kvm") || "";

  const inputStyle = {
    width: "100%",
    padding: "14px 18px",
    fontSize: 15,
    border: "2px solid var(--color-border)",
    borderRadius: 10,
    background: "white",
    color: "var(--color-heading)",
    outline: "none",
    fontFamily: "var(--font-body)",
    transition: "border-color 0.2s",
  };

  const labelStyle = {
    display: "block",
    fontSize: 14,
    fontWeight: 600,
    color: "var(--color-heading)",
    marginBottom: 6,
  };

  return (
    <>
      {/* Breadcrumb */}
      <div style={{ background: "var(--color-bg-alt)", borderBottom: "1px solid var(--color-border-light)" }}>
        <nav className="container" style={{ padding: "12px 20px", fontSize: 13, color: "var(--color-muted)", display: "flex", alignItems: "center", gap: 4 }}>
          <a href="/" style={{ color: "var(--color-muted)", textDecoration: "none" }}>Hem</a>
          <span style={{ margin: "0 4px" }}>›</span>
          <span style={{ color: "var(--color-heading)", fontWeight: 500 }}>Boka</span>
        </nav>
      </div>

      <section className="section">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 400px", gap: 64, alignItems: "start" }} className="services-layout">
            {/* Form */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h1 style={{ fontSize: "clamp(28px, 4vw, 40px)", marginBottom: 8 }}>Boka städning</h1>
              <p style={{ fontSize: 17, color: "var(--color-muted)", marginBottom: 36, lineHeight: 1.6 }}>
                Fyll i dina uppgifter så kontaktar vi dig inom kort. Alla fält markerade med * är obligatoriska.
              </p>

              <form
                action="https://formspree.io/f/placeholder"
                method="POST"
                style={{ display: "grid", gap: 20 }}
              >
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="hero-form-grid">
                  <div>
                    <label style={labelStyle}>Förnamn *</label>
                    <input name="fornamn" required style={inputStyle} placeholder="Förnamn" onFocus={(e) => (e.target.style.borderColor = "var(--color-primary)")} onBlur={(e) => (e.target.style.borderColor = "var(--color-border)")} />
                  </div>
                  <div>
                    <label style={labelStyle}>Efternamn *</label>
                    <input name="efternamn" required style={inputStyle} placeholder="Efternamn" onFocus={(e) => (e.target.style.borderColor = "var(--color-primary)")} onBlur={(e) => (e.target.style.borderColor = "var(--color-border)")} />
                  </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="hero-form-grid">
                  <div>
                    <label style={labelStyle}>E-post *</label>
                    <input name="email" type="email" required style={inputStyle} placeholder="din@email.se" onFocus={(e) => (e.target.style.borderColor = "var(--color-primary)")} onBlur={(e) => (e.target.style.borderColor = "var(--color-border)")} />
                  </div>
                  <div>
                    <label style={labelStyle}>Telefon *</label>
                    <input name="telefon" type="tel" required style={inputStyle} placeholder="07X-XXX XX XX" onFocus={(e) => (e.target.style.borderColor = "var(--color-primary)")} onBlur={(e) => (e.target.style.borderColor = "var(--color-border)")} />
                  </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="hero-form-grid">
                  <div>
                    <label style={labelStyle}>Adress</label>
                    <input name="adress" style={inputStyle} placeholder="Gatuadress" onFocus={(e) => (e.target.style.borderColor = "var(--color-primary)")} onBlur={(e) => (e.target.style.borderColor = "var(--color-border)")} />
                  </div>
                  <div>
                    <label style={labelStyle}>Postnummer</label>
                    <input name="postnummer" style={inputStyle} placeholder="XXX XX" onFocus={(e) => (e.target.style.borderColor = "var(--color-primary)")} onBlur={(e) => (e.target.style.borderColor = "var(--color-border)")} />
                  </div>
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="hero-form-grid">
                  <div>
                    <label style={labelStyle}>Tjänst *</label>
                    <select name="tjanst" required defaultValue={preService} style={{ ...inputStyle, appearance: "none", cursor: "pointer" }} onFocus={(e) => (e.target.style.borderColor = "var(--color-primary)")} onBlur={(e) => (e.target.style.borderColor = "var(--color-border)")}>
                      <option value="">Välj tjänst...</option>
                      {services.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label style={labelStyle}>Storlek (kvm)</label>
                    <input name="kvm" type="number" defaultValue={preSqm} style={inputStyle} placeholder="t.ex. 75" onFocus={(e) => (e.target.style.borderColor = "var(--color-primary)")} onBlur={(e) => (e.target.style.borderColor = "var(--color-border)")} />
                  </div>
                </div>

                <div>
                  <label style={labelStyle}>Önskat datum</label>
                  <input name="datum" type="date" style={inputStyle} onFocus={(e) => (e.target.style.borderColor = "var(--color-primary)")} onBlur={(e) => (e.target.style.borderColor = "var(--color-border)")} />
                </div>

                <div>
                  <label style={labelStyle}>Meddelande</label>
                  <textarea name="meddelande" rows={4} style={{ ...inputStyle, resize: "vertical" }} placeholder="Berätta mer om vad du behöver hjälp med..." onFocus={(e) => (e.target.style.borderColor = "var(--color-primary)")} onBlur={(e) => (e.target.style.borderColor = "var(--color-border)")} />
                </div>

                <button type="submit" className="btn-primary" style={{ width: "100%", justifyContent: "center", padding: "18px", fontSize: 16 }}>
                  Skicka bokningsförfrågan
                </button>

                <p style={{ fontSize: 13, color: "var(--color-faint)", textAlign: "center" }}>
                  Genom att skicka godkänner du vår <a href="/integritetspolicy" style={{ color: "var(--color-primary)" }}>integritetspolicy</a>.
                </p>
              </form>
            </motion.div>

            {/* Sidebar */}
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.15 }}>
              <div style={{ background: "var(--color-primary)", borderRadius: 16, padding: 32, color: "white", marginBottom: 24 }}>
                <h3 style={{ fontSize: 20, color: "white", marginBottom: 20 }}>Kontakta oss direkt</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  <a href="tel:08-377176" style={{ color: "white", textDecoration: "none", display: "flex", alignItems: "center", gap: 10, fontSize: 15 }}>
                    <Phone size={18} /> 08-37 71 76
                  </a>
                  <a href="mailto:info@timeoutservice.se" style={{ color: "rgba(255,255,255,0.8)", textDecoration: "none", display: "flex", alignItems: "center", gap: 10, fontSize: 15 }}>
                    <Mail size={18} /> info@timeoutservice.se
                  </a>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 15, color: "rgba(255,255,255,0.8)" }}>
                    <MapPin size={18} /> Terrängvägen 43, Hägersten
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 15, color: "rgba(255,255,255,0.8)" }}>
                    <Clock size={18} /> Mån–Fre 08:00–17:00
                  </div>
                </div>
              </div>

              <div style={{ background: "var(--color-accent-light)", borderRadius: 16, padding: 24, border: "1px solid rgba(222,160,30,0.2)" }}>
                <h4 style={{ fontSize: 16, marginBottom: 8, lineHeight: 1.3 }}>RUT-avdrag — halva priset</h4>
                <p style={{ fontSize: 14, color: "var(--color-muted)", lineHeight: 1.6 }}>
                  Som privatperson får du 50% skattereduktion. Vi sköter allt pappersarbete åt dig.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

export default function BookingForm() {
  return (
    <Suspense fallback={<div className="section"><div className="container">Laddar...</div></div>}>
      <BookingFormInner />
    </Suspense>
  );
}
