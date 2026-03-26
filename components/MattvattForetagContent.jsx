"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone, ChevronRight, Check, Leaf } from "lucide-react";

const steg = [
  { nr: "1", title: "Dammsugning", desc: "Avlägsnar löst smuts och damm." },
  { nr: "2", title: "Fläckborttagning", desc: "Löser upp befintliga fläckar med specialmedel." },
  { nr: "3", title: "Maskinell skurning", desc: "Löser ingrodd smuts på djupet." },
  { nr: "4", title: "Våtsugning", desc: "Suger upp all smuts och rengöringsmedel." },
  { nr: "5", title: "Slutkontroll", desc: "Gemensam kontroll med er." },
];

export default function MattvattForetagContent() {
  return (
    <>
      <div style={{ background: "var(--color-bg-alt)", borderBottom: "1px solid var(--color-border-light)" }}>
        <nav aria-label="Brödsmulor" className="container" style={{ padding: "12px 20px", fontSize: 13, color: "var(--color-muted)", display: "flex", alignItems: "center", gap: 4 }}>
          <a href="/" style={{ color: "var(--color-muted)", textDecoration: "none" }}>Hem</a><ChevronRight size={12} />
          <a href="/foretag" style={{ color: "var(--color-muted)", textDecoration: "none" }}>Företag</a><ChevronRight size={12} />
          <span style={{ color: "var(--color-heading)", fontWeight: 500 }}>Mattvätt företag</span>
        </nav>
      </div>

      <section className="section">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }} className="services-layout">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-primary)", marginBottom: 12, display: "block" }}>Företag</span>
              <h1 style={{ fontSize: "clamp(28px, 4.5vw, 44px)", marginBottom: 20, lineHeight: 1.1 }}>Professionell mattvätt för kontor och fastigheter</h1>
              <p style={{ fontSize: 17, color: "var(--color-body)", lineHeight: 1.7, marginBottom: 16 }}>
                Vi utför professionell mattvätt för kontor, bostadsrättsföreningar och fastigheter i hela Storstockholm — på plats hos er. Regelbunden professionell rengöring förlänger mattans livslängd och återställer dess ursprungliga utseende.
              </p>
              <p style={{ fontSize: 15, color: "var(--color-muted)", lineHeight: 1.6, marginBottom: 32 }}>
                Vi hanterar alla typer av mattor — från entrémattor till heltäckningsmattor i alla storlekar.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a href="/boka" className="btn-primary">Boka mattvätt</a>
                <a href="tel:08-377176" className="btn-secondary"><Phone size={16} /> 08-37 71 76</a>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
              <img src="/images/tjanst-mattvatt.jpg" alt="Mattvätt företag Stockholm" style={{ width: "100%", borderRadius: 12, aspectRatio: "16/10", objectFit: "cover" }} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-alt">
        <div className="container" style={{ maxWidth: 750 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ textAlign: "center", marginBottom: 48 }}>
            <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-primary)", marginBottom: 12, display: "block" }}>Vår process</span>
            <h2 style={{ fontSize: "clamp(26px, 4vw, 38px)", marginBottom: 14 }}>Så tvättar vi era mattor</h2>
            <p style={{ fontSize: 15, color: "var(--color-muted)", display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>
              <Leaf size={16} style={{ color: "var(--color-primary)" }} /> Alla tvättmedel är Svanenmärkta
            </p>
          </motion.div>
          {steg.map((s, i) => (
            <motion.div key={s.nr} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }}
              style={{ display: "flex", gap: 20, padding: "24px 0", borderBottom: i < steg.length - 1 ? "1px solid var(--color-border-light)" : "none" }}>
              <div style={{ width: 48, height: 48, borderRadius: "50%", background: "var(--color-primary)", color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, fontWeight: 800, flexShrink: 0 }}>{s.nr}</div>
              <div>
                <h3 style={{ fontSize: 18, marginBottom: 4 }}>{s.title}</h3>
                <p style={{ fontSize: 15, color: "var(--color-muted)", lineHeight: 1.5 }}>{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Varför oss */}
      <section className="section">
        <div className="container" style={{ maxWidth: 700 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ textAlign: "center", marginBottom: 36 }}>
            <h2 style={{ fontSize: "clamp(24px, 3.5vw, 32px)" }}>Varför välja oss?</h2>
          </motion.div>
          <div style={{ display: "grid", gap: 10 }}>
            {[
              "De flesta uppdrag utförs på plats hos er",
              "Vi kan få bort nästan alla typer av fläckar",
              "Svanenmärkta rengöringsmedel",
              "Ansvarsförsäkrad upp till 10 miljoner kronor",
              "Bakgrundskontrollerad personal med tystnadsplikt",
              "Faktura med 20 dagars betalningsvillkor",
            ].map((item) => (
              <div key={item} style={{ display: "flex", alignItems: "center", gap: 10, padding: "14px 18px", background: "var(--color-bg-alt)", borderRadius: 8, fontSize: 15, color: "var(--color-body)" }}>
                <Check size={18} style={{ color: "var(--color-primary)", flexShrink: 0 }} /> {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ background: "var(--color-primary)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.05, backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 30px, rgba(255,255,255,0.5) 30px, rgba(255,255,255,0.5) 31px)" }} />
        <div className="container" style={{ padding: "80px 20px", textAlign: "center", position: "relative", zIndex: 1 }}>
          <h2 style={{ fontSize: "clamp(26px, 4vw, 40px)", color: "white", marginBottom: 14 }}>Boka mattvätt för ert företag</h2>
          <p style={{ fontSize: 17, color: "rgba(255,255,255,0.8)", maxWidth: 480, margin: "0 auto 32px" }}>Svanenmärkta produkter. På plats i hela Storstockholm.</p>
          <div style={{ display: "flex", justifyContent: "center", gap: 14, flexWrap: "wrap" }}>
            <a className="btn-accent" href="/boka">Boka mattvätt <ArrowRight size={17} /></a>
            <a className="btn-secondary" href="tel:08-377176" style={{ color: "white", borderColor: "rgba(255,255,255,0.25)" }}><Phone size={16} /> Ring 08-37 71 76</a>
          </div>
        </div>
      </section>
    </>
  );
}
