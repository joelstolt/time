"use client";

import { motion } from "framer-motion";
import { ChevronRight, Check, Shield, Lock, Eye, Users } from "lucide-react";

const rutiner = [
  "Strikta rutiner runt nyckel- och kodhantering",
  "Välutbildad personal med regelbundna säkerhetsgenomgångar",
  "Regelbundna riskbedömningar för att minimera skador och hotfulla situationer",
  "Medarbetare arbetar i par vid behov",
  "Korrekt skyddsutrustning tillhandahålls",
  "Säkerhetsutbildning erbjuds på kundens anläggning",
  "All personal är försäkrad under arbetstid",
];

const sekretess = [
  "Alla medarbetare arbetar under sekretessavtal med tystnadsplikt",
  "Anställning kräver utdrag ur belastningsregistret",
  "Full diskretion garanteras gentemot alla kunder",
  "Personal bär alltid företagsuniform och legitimation",
];

export default function SakerhetContent() {
  return (
    <>
      <div style={{ background: "var(--color-bg-alt)", borderBottom: "1px solid var(--color-border-light)" }}>
        <nav aria-label="Brödsmulor" className="container" style={{ padding: "12px 20px", fontSize: 13, color: "var(--color-muted)", display: "flex", alignItems: "center", gap: 4 }}>
          <a href="/" style={{ color: "var(--color-muted)", textDecoration: "none" }}>Hem</a><ChevronRight size={12} />
          <a href="/om-oss" style={{ color: "var(--color-muted)", textDecoration: "none" }}>Om oss</a><ChevronRight size={12} />
          <span style={{ color: "var(--color-heading)", fontWeight: 500 }}>Säkerhet</span>
        </nav>
      </div>

      <section className="section">
        <div className="container" style={{ maxWidth: 800 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} style={{ textAlign: "center", marginBottom: 56 }}>
            <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-primary)", marginBottom: 12, display: "block" }}>Om oss</span>
            <h1 style={{ fontSize: "clamp(32px, 5vw, 48px)", marginBottom: 20 }}>Vi tar säkerhet på stort allvar</h1>
            <p style={{ fontSize: 17, color: "var(--color-body)", lineHeight: 1.7, maxWidth: 600, margin: "0 auto" }}>
              Med strikta rutiner runt nyckel- och kodhantering, samt välutbildad personal, ser vi till att våra kunder kan känna sig trygga och bekväma med att ge oss förtroendet att utföra tjänster i deras lokaler.
            </p>
          </motion.div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40 }} className="services-layout">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
              style={{ padding: 28, background: "white", borderRadius: 12, border: "1px solid var(--color-border)", borderTop: "3px solid var(--color-primary)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
                <Shield size={22} style={{ color: "var(--color-primary)" }} />
                <h2 style={{ fontSize: 20 }}>Säkerhetsrutiner</h2>
              </div>
              {rutiner.map((item) => (
                <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 15, color: "var(--color-body)", marginBottom: 10, lineHeight: 1.6 }}>
                  <Check size={16} style={{ color: "var(--color-primary)", flexShrink: 0, marginTop: 4 }} /> {item}
                </div>
              ))}
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
              style={{ padding: 28, background: "white", borderRadius: 12, border: "1px solid var(--color-border)", borderTop: "3px solid var(--color-accent)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
                <Lock size={22} style={{ color: "var(--color-accent)" }} />
                <h2 style={{ fontSize: 20 }}>Sekretess & diskretion</h2>
              </div>
              {sekretess.map((item) => (
                <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 15, color: "var(--color-body)", marginBottom: 10, lineHeight: 1.6 }}>
                  <Check size={16} style={{ color: "var(--color-accent)", flexShrink: 0, marginTop: 4 }} /> {item}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
