"use client";

import { motion } from "framer-motion";
import { ChevronRight, Check, Heart, GraduationCap, ShieldCheck, Car } from "lucide-react";

const sakerstaeller = [
  "Noggrann uppdragsanalys för att ge personalen rätt förutsättningar",
  "Kontinuerlig utbildning i arbetsledning, städteknik, ergonomi, metodik, kvalitet och miljö",
  "Följer branschutvecklingen och förser personalen med modern, ergonomisk utrustning",
  "Stöd genom löpande samordning, arbetsplatsträffar och medarbetarsamtal",
  "Kompetent och erfaren personal i företagsuniform med tydliga befattningsbeskrivningar",
];

const krav = [
  "Serviceinriktade, kvalitetsmedvetna och uppmärksamma på kundens behov",
  "Ansvarsfulla och punktliga",
  "Ärliga med respekt för kundens integritet",
  "Bundna av sekretessavtal med tystnadsplikt",
  "Utdrag ur belastningsregistret",
  "Utför underhållstjänster med omsorg och noggrannhet",
];

export default function PersonalContent() {
  return (
    <>
      <div style={{ background: "var(--color-bg-alt)", borderBottom: "1px solid var(--color-border-light)" }}>
        <nav aria-label="Brödsmulor" className="container" style={{ padding: "12px 20px", fontSize: 13, color: "var(--color-muted)", display: "flex", alignItems: "center", gap: 4 }}>
          <a href="/" style={{ color: "var(--color-muted)", textDecoration: "none" }}>Hem</a><ChevronRight size={12} />
          <a href="/om-oss" style={{ color: "var(--color-muted)", textDecoration: "none" }}>Om oss</a><ChevronRight size={12} />
          <span style={{ color: "var(--color-heading)", fontWeight: 500 }}>Personal</span>
        </nav>
      </div>

      <section className="section">
        <div className="container" style={{ maxWidth: 800 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} style={{ textAlign: "center", marginBottom: 56 }}>
            <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-primary)", marginBottom: 12, display: "block" }}>Om oss</span>
            <h1 style={{ fontSize: "clamp(32px, 5vw, 48px)", marginBottom: 20 }}>Personalen är vår absolut viktigaste resurs</h1>
            <p style={{ fontSize: 17, color: "var(--color-body)", lineHeight: 1.7, maxWidth: 640, margin: "0 auto" }}>
              För att ni ska vara nöjda kunder, behöver vi nöjda, motiverade och engagerade medarbetare. Våra medarbetare bär det stora ansvaret vid varje arbete och det är vårt uppdrag som arbetsgivare att se till att de får bästa möjliga förutsättningar.
            </p>
          </motion.div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40 }} className="services-layout">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
                <div style={{ width: 44, height: 44, borderRadius: 10, background: "var(--color-primary-light)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <GraduationCap size={22} style={{ color: "var(--color-primary)" }} />
                </div>
                <h2 style={{ fontSize: 20 }}>Så säkerställer vi kvalitet</h2>
              </div>
              {sakerstaeller.map((item) => (
                <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 15, color: "var(--color-body)", marginBottom: 10, lineHeight: 1.6 }}>
                  <Check size={16} style={{ color: "var(--color-primary)", flexShrink: 0, marginTop: 4 }} /> {item}
                </div>
              ))}
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
                <div style={{ width: 44, height: 44, borderRadius: 10, background: "var(--color-primary-light)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Heart size={22} style={{ color: "var(--color-primary)" }} />
                </div>
                <h2 style={{ fontSize: 20 }}>Krav på vår personal</h2>
              </div>
              {krav.map((item) => (
                <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 15, color: "var(--color-body)", marginBottom: 10, lineHeight: 1.6 }}>
                  <Check size={16} style={{ color: "var(--color-primary)", flexShrink: 0, marginTop: 4 }} /> {item}
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            style={{ marginTop: 40, padding: 24, background: "var(--color-primary-light)", borderRadius: 12, display: "flex", alignItems: "flex-start", gap: 14 }}>
            <Car size={20} style={{ color: "var(--color-primary)", flexShrink: 0, marginTop: 2 }} />
            <p style={{ fontSize: 15, color: "var(--color-body)", lineHeight: 1.6 }}>
              Vi har patrullfordon som stöd vid sjukdom eller incidenter utanför ordinarie underhållsarbete — för att säkerställa att era tjänster alltid utförs enligt plan.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
