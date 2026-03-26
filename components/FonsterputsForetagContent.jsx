"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Phone, ChevronRight, Check, Thermometer, Shield, Users, Award, ClipboardList, Eye, Wrench, MessageSquare, Plus, Minus } from "lucide-react";

const kunder = ["NOTAR", "Clas Ohlson", "Lager 157", "SKB", "Pressbyrån", "BRF Isdrottningen"];

const steg = [
  { icon: MessageSquare, title: "Kontakta oss", desc: "Fyll i formuläret eller ring oss för en förfrågan." },
  { icon: Eye, title: "Kostnadsfritt platsbesök", desc: "Vi kommer ut och bedömer antal fönster, sidor och storlekar. Du får en skräddarsydd offert." },
  { icon: Wrench, title: "Arbetet påbörjas", desc: "Efter godkänd offert påbörjar vi fönsterputsen." },
  { icon: ClipboardList, title: "Uppföljning", desc: "Vi gör kvalitetskontroll och utvärderar tillsammans. Eventuella brister åtgärdas." },
];

const faqs = [
  { q: "Vad kostar fönsterputs för företag?", a: "Vi erbjuder fasta, konkurrenskraftiga priser. Du väljer fönsterputs enbart eller inklusive karm- och brädetvätt. Exakt pris fastställs vid kostnadsfritt platsbesök." },
  { q: "Hur lång tid tar det?", a: "Tidsåtgången beror på antal fönster, storlek och tillgänglighet. Vi ger en uppskattning efter platsbesöket." },
  { q: "Vilken lägsta temperatur putsar ni i?", a: "Vi putsar fönster ända ner till -16°C." },
  { q: "Kan ni putsa medan kontoret är bemannat?", a: "Ja, om fönstren är åtkomliga och området runt fönstren är framkomligt." },
  { q: "Är personalen tillförlitlig?", a: "Vår personal kontrolleras mot polisens belastningsregister, undertecknar tystnadsplikt, bär uniform och har företagslegitimation." },
  { q: "Kostar det extra om fönstren är väldigt smutsiga?", a: "Nej, inte om ni meddelar oss i förväg. Vi anpassar priset efter förutsättningarna." },
  { q: "Vad är avbokningspolicyn?", a: "Avbokning 2+ dagar före: 50% debiteras. Samma dag: full debitering." },
  { q: "Behöver vi tillhandahålla utrustning?", a: "Nej, vi tar med all utrustning och alla rengöringsmedel." },
  { q: "Vad händer om något går sönder?", a: "Vi är ansvarsförsäkrade upp till 10 miljoner kronor. Vid oaktsamhet från vår sida står vi för kostnaden." },
  { q: "Hur betalar vi?", a: "Faktura via e-post (kostnadsfritt). Betalningsvillkor 20 dagar." },
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

export default function FonsterputsForetagContent() {
  const [openFaq, setOpenFaq] = useState(0);
  return (
    <>
      <div style={{ background: "var(--color-bg-alt)", borderBottom: "1px solid var(--color-border-light)" }}>
        <nav aria-label="Brödsmulor" className="container" style={{ padding: "12px 20px", fontSize: 13, color: "var(--color-muted)", display: "flex", alignItems: "center", gap: 4 }}>
          <a href="/" style={{ color: "var(--color-muted)", textDecoration: "none" }}>Hem</a><ChevronRight size={12} />
          <a href="/foretag" style={{ color: "var(--color-muted)", textDecoration: "none" }}>Företag</a><ChevronRight size={12} />
          <span style={{ color: "var(--color-heading)", fontWeight: 500 }}>Fönsterputs företag</span>
        </nav>
      </div>

      {/* Hero */}
      <section className="section">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }} className="services-layout">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-primary)", marginBottom: 12, display: "block" }}>Företag</span>
              <h1 style={{ fontSize: "clamp(32px, 5vw, 48px)", marginBottom: 20, lineHeight: 1.1 }}>Fönsterputs för kontor och fastigheter i Stockholm</h1>
              <p style={{ fontSize: 17, color: "var(--color-body)", lineHeight: 1.7, marginBottom: 16 }}>
                Miljövänlig fönsterputs utan ränder. Rena fönster släpper in mer naturligt ljus och skapar en attraktiv arbetsplats. Med 35 års erfarenhet hanterar vi allt från stora kontorskomplex till enskilda fastigheter.
              </p>
              <p style={{ fontSize: 15, color: "var(--color-muted)", lineHeight: 1.6, marginBottom: 32 }}>
                Vi putsar kontor, lokaler, butiker, trapphus och industrifastigheter. Vår personal har liftcertifikat och specialutbildning för arbete på höjd.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a href="/boka" className="btn-primary">Boka kostnadsfritt platsbesök</a>
                <a href="tel:08-377176" className="btn-secondary"><Phone size={16} /> 08-37 71 76</a>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
              <img src="/images/tjanst-fonster.jpg" alt="Fönsterputs företag Stockholm" style={{ width: "100%", borderRadius: 12, aspectRatio: "4/3", objectFit: "cover" }} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Kunder */}
      <section className="section-alt" style={{ paddingTop: 48, paddingBottom: 48 }}>
        <div className="container" style={{ textAlign: "center" }}>
          <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-muted)", marginBottom: 20 }}>Några av våra kunder</p>
          <div style={{ display: "flex", justifyContent: "center", gap: 32, flexWrap: "wrap" }}>
            {kunder.map((k) => (<span key={k} style={{ fontSize: 16, fontWeight: 700, color: "var(--color-heading)", opacity: 0.6 }}>{k}</span>))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section">
        <div className="container" style={{ maxWidth: 750 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ textAlign: "center", marginBottom: 48 }}>
            <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-primary)", marginBottom: 12, display: "block" }}>Så fungerar det</span>
            <h2 style={{ fontSize: "clamp(26px, 4vw, 38px)" }}>Från offert till skinande fönster</h2>
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

      {/* Features */}
      <section className="section-alt">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }} className="why-grid">
            {[
              { icon: Thermometer, title: "Ner till -16°C", desc: "Vi putsar året runt oavsett väder" },
              { icon: Shield, title: "Ansvarsförsäkrad", desc: "Upp till 10 miljoner kronor" },
              { icon: Users, title: "Liftcertifikat", desc: "Specialutbildad personal för arbete på höjd" },
              { icon: Award, title: "Nöjd-kund-garanti", desc: "Brister åtgärdas kostnadsfritt" },
            ].map((f, i) => (
              <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }}
                style={{ textAlign: "center", padding: 28, background: "white", borderRadius: 12, border: "1px solid var(--color-border)" }}>
                <div style={{ width: 48, height: 48, borderRadius: 10, background: "var(--color-primary-light)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 14px" }}>
                  <f.icon size={22} style={{ color: "var(--color-primary)" }} />
                </div>
                <h3 style={{ fontSize: 16, marginBottom: 4 }}>{f.title}</h3>
                <p style={{ fontSize: 13, color: "var(--color-muted)", lineHeight: 1.4 }}>{f.desc}</p>
              </motion.div>
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

      {/* CTA */}
      <section style={{ background: "var(--color-primary)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.05, backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 30px, rgba(255,255,255,0.5) 30px, rgba(255,255,255,0.5) 31px)" }} />
        <div className="container" style={{ padding: "80px 20px", textAlign: "center", position: "relative", zIndex: 1 }}>
          <h2 style={{ fontSize: "clamp(26px, 4vw, 40px)", color: "white", marginBottom: 14 }}>Boka fönsterputs för ert företag</h2>
          <p style={{ fontSize: 17, color: "rgba(255,255,255,0.8)", maxWidth: 480, margin: "0 auto 32px" }}>Kostnadsfritt platsbesök och skräddarsydd offert.</p>
          <div style={{ display: "flex", justifyContent: "center", gap: 14, flexWrap: "wrap" }}>
            <a className="btn-accent" href="/boka">Boka platsbesök <ArrowRight size={17} /></a>
            <a className="btn-secondary" href="tel:08-377176" style={{ color: "white", borderColor: "rgba(255,255,255,0.25)" }}><Phone size={16} /> Ring 08-37 71 76</a>
          </div>
        </div>
      </section>
    </>
  );
}
