"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone, ChevronRight, Check, MessageSquare, Eye, Play, Sparkles } from "lucide-react";

const ingarEntreTrapp = [
  "Golvsopning och fuktmoppning",
  "Hissgolv vårdas",
  "Dörrglas och speglar putsas",
  "Entrémattor underhålls",
  "Skrapgaller rengörs",
  "Passage till tvättstuga städas",
];

const ingarTvattstuga = [
  "Tvättmaskin och torktumlare avtorkas",
  "Luddfiltret töms",
  "Golvsopning och fuktmoppning",
];

const ingarArligt = [
  "Lägenhetsdörrar med karmar rengörs",
  "Armaturer rengörs",
  "Fönsterputs i trapphus och entré",
  "Hisschaktgaller dammsugning",
  "Lister och beslag rengörs",
  "Väggfläckar avlägsnas",
  "Djuprengöring av tvättstuga",
  "Cykel-/barnvagnsrum och källarpassage städas",
];

const steg = [
  { icon: MessageSquare, title: "Kontakta oss", desc: "Fyll i formuläret eller ring 08-37 71 76." },
  { icon: Eye, title: "Platsbesök", desc: "Vi kommer ut för en kostnadsfri bedömning och offert." },
  { icon: Play, title: "Vi startar", desc: "Städningen påbörjas enligt era önskemål." },
];

