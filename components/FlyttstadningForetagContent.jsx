"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Phone, ChevronRight, Check, Shield, Leaf, Users, Award, Plus, Minus } from "lucide-react";

const fordelar = [
  "Erfaren och professionell personal",
  "Nöjd-kund-garanti",
  "Resa ingår i priset",
  "Ansvarsförsäkrad med F-skattsedel",
  "Personal i företagsuniform",
  "Arbetar enligt checklista",
  "Miljömärkta produkter",
  "Inga dolda avgifter — fast pris",
  "Ingen underleverantör — egen personal",
];

const faqs = [
  { q: "Har ni garanti på flyttstädningen?", a: "Ja, alla flyttstädningar inkluderar garanti. Kunden eller fastighetsägaren bör vara på plats vid slutbesiktning." },
  { q: "Vad ska vi förbereda?", a: "Lokalerna ska vara tomma. Frysar ska vara avfrostade. Vi behöver tillgång till el och vatten under städningen." },
  { q: "Vad är avbokningspolicyn?", a: "Kostnadsfri avbokning upp till 72 timmar före (exkl. helg). Senare avbokning medför full debitering." },
  { q: "Hur fungerar besiktningen?", a: "Efter städningen görs besiktning med kund eller fastighetsägare på plats. Checklistebaserad bedömning — eventuella brister åtgärdas direkt." },
  { q: "Kan vi flytta och städa samma dag?", a: "Normalt nej, men undantag finns. Prioritet är tomma lokaler. Kontakta oss för att diskutera lösningar." },
  { q: "Vad händer om något går sönder?", a: "Vi är ansvarsförsäkrade. Vid oaktsamhet från vår sida står vi för kostnaden." },
];

function FAQItem({ faq, isOpen, onClick }) {
  return (
    <div style={{ borderBottom: "1px solid var(--color-border)" }}>
      <button onClick={onClick} style={{ width: "100%", padding: "20px 0", background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, textAlign: "left" }}>
        <span style={{ fontSize: 16, fontWeight: 600, color: "var(--color-heading)", fontFamily: "var(--font-body)" }}>{faq.q}</span>
        <span style={{ width: 30, height: 30, borderRadius: "50%", background: isOpen ? "var(--color-primary)" : "var(--color-primary-light)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
          {isOpen ? <Minus size={15} color="white" /> : <Plus size={15} color="var(--color-primary)" />}
        </span>
      </button>
      <AnimatePresence>{isOpen && (<motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }} style={{ overflow: "hidden" }}><p style={{ fontSize: 15, color: "var(--color-muted)", lineHeight: 1.7, paddingBottom: 20, maxWidth: 700 }}>{faq.a}</p></motion.div>)}</AnimatePresence>
    </div>
  );
}

export default function FlyttstadningForetagContent() {
  const [openFaq, setOpenFaq] = useState(0);
  return (
    <>
      <div style={{ background: "var(--color-bg-alt)", borderBottom: "1px solid var(--color-border-light)" }}>
        <nav aria-label="Brödsmulor" className="container" style={{ padding: "12px 20px", fontSize: 13, color: "var(--color-muted)", display: "flex", alignItems: "center", gap: 4 }}>
          <a href="/" style={{ color: "var(--color-muted)", textDecoration: "none" }}>Hem</a><ChevronRight size={12} />
          <a href="/foretag" style={{ color: "var(--color-muted)", textDecoration: "none" }}>Företag</a><ChevronRight size={12} />
          <span style={{ color: "var(--color-heading)", fontWeight: 500 }}>Flyttstädning företag</span>
        </nav>
      </div>

      <section className="section">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }} className="services-layout">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-primary)", marginBottom: 12, display: "block" }}>Företag</span>
              <h1 style={{ fontSize: "clamp(32px, 5vw, 48px)", marginBottom: 20, lineHeight: 1.1 }}>Flyttstädning för företag i Stockholm</h1>
              <p style={{ fontSize: 17, color: "var(--color-body)", lineHeight: 1.7, marginBottom: 16 }}>
                Dags att flytta till nya lokaler? Vi hjälper er. Att flytta kontor är ett stort projekt — och det är viktigt att lämna de gamla lokalerna i perfekt skick. Vi erbjuder flyttstädning baserad på lång erfarenhet av både små och stora företag.
              </p>
              <p style={{ fontSize: 15, color: "var(--color-muted)", lineHeight: 1.6, marginBottom: 32 }}>
                Fast pris bestäms vid kostnadsfritt platsbesök. Priset beror på tid (vardag/kväll/helg).
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a href="/boka" className="btn-primary">Boka kostnadsfritt platsbesök</a>
                <a href="tel:08-377176" className="btn-secondary"><Phone size={16} /> 08-37 71 76</a>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
              <img src="/images/flytt-foretag.jpg" alt="Flyttstädning företag Stockholm — Timeout Service" style={{ width: "100%", borderRadius: 12, aspectRatio: "2/3", objectFit: "cover" }} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Fördelar */}
      <section className="section-alt">
        <div className="container" style={{ maxWidth: 750 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ textAlign: "center", marginBottom: 40 }}>
            <h2 style={{ fontSize: "clamp(26px, 4vw, 38px)" }}>Varför välja oss?</h2>
          </motion.div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }} className="services-layout">
            {fordelar.map((item) => (
              <div key={item} style={{ display: "flex", alignItems: "center", gap: 10, padding: "14px 18px", background: "white", borderRadius: 8, fontSize: 15, color: "var(--color-body)" }}>
                <Check size={18} style={{ color: "var(--color-primary)", flexShrink: 0 }} /> {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container" style={{ maxWidth: 750 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ textAlign: "center", marginBottom: 48 }}>
            <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-primary)", marginBottom: 12, display: "block" }}>Vanliga frågor</span>
            <h2 style={{ fontSize: "clamp(26px, 4vw, 38px)" }}>Frågor och svar</h2>
          </motion.div>
          <div style={{ borderTop: "1px solid var(--color-border)" }}>
            {faqs.map((faq, i) => <FAQItem key={i} faq={faq} isOpen={openFaq === i} onClick={() => setOpenFaq(openFaq === i ? -1 : i)} />)}
          </div>
        </div>
      </section>

      <section style={{ background: "var(--color-primary)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.05, backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 30px, rgba(255,255,255,0.5) 30px, rgba(255,255,255,0.5) 31px)" }} />
        <div className="container" style={{ padding: "80px 20px", textAlign: "center", position: "relative", zIndex: 1 }}>
          <h2 style={{ fontSize: "clamp(26px, 4vw, 40px)", color: "white", marginBottom: 14 }}>Boka flyttstädning för ert företag</h2>
          <p style={{ fontSize: 17, color: "rgba(255,255,255,0.8)", maxWidth: 480, margin: "0 auto 32px" }}>Garanti, fast pris, kostnadsfritt platsbesök.</p>
          <div style={{ display: "flex", justifyContent: "center", gap: 14, flexWrap: "wrap" }}>
            <a className="btn-accent" href="/boka">Boka platsbesök <ArrowRight size={17} /></a>
            <a className="btn-secondary" href="tel:08-377176" style={{ color: "white", borderColor: "rgba(255,255,255,0.25)" }}><Phone size={16} /> Ring 08-37 71 76</a>
          </div>
        </div>
      </section>
    </>
  );
}
