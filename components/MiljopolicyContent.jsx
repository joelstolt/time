"use client";

import { motion } from "framer-motion";
import { ChevronRight, Check, Leaf, Recycle, Droplets } from "lucide-react";

const ataganden = [
  "Kontinuerlig utveckling och förbättring av miljöpolicyn",
  "Val av miljöskonsamma arbetsmetoder",
  "Enbart rengöringsprodukter och toalettpapper godkända med Svanenmärket eller Naturskyddsföreningens märkning",
  "Undvikande av engångsartiklar i största möjliga mån",
  "Högkvalitativa moppar med förlängd livslängd för att minska avfall",
];

const praxis = [
  "Noggrann undvikande av överdosering av rengöringsmedel",
  "Återanvändning av sopkassar när de är minimalt fyllda istället för att byta",
  "Personalens engagemang och löpande miljöutbildning",
  "Samarbete med kunder, miljömyndigheter och organisationer",
];

export default function MiljopolicyContent() {
  return (
    <>
      <div style={{ background: "var(--color-bg-alt)", borderBottom: "1px solid var(--color-border-light)" }}>
        <nav aria-label="Brödsmulor" className="container" style={{ padding: "12px 20px", fontSize: 13, color: "var(--color-muted)", display: "flex", alignItems: "center", gap: 4 }}>
          <a href="/" style={{ color: "var(--color-muted)", textDecoration: "none" }}>Hem</a><ChevronRight size={12} />
          <a href="/om-oss" style={{ color: "var(--color-muted)", textDecoration: "none" }}>Om oss</a><ChevronRight size={12} />
          <span style={{ color: "var(--color-heading)", fontWeight: 500 }}>Miljöpolicy</span>
        </nav>
      </div>

      <section className="section">
        <div className="container" style={{ maxWidth: 800 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} style={{ textAlign: "center", marginBottom: 56 }}>
            <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-primary)", marginBottom: 12, display: "block" }}>Om oss</span>
            <h1 style={{ fontSize: "clamp(32px, 5vw, 48px)", marginBottom: 20 }}>Miljöpolicy</h1>
            <p style={{ fontSize: 18, color: "var(--color-body)", lineHeight: 1.7, maxWidth: 600, margin: "0 auto" }}>
              Vi gör vårt bästa för att skapa förutsättningar till miljöförbättring. Utveckling av miljöpolicyn sker kontinuerligt och det är ett arbete som ständigt är under förbättring.
            </p>
          </motion.div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40 }} className="services-layout">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
              style={{ padding: 28, background: "white", borderRadius: 12, border: "1px solid var(--color-border)", borderTop: "3px solid var(--color-primary)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
                <Leaf size={22} style={{ color: "var(--color-primary)" }} />
                <h2 style={{ fontSize: 20 }}>Våra åtaganden</h2>
              </div>
              {ataganden.map((item) => (
                <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 15, color: "var(--color-body)", marginBottom: 10, lineHeight: 1.6 }}>
                  <Check size={16} style={{ color: "var(--color-primary)", flexShrink: 0, marginTop: 4 }} /> {item}
                </div>
              ))}
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
              style={{ padding: 28, background: "white", borderRadius: 12, border: "1px solid var(--color-border)", borderTop: "3px solid var(--color-accent)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
                <Recycle size={22} style={{ color: "var(--color-accent)" }} />
                <h2 style={{ fontSize: 20 }}>I praktiken</h2>
              </div>
              {praxis.map((item) => (
                <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 15, color: "var(--color-body)", marginBottom: 10, lineHeight: 1.6 }}>
                  <Check size={16} style={{ color: "var(--color-accent)", flexShrink: 0, marginTop: 4 }} /> {item}
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            style={{ marginTop: 40, padding: 28, background: "var(--color-primary)", borderRadius: 12, textAlign: "center" }}>
            <Droplets size={32} style={{ color: "var(--color-accent)", marginBottom: 12 }} />
            <h3 style={{ fontSize: 20, color: "white", marginBottom: 8 }}>Ledningens ansvar</h3>
            <p style={{ fontSize: 15, color: "rgba(255,255,255,0.8)", lineHeight: 1.6, maxWidth: 560, margin: "0 auto" }}>
              Ledningen har det yttersta ansvaret för att miljöpolicyn dokumenteras, implementeras, underhålls och kommuniceras till alla medarbetare och allmänheten. Policyn återspeglar organisationens engagemang för lagefterlevnad och ständig förbättring.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
