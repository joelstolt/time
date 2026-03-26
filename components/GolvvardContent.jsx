"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Phone, ChevronRight, Check, Sparkles, Plus, Minus } from "lucide-react";

const golvtyper = ["Trägolv", "Linoleum", "Marmor", "Plastgolv", "Natursten", "Betong"];

const processLatt = [
  "Torrmoppning av löst smuts",
  "Rengöringslösning appliceras i kallt vatten",
  "Applicering med mopp eller kombimaskin",
  "Lösningen får verka",
  "Skurning med enkel- eller kombimaskin",
  "Uppsugning med våtsug",
  "Fuktmoppning med rent vatten",
  "2–3 lager topppolish (30–60 min torktid mellan lager)",
];

const processAvdrag = [
  "Torrmoppning av löst smuts",
  "Testdosering på dold yta",
  "Blandning av borttagningslösning",
  "Lösningen moppas ut och får verka 5–10 min",
  "Skurning med enkelmaskin",
  "Uppsugning med våtsug",
  "Sköljning med rent vatten, pH-kontroll",
  "4–6 lager bas-/topppolish (30 min torktid mellan lager)",
];

const faqs = [
  { q: "Blir golven hala efter golvvård?", a: "Nej, golven blir inte hala. Optimalt halkskydd i toppskiktet minimerar halkolyckor." },
  { q: "När utförs golvvården?", a: "Ofta kvällar, nätter eller helger när kontor är stängt på grund av långa torktider. Stora ytor kan göras etappvis eller under semesterperioder." },
  { q: "Hur ofta bör golven behandlas?", a: "Beror på golvtyp och slitagegrad. Vi gör en behovsanalys och genomför inspektion innan start." },
  { q: "Hur betalar vi?", a: "Faktura via e-post med 20 dagars betalningsvillkor." },
  { q: "Vad är avbokningspolicyn?", a: "Kostnadsfri avbokning 72+ timmar före (exkl. helg). Senare avbokning debiteras fullt." },
  { q: "Ingår material?", a: "Ja, all utrustning och alla material ingår." },
  { q: "Vad händer om något går sönder?", a: "Vi är ansvarsförsäkrade upp till 10 miljoner kronor. Vid oaktsamhet från vår sida står vi för kostnaden." },
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

export default function GolvvardContent() {
  const [openFaq, setOpenFaq] = useState(0);
  return (
    <>
      <div style={{ background: "var(--color-bg-alt)", borderBottom: "1px solid var(--color-border-light)" }}>
        <nav aria-label="Brödsmulor" className="container" style={{ padding: "12px 20px", fontSize: 13, color: "var(--color-muted)", display: "flex", alignItems: "center", gap: 4 }}>
          <a href="/" style={{ color: "var(--color-muted)", textDecoration: "none" }}>Hem</a><ChevronRight size={12} />
          <a href="/foretag" style={{ color: "var(--color-muted)", textDecoration: "none" }}>Företag</a><ChevronRight size={12} />
          <span style={{ color: "var(--color-heading)", fontWeight: 500 }}>Golvvård</span>
        </nav>
      </div>

      <section className="section">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }} className="services-layout">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-primary)", marginBottom: 12, display: "block" }}>Företag</span>
              <h1 style={{ fontSize: "clamp(32px, 5vw, 48px)", marginBottom: 20, lineHeight: 1.1 }}>Golvvård i Stockholm</h1>
              <p style={{ fontSize: 17, color: "var(--color-body)", lineHeight: 1.7, marginBottom: 16 }}>
                Vi gör era golv skinande rena! Med 35 års erfarenhet har vi utvecklat egna metoder som sänker kostnaderna, förbättrar kvaliteten och förlänger golvets livslängd.
              </p>
              <p style={{ fontSize: 15, color: "var(--color-muted)", lineHeight: 1.6, marginBottom: 24 }}>
                Vi hanterar alla golvtyper med senaste tekniken och enbart miljömärkta produkter. Kostnadsfri konsultation där vår arbetsledare bedömer era golvs behov.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 32 }}>
                {golvtyper.map((g) => (<span key={g} style={{ padding: "6px 14px", background: "var(--color-primary-light)", borderRadius: 6, fontSize: 13, fontWeight: 600, color: "var(--color-primary)" }}>{g}</span>))}
              </div>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a href="/boka" className="btn-primary">Boka kostnadsfri konsultation</a>
                <a href="tel:08-377176" className="btn-secondary"><Phone size={16} /> 08-37 71 76</a>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
              <img src="/images/golvvard-1.png" alt="Golvvård Stockholm — Timeout Service" style={{ width: "100%", borderRadius: 12, maxWidth: 360, margin: "0 auto", display: "block" }} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-alt">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40 }} className="services-layout">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <h2 style={{ fontSize: "clamp(22px, 3vw, 28px)", marginBottom: 6 }}>Lätt skurning & restaurering</h2>
              <p style={{ fontSize: 14, color: "var(--color-muted)", marginBottom: 20 }}>För golv med lätt slitage</p>
              {processLatt.map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: 14, color: "var(--color-body)", marginBottom: 6, lineHeight: 1.5 }}>
                  <Check size={15} style={{ color: "var(--color-primary)", flexShrink: 0, marginTop: 3 }} /> {item}
                </div>
              ))}
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
              <h2 style={{ fontSize: "clamp(22px, 3vw, 28px)", marginBottom: 6 }}>Polishborttagning & nollställning</h2>
              <p style={{ fontSize: 14, color: "var(--color-muted)", marginBottom: 20 }}>Totalrenovering av golvet</p>
              {processAvdrag.map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: 14, color: "var(--color-body)", marginBottom: 6, lineHeight: 1.5 }}>
                  <Check size={15} style={{ color: "var(--color-primary)", flexShrink: 0, marginTop: 3 }} /> {item}
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

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
          <h2 style={{ fontSize: "clamp(26px, 4vw, 40px)", color: "white", marginBottom: 14 }}>Boka golvvård i Stockholm</h2>
          <p style={{ fontSize: 17, color: "rgba(255,255,255,0.8)", maxWidth: 480, margin: "0 auto 32px" }}>Kostnadsfri konsultation. Alla golvtyper.</p>
          <div style={{ display: "flex", justifyContent: "center", gap: 14, flexWrap: "wrap" }}>
            <a className="btn-accent" href="/boka">Boka konsultation <ArrowRight size={17} /></a>
            <a className="btn-secondary" href="tel:08-377176" style={{ color: "white", borderColor: "rgba(255,255,255,0.25)" }}><Phone size={16} /> Ring 08-37 71 76</a>
          </div>
        </div>
      </section>
    </>
  );
}
