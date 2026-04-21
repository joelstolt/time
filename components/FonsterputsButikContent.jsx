"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone, ChevronRight, Check, Sparkles } from "lucide-react";

const priser = [
  { typ: "Butik med max 1–3 skyltfönster + 1–3 mindre fönster (max 2,5m höjd)", pris: "250 kr/tillfälle + moms" },
  { typ: "Fönster med glaskant 4m ovanför mark", pris: "150 kr/tillfälle + moms" },
  { typ: "Över 4 meter — kräver förlängning eller stor stege", pris: "185 kr/tillfälle + moms" },
];

export default function FonsterputsButikContent() {
  return (
    <>
      <div style={{ background: "var(--color-bg-alt)", borderBottom: "1px solid var(--color-border-light)" }}>
        <nav aria-label="Brödsmulor" className="container" style={{ padding: "12px 20px", fontSize: 13, color: "var(--color-muted)", display: "flex", alignItems: "center", gap: 4 }}>
          <a href="/" style={{ color: "var(--color-muted)", textDecoration: "none" }}>Hem</a><ChevronRight size={12} />
          <a href="/foretag" style={{ color: "var(--color-muted)", textDecoration: "none" }}>Företag</a><ChevronRight size={12} />
          <span style={{ color: "var(--color-heading)", fontWeight: 500 }}>Fönsterputs butik</span>
        </nav>
      </div>

      {/* Hero */}
      <section className="section">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }} className="services-layout">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-primary)", marginBottom: 12, display: "block" }}>Företag</span>
              <h1 style={{ fontSize: "clamp(32px, 5vw, 48px)", marginBottom: 20, lineHeight: 1.1 }}>Fönsterputs för butiker i Stockholm</h1>
              <p style={{ fontSize: 17, color: "var(--color-body)", lineHeight: 1.7, marginBottom: 16 }}>
                Har ni en butik eller restaurang i Stockholm och behöver få era skyltfönster putsade? Då har ni kommit rätt! Rena skyltfönster gör skillnad — de ger ett professionellt intryck och lockar in fler kunder.
              </p>
              <p style={{ fontSize: 15, color: "var(--color-muted)", lineHeight: 1.6, marginBottom: 32 }}>
                Vi anpassar schemat efter era behov — vecko-, varannan vecka- eller månadsservice. Vi tar även bort gamla dekaler och klotter från fönster.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a href="/boka" className="btn-primary">Boka kostnadsfritt platsbesök</a>
                <a href="tel:08-377176" className="btn-secondary"><Phone size={16} /> 08-37 71 76</a>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
              <img src="/images/fonsterputs-2.jpg" alt="Fönsterputs butik Stockholm" style={{ width: "100%", borderRadius: 12, aspectRatio: "4/3", objectFit: "cover" }} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Priser */}
      <section className="section-alt">
        <div className="container" style={{ maxWidth: 750 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ textAlign: "center", marginBottom: 40 }}>
            <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-primary)", marginBottom: 12, display: "block" }}>Priser</span>
            <h2 style={{ fontSize: "clamp(26px, 4vw, 38px)", marginBottom: 14 }}>Exempelpriser för butiksfönster</h2>
            <p style={{ fontSize: 15, color: "var(--color-muted)" }}>Exakt pris fastställs vid kostnadsfritt platsbesök.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            style={{ borderRadius: 12, overflow: "hidden", border: "1px solid var(--color-border)" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 15 }}>
              <thead>
                <tr style={{ background: "var(--color-primary)", color: "white" }}>
                  <th style={{ padding: "14px 20px", textAlign: "left", fontWeight: 600 }}>Typ</th>
                  <th style={{ padding: "14px 20px", textAlign: "right", fontWeight: 600 }}>Pris</th>
                </tr>
              </thead>
              <tbody>
                {priser.map((row, i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? "white" : "var(--color-bg-alt)" }}>
                    <td style={{ padding: "14px 20px", color: "var(--color-body)" }}>{row.typ}</td>
                    <td style={{ padding: "14px 20px", textAlign: "right", fontWeight: 600, color: "var(--color-primary)", whiteSpace: "nowrap" }}>{row.pris}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
            style={{ marginTop: 20, padding: 20, background: "var(--color-accent-light)", border: "1px solid rgba(222,160,30,0.2)", borderRadius: 12, display: "flex", alignItems: "flex-start", gap: 12 }}>
            <Sparkles size={18} style={{ color: "var(--color-accent)", flexShrink: 0, marginTop: 2 }} />
            <p style={{ fontSize: 14, color: "var(--color-muted)", lineHeight: 1.6 }}>
              <strong style={{ color: "var(--color-heading)" }}>Extra:</strong> För svåråtkomliga fönster har vi lyftutrustning tillgänglig. Vi tar även bort gamla dekaler och klotter från skyltfönster.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Varför oss */}
      <section className="section">
        <div className="container" style={{ maxWidth: 700 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ textAlign: "center", marginBottom: 40 }}>
            <h2 style={{ fontSize: "clamp(26px, 4vw, 34px)" }}>Varför välja oss?</h2>
          </motion.div>
          <div style={{ display: "grid", gap: 10 }}>
            {[
              "Flexibelt schema — vecko-, varannan vecka- eller månadsservice",
              "35 års erfarenhet av fönsterputs i Stockholm",
              "Enbart miljövänliga produkter och material",
              "Fast pris — inga dolda avgifter",
              "Lyftutrustning för svåråtkomliga fönster",
              "Dekalborttagning och klottersanering",
            ].map((item) => (
              <div key={item} style={{ display: "flex", alignItems: "center", gap: 10, padding: "14px 18px", background: "var(--color-bg-alt)", borderRadius: 8, fontSize: 15, color: "var(--color-body)" }}>
                <Check size={18} style={{ color: "var(--color-primary)", flexShrink: 0 }} /> {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--color-primary)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.05, backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 30px, rgba(255,255,255,0.5) 30px, rgba(255,255,255,0.5) 31px)" }} />
        <div className="container" style={{ padding: "80px 20px", textAlign: "center", position: "relative", zIndex: 1 }}>
          <h2 style={{ fontSize: "clamp(26px, 4vw, 40px)", color: "white", marginBottom: 14 }}>Boka fönsterputs för er butik</h2>
          <p style={{ fontSize: 17, color: "rgba(255,255,255,0.8)", maxWidth: 480, margin: "0 auto 32px" }}>Kostnadsfritt platsbesök. Skicka gärna foton via e-post för snabb offert.</p>
          <div style={{ display: "flex", justifyContent: "center", gap: 14, flexWrap: "wrap" }}>
            <a className="btn-accent" href="/boka">Boka platsbesök <ArrowRight size={17} /></a>
            <a className="btn-secondary" href="tel:08-377176" style={{ color: "white", borderColor: "rgba(255,255,255,0.25)" }}><Phone size={16} /> Ring 08-37 71 76</a>
          </div>
        </div>
      </section>
    </>
  );
}
