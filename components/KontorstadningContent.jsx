"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Phone, ChevronRight, Check, SmilePlus, Headset, Clock, UserCheck, Plus, Minus } from "lucide-react";

const paket = [
  { namn: "Small", frekvens: "1x/månad, min 3 tim", pris: "340–400 kr/tim" },
  { namn: "Medium", frekvens: "2x/månad, min 3 tim", pris: "310–350 kr/tim" },
  { namn: "Large", frekvens: "4x+/månad, min 2 tim", pris: "300–320 kr/tim" },
];

const ingarKontor = [
  "Damning av ytor och dammsugning av mattor/golv",
  "Våttorkning av golv",
  "Avtorkning av strömbrytare och handtag",
  "Tömning av papperskorgar",
];
const ingarPentry = [
  "Damning av ytor, rengöring av diskbänk och bord",
  "Avtorkning av vitvaror",
  "Golvvård och sophantering",
];
const ingarToalett = [
  "Rengöring av sanitetsporslin",
  "Påfyllning av förbrukningsmaterial",
  "Spegelputsning och golvtvätt",
];

const usps = [
  { icon: SmilePlus, label: "Nöjd-kund-garanti" },
  { icon: Clock, label: "Ingen bindningstid" },
  { icon: UserCheck, label: "Samma städare" },
  { icon: Headset, label: "Snabb kundservice" },
];

const faqs = [
  { q: "Hur anpassar ni städningen efter oss?", a: "Vi bokar ett möte där vi går igenom era lokaler och behov. Sedan tar vi fram ett skräddarsytt upplägg med fast pris." },
  { q: "Vilka tider städar ni?", a: "Vi anpassar oss helt efter er — dag (07–17), kväll (18–06) eller helg. Ni bestämmer." },
  { q: "Kan ni städa medan kontoret är bemannat?", a: "Ja, men viss ljudnivå från utrustning kan förekomma." },
  { q: "Är det alltid samma städare?", a: "Ja, vi tilldelar en fast städare. Vid sjukdom eller semester skickar vi en vikarie efter ert godkännande." },
  { q: "Är personalen tillförlitlig?", a: "All personal har erfarenhet, bär uniform, är bakgrundskontrollerad och har undertecknat tystnadsplikt." },
  { q: "Vad är avbokningspolicyn?", a: "Avbokning 48+ timmar före: kostnadsfritt. Senare avbokning kan medföra delvis eller full debitering." },
  { q: "Har ni bindningstid?", a: "Nej, ingen bindningstid. 2 månaders uppsägningstid gäller." },
  { q: "Tillhandahåller ni städmaterial?", a: "Ja, vi har med all utrustning och alla rengöringsmedel. Ni kan även köpa förbrukningsmaterial av oss." },
  { q: "Hur betalar vi?", a: "Faktura via e-post med 20 dagars betalningsvillkor." },
  { q: "Vad händer om något går sönder?", a: "Vi är ansvarsförsäkrade via Svedea upp till 10 miljoner kronor. Vid oaktsamhet från vår sida står vi för kostnaden." },
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

function CheckBlock({ title, items }) {
  return (
    <div>
      <h3 style={{ fontSize: 17, marginBottom: 12, color: "var(--color-primary)" }}>{title}</h3>
      {items.map((item) => (
        <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: 15, color: "var(--color-body)", marginBottom: 6, lineHeight: 1.5 }}>
          <Check size={16} style={{ color: "var(--color-primary)", flexShrink: 0, marginTop: 3 }} /> {item}
        </div>
      ))}
    </div>
  );
}

