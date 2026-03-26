"use client";

import { motion } from "framer-motion";
import { ChevronRight, ArrowRight, Users, Shield, Leaf } from "lucide-react";

const sections = [
  {
    icon: Users,
    title: "Personal",
    desc: "Våra medarbetare bär ett stort ansvar för kvaliteten och säkerheten på de tjänster som vi tillhandahåller. Personalen är vår absolut viktigaste resurs.",
    href: "/personal",
  },
  {
    icon: Shield,
    title: "Säkerhet",
    desc: "Genom regelbundna riskbedömningar för vår personal minimerar vi den risk de utsätts för i form av skador eller hotfulla situationer.",
    href: "/sakerhet",
  },
  {
    icon: Leaf,
    title: "Miljöpolicy",
    desc: "Vi gör vårt bästa för att skapa förutsättningar till miljöförbättring. Vår policy utgör grunden för vårt ekologiska tänkande.",
    href: "/miljopolicy",
  },
];

export default function OmOssContent() {
  return (
    <>
      <div style={{ background: "var(--color-bg-alt)", borderBottom: "1px solid var(--color-border-light)" }}>
        <nav aria-label="Brödsmulor" className="container" style={{ padding: "12px 20px", fontSize: 13, color: "var(--color-muted)", display: "flex", alignItems: "center", gap: 4 }}>
          <a href="/" style={{ color: "var(--color-muted)", textDecoration: "none" }}>Hem</a><ChevronRight size={12} />
          <span style={{ color: "var(--color-heading)", fontWeight: 500 }}>Om oss</span>
        </nav>
      </div>

      {/* Hero */}
      <section style={{ background: "var(--color-primary)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.05, backgroundImage: "repeating-linear-gradient(-45deg, transparent, transparent 20px, rgba(255,255,255,0.4) 20px, rgba(255,255,255,0.4) 21px)" }} />
        <div className="container" style={{ padding: "clamp(48px, 8vw, 80px) 20px", textAlign: "center", position: "relative", zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 style={{ fontSize: "clamp(32px, 5vw, 52px)", color: "white", marginBottom: 16 }}>Om Timeout Service</h1>
            <p style={{ fontSize: 18, color: "rgba(255,255,255,0.8)", maxWidth: 600, margin: "0 auto", lineHeight: 1.6 }}>
              Vi arbetar alltid målmedvetet för att påverka miljön så lite som möjligt när vi utför våra uppdrag. Det kan gälla allt ifrån valet av produkter och hur de används på bästa sätt, till hur vi genomför städningens alla moment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About */}
      <section className="section">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }} className="services-layout">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 style={{ fontSize: "clamp(26px, 3.5vw, 36px)", marginBottom: 20, lineHeight: 1.25 }}>
                Vi utför våra tjänster i rätt tid, på rätt sätt och enligt överenskomna villkor
              </h2>
              <p style={{ fontSize: 16, color: "var(--color-body)", lineHeight: 1.7, marginBottom: 16 }}>
                Timeout Service AB är ett familjeägt företag. Vi har kompetensen samt de rätta resurserna och metoderna för att utföra alla typer av fönsterputs- samt professionella städtjänster för både privatpersoner samt små och stora företag.
              </p>
              <p style={{ fontSize: 16, color: "var(--color-body)", lineHeight: 1.7, marginBottom: 16 }}>
                Vi har 35 års erfarenhet i bagaget, vilket tillåter oss att erbjuda er resultat med högsta kvalitet. Inget uppdrag är för stort eller för litet för oss.
              </p>
              <p style={{ fontSize: 16, color: "var(--color-body)", lineHeight: 1.7 }}>
                Vi ger våra kunder den bästa tänkbara service och utför uppdragen enligt era önskemål.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                <img src="/images/staff-kitchen.jpg" alt="Timeout Service personal" style={{ width: "100%", borderRadius: 12, aspectRatio: "3/4", objectFit: "cover", gridRow: "1/3" }} />
                <img src="/images/staff-bedroom.jpg" alt="Timeout Service hemstädning" style={{ width: "100%", borderRadius: 12, aspectRatio: "1/1", objectFit: "cover" }} />
                <img src="/images/kontor-hero.jpg" alt="Timeout Service kontor" style={{ width: "100%", borderRadius: 12, aspectRatio: "1/1", objectFit: "cover" }} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3 sections */}
      <section className="section-alt">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 28 }} className="why-grid">
            {sections.map((s, i) => (
              <motion.a key={s.title} href={s.href} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
                style={{ padding: 32, background: "white", border: "1px solid var(--color-border)", borderRadius: 12, textDecoration: "none", borderTop: "3px solid var(--color-primary)", transition: "all 0.3s" }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,114,185,0.08)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}>
                <div style={{ width: 52, height: 52, borderRadius: 12, background: "var(--color-primary-light)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 20 }}>
                  <s.icon size={24} style={{ color: "var(--color-primary)" }} />
                </div>
                <h3 style={{ fontSize: 22, marginBottom: 10, color: "var(--color-heading)" }}>{s.title}</h3>
                <p style={{ fontSize: 15, color: "var(--color-muted)", lineHeight: 1.6, marginBottom: 16 }}>{s.desc}</p>
                <span style={{ fontSize: 14, fontWeight: 600, color: "var(--color-primary)", display: "inline-flex", alignItems: "center", gap: 6 }}>Läs mer <ArrowRight size={14} /></span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