export default function TrappstadningContent() {
  return (
    <>
      <div style={{ background: "var(--color-bg-alt)", borderBottom: "1px solid var(--color-border-light)" }}>
        <nav aria-label="Brödsmulor" className="container" style={{ padding: "12px 20px", fontSize: 13, color: "var(--color-muted)", display: "flex", alignItems: "center", gap: 4 }}>
          <a href="/" style={{ color: "var(--color-muted)", textDecoration: "none" }}>Hem</a><ChevronRight size={12} />
          <a href="/foretag" style={{ color: "var(--color-muted)", textDecoration: "none" }}>Företag</a><ChevronRight size={12} />
          <span style={{ color: "var(--color-heading)", fontWeight: 500 }}>Trappstädning</span>
        </nav>
      </div>

      <section className="section">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }} className="services-layout">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-primary)", marginBottom: 12, display: "block" }}>Företag</span>
              <h1 style={{ fontSize: "clamp(32px, 5vw, 48px)", marginBottom: 20, lineHeight: 1.1 }}>Trappstädning för BRF och fastighetsägare</h1>
              <p style={{ fontSize: 17, color: "var(--color-body)", lineHeight: 1.7, marginBottom: 16 }}>
                En välstädad trappuppgång borgar för hög säkerhet och minskar risken för halkolyckor. Vi erbjuder tydliga städscheman, expertis och skräddarsydda serviceavtal.
              </p>
              <p style={{ fontSize: 15, color: "var(--color-muted)", lineHeight: 1.6, marginBottom: 32 }}>
                Nya kunder sparar normalt minst 10% jämfört med sin tidigare leverantör.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a href="/boka" className="btn-primary">Boka kostnadsfritt platsbesök</a>
                <a href="tel:08-377176" className="btn-secondary"><Phone size={16} /> 08-37 71 76</a>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
              <img src="/images/foretag-trapp.jpeg" alt="Trappstädning Stockholm" style={{ width: "100%", borderRadius: 12, aspectRatio: "2/3", objectFit: "cover" }} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vad ingår */}
      <section className="section-alt">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 style={{ fontSize: "clamp(26px, 4vw, 38px)" }}>Vad ingår i trappstädningen?</h2>
          </motion.div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 28 }} className="why-grid">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
              style={{ padding: 28, background: "white", borderRadius: 12, border: "1px solid var(--color-border)", borderTop: "3px solid var(--color-primary)" }}>
              <h3 style={{ fontSize: 18, marginBottom: 14 }}>Entré & trapphus</h3>
              {ingarEntreTrapp.map((item) => (
                <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: 14, color: "var(--color-body)", marginBottom: 6, lineHeight: 1.5 }}>
                  <Check size={15} style={{ color: "var(--color-primary)", flexShrink: 0, marginTop: 3 }} /> {item}
                </div>
              ))}
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.08 }}
              style={{ padding: 28, background: "white", borderRadius: 12, border: "1px solid var(--color-border)", borderTop: "3px solid var(--color-primary)" }}>
              <h3 style={{ fontSize: 18, marginBottom: 14 }}>Tvättstuga</h3>
              {ingarTvattstuga.map((item) => (
                <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: 14, color: "var(--color-body)", marginBottom: 6, lineHeight: 1.5 }}>
                  <Check size={15} style={{ color: "var(--color-primary)", flexShrink: 0, marginTop: 3 }} /> {item}
                </div>
              ))}
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.16 }}
              style={{ padding: 28, background: "white", borderRadius: 12, border: "1px solid var(--color-border)", borderTop: "3px solid var(--color-accent)" }}>
              <h3 style={{ fontSize: 18, marginBottom: 14 }}>Årsinsatser</h3>
              {ingarArligt.map((item) => (
                <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: 14, color: "var(--color-body)", marginBottom: 6, lineHeight: 1.5 }}>
                  <Check size={15} style={{ color: "var(--color-accent)", flexShrink: 0, marginTop: 3 }} /> {item}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section">
        <div className="container" style={{ maxWidth: 700 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ textAlign: "center", marginBottom: 48 }}>
            <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-primary)", marginBottom: 12, display: "block" }}>Så fungerar det</span>
            <h2 style={{ fontSize: "clamp(26px, 4vw, 38px)" }}>Kom igång i 3 steg</h2>
          </motion.div>
          {steg.map((s, i) => (
            <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }}
              style={{ display: "flex", gap: 20, padding: "24px 0", borderBottom: i < steg.length - 1 ? "1px solid var(--color-border-light)" : "none" }}>
              <div style={{ width: 52, height: 52, borderRadius: 12, background: "var(--color-primary-light)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <s.icon size={24} style={{ color: "var(--color-primary)" }} />
              </div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 700, color: "var(--color-accent)", marginBottom: 4 }}>Steg {i + 1}</div>
                <h3 style={{ fontSize: 18, marginBottom: 4 }}>{s.title}</h3>
                <p style={{ fontSize: 15, color: "var(--color-muted)", lineHeight: 1.5 }}>{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Extra tjänster */}
      <section className="section-alt">
        <div className="container" style={{ maxWidth: 700 }}>
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            style={{ padding: 24, background: "var(--color-accent-light)", border: "1px solid rgba(222,160,30,0.2)", borderRadius: 12, display: "flex", alignItems: "flex-start", gap: 14 }}>
            <Sparkles size={20} style={{ color: "var(--color-accent)", flexShrink: 0, marginTop: 2 }} />
            <div>
              <div style={{ fontSize: 16, fontWeight: 700, color: "var(--color-heading)", marginBottom: 6 }}>Ytterligare tjänster</div>
              <p style={{ fontSize: 15, color: "var(--color-muted)", lineHeight: 1.6 }}>
                Vi erbjuder även fönsterputs, golvvård, mattvätt och storstädning som komplement till trappstädningen. Kontakta oss för ett paketpris.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section style={{ background: "var(--color-primary)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.05, backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 30px, rgba(255,255,255,0.5) 30px, rgba(255,255,255,0.5) 31px)" }} />
        <div className="container" style={{ padding: "80px 20px", textAlign: "center", position: "relative", zIndex: 1 }}>
          <h2 style={{ fontSize: "clamp(26px, 4vw, 40px)", color: "white", marginBottom: 14 }}>Boka trappstädning i Stockholm</h2>
          <p style={{ fontSize: 17, color: "rgba(255,255,255,0.8)", maxWidth: 520, margin: "0 auto 32px" }}>Kostnadsfritt platsbesök. Spara minst 10% jämfört med er nuvarande leverantör.</p>
          <div style={{ display: "flex", justifyContent: "center", gap: 14, flexWrap: "wrap" }}>
            <a className="btn-accent" href="/boka">Boka platsbesök <ArrowRight size={17} /></a>
            <a className="btn-secondary" href="tel:08-377176" style={{ color: "white", borderColor: "rgba(255,255,255,0.25)" }}><Phone size={16} /> Ring 08-37 71 76</a>
          </div>
        </div>
      </section>
    </>
  );
}