export default function KontorstadningContent() {
  const [openFaq, setOpenFaq] = useState(0);
  return (
    <>
      <div style={{ background: "var(--color-bg-alt)", borderBottom: "1px solid var(--color-border-light)" }}>
        <nav aria-label="Brödsmulor" className="container" style={{ padding: "12px 20px", fontSize: 13, color: "var(--color-muted)", display: "flex", alignItems: "center", gap: 4 }}>
          <a href="/" style={{ color: "var(--color-muted)", textDecoration: "none" }}>Hem</a><ChevronRight size={12} />
          <a href="/foretag" style={{ color: "var(--color-muted)", textDecoration: "none" }}>Företag</a><ChevronRight size={12} />
          <span style={{ color: "var(--color-heading)", fontWeight: 500 }}>Kontorstädning</span>
        </nav>
      </div>

      <section className="section">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }} className="services-layout">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-primary)", marginBottom: 12, display: "block" }}>Företag</span>
              <h1 style={{ fontSize: "clamp(32px, 5vw, 48px)", marginBottom: 20, lineHeight: 1.1 }}>Kontorstädning i Stockholm</h1>
              <p style={{ fontSize: 17, color: "var(--color-body)", lineHeight: 1.7, marginBottom: 16 }}>
                Smart, effektiv kontorstädning anpassad efter era behov. Vi städar kontor 7 dagar i veckan — dag, kväll eller helg, året runt.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginBottom: 32 }}>
                {usps.map((u) => (<div key={u.label} style={{ display: "flex", alignItems: "center", gap: 6, padding: "8px 14px", background: "var(--color-primary-light)", borderRadius: 8, fontSize: 13, fontWeight: 600, color: "var(--color-primary)" }}><u.icon size={16} /> {u.label}</div>))}
              </div>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a href="/boka" className="btn-primary">Boka kostnadsfritt möte</a>
                <a href="tel:08-377176" className="btn-secondary"><Phone size={16} /> 08-37 71 76</a>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
              <img src="/images/kontor-hero.jpg" alt="Kontorstädning Stockholm — Timeout Service hos Notar" style={{ width: "100%", borderRadius: 12, aspectRatio: "4/3", objectFit: "cover" }} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Priser */}
      <section className="section-alt">
        <div className="container" style={{ maxWidth: 750 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ textAlign: "center", marginBottom: 40 }}>
            <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-primary)", marginBottom: 12, display: "block" }}>Priser</span>
            <h2 style={{ fontSize: "clamp(26px, 4vw, 38px)", marginBottom: 14 }}>Våra paket</h2>
            <p style={{ fontSize: 15, color: "var(--color-muted)" }}>Alla priser exkl. moms. Priset varierar beroende på tid (dag/kväll/helg).</p>
          </motion.div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }} className="why-grid">
            {paket.map((p, i) => (
              <motion.div key={p.namn} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }}
                style={{ padding: 28, background: "white", borderRadius: 12, border: i === 2 ? "2px solid var(--color-primary)" : "1px solid var(--color-border)", textAlign: "center" }}>
                {i === 2 && <div style={{ fontSize: 11, fontWeight: 700, color: "var(--color-accent)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 8 }}>Populärast</div>}
                <h3 style={{ fontSize: 22, marginBottom: 8 }}>{p.namn}</h3>
                <p style={{ fontSize: 13, color: "var(--color-muted)", marginBottom: 16 }}>{p.frekvens}</p>
                <div style={{ fontSize: 24, fontWeight: 800, color: "var(--color-primary)", fontFamily: "var(--font-body)" }}>{p.pris}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vad ingår */}
      <section className="section">
        <div className="container" style={{ maxWidth: 800 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ textAlign: "center", marginBottom: 40 }}>
            <h2 style={{ fontSize: "clamp(26px, 4vw, 38px)" }}>Vad ingår i kontorstädningen?</h2>
          </motion.div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 32 }} className="why-grid">
            <CheckBlock title="Kontor & gemensamma ytor" items={ingarKontor} />
            <CheckBlock title="Pentry & kök" items={ingarPentry} />
            <CheckBlock title="Toaletter" items={ingarToalett} />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-alt">
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
          <h2 style={{ fontSize: "clamp(26px, 4vw, 40px)", color: "white", marginBottom: 14 }}>Boka kontorstädning i Stockholm</h2>
          <p style={{ fontSize: 17, color: "rgba(255,255,255,0.8)", maxWidth: 480, margin: "0 auto 32px" }}>Kostnadsfritt möte. Ingen bindningstid. Fast pris.</p>
          <div style={{ display: "flex", justifyContent: "center", gap: 14, flexWrap: "wrap" }}>
            <a className="btn-accent" href="/boka">Boka möte <ArrowRight size={17} /></a>
            <a className="btn-secondary" href="tel:08-377176" style={{ color: "white", borderColor: "rgba(255,255,255,0.25)" }}><Phone size={16} /> Ring 08-37 71 76</a>
          </div>
        </div>
      </section>
    </>
  );
}
