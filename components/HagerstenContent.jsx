"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Phone, ChevronRight, MapPin, Shield, Users, BadgeCheck, Star, Plus, Minus, Home, Truck, Sparkles, Bath, Utensils, Building2, Eye, Brush } from "lucide-react";
import OffertForm from "./OffertForm";
import { omradenHagersten, faqsHagersten } from "./hagerstenData";

/* ──────────────────────── DATA (bara uppgifter som redan finns på sajten) ──────────────────────── */


const tjanster = [
  { icon: Home, namn: "Hemstädning", text: "Samma städare varje gång, inga bindningstider. Fast pris efter kostnadsfritt hembesök.", href: "/hemstadning" },
  { icon: Truck, namn: "Flyttstädning", text: "Städning enligt checklista med 10 dagars garanti. RUT-avdrag.", href: "/flyttstadning" },
  { icon: Sparkles, namn: "Fönsterputs", text: "Fast pris från 450 kr efter RUT för lägenhet, från 50 kr per fönster för villa. 3 dagars garanti.", href: "/fonsterputs" },
  { icon: Brush, namn: "Storstädning", text: "Grundlig genomgång av hela bostaden, uppifrån och ner. RUT-avdrag.", href: "/storstadning" },
  { icon: Bath, namn: "Badrumsstädning", text: "Från cirka 1 200 kr för badrum upp till 10 kvadratmeter.", href: "/badrumsstadning" },
  { icon: Utensils, namn: "Köksstädning", text: "Från 1 150 kr för kök upp till 10 kvadratmeter.", href: "/koksstadning" },
  { icon: Eye, namn: "Visningsstädning", text: "Städning inför visning så bostaden visar sig från sin bästa sida.", href: "/visningsstadning" },
  { icon: Building2, namn: "Kontorsstädning", text: "Från 300 kr per timme exkl. moms. Dag, kväll eller helg, ingen bindningstid.", href: "/kontorstadning" },
];

const fordelar = [
  { icon: MapPin, title: "Kontoret ligger i Hägersten", desc: "Terrängvägen 43, mitt i området. Vi känner kvarteren och är ofta redan i närheten." },
  { icon: BadgeCheck, title: "35 års erfarenhet", desc: "Familjeägt företag med egen personal, ingen underleverantör." },
  { icon: Shield, title: "Försäkrade och F-skatt", desc: "Ansvarsförsäkrade upp till 10 miljoner kronor. Vi sköter RUT-avdraget utan extra kostnad." },
  { icon: Users, title: "Nöjd-kund-garanti", desc: "Inte nöjd? Säg till, så rättar vi till det." },
];

const omdomen = [
  { text: "Riktigt duktiga, anlitar både privat och via företaget. Är alltid i tid och hjälper till om man behöver något! Alltid ett bra resultat.", name: "Aleksandra", role: "Coop Västertorp" },
  { text: "Jag har alltid fått ett fantastiskt personligt bemötande och ett perfekt städresultat, både vid hemstädning och vid städning av vår förskola. Jag rekommenderar varmt Timeout Service med Håkan i spetsen!", name: "Tina Hom", role: "Privatperson" },
];


/* ──────────────────────── HELPERS ──────────────────────── */

function SectionHeader({ tag, title, subtitle }) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ textAlign: "center", marginBottom: 44 }}>
      {tag && <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-primary)", marginBottom: 12, display: "block" }}>{tag}</span>}
      <h2 style={{ fontSize: "clamp(26px, 4vw, 38px)", marginBottom: subtitle ? 14 : 0 }}>{title}</h2>
      {subtitle && <p style={{ fontSize: 17, color: "var(--color-muted)", maxWidth: 640, margin: "0 auto", lineHeight: 1.6 }}>{subtitle}</p>}
    </motion.div>
  );
}

function FAQItem({ faq, isOpen, onClick }) {
  return (
    <div style={{ borderBottom: "1px solid var(--color-border)" }}>
      <button onClick={onClick} style={{ width: "100%", padding: "20px 0", background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, textAlign: "left" }}>
        <span style={{ fontSize: 16, fontWeight: 600, color: "var(--color-heading)", fontFamily: "var(--font-body)" }}>{faq.q}</span>
        <span style={{ width: 30, height: 30, borderRadius: "50%", background: isOpen ? "var(--color-primary)" : "var(--color-primary-light)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
          {isOpen ? <Minus size={15} color="white" /> : <Plus size={15} color="var(--color-primary)" />}
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }} style={{ overflow: "hidden" }}>
            <p style={{ fontSize: 15, color: "var(--color-muted)", lineHeight: 1.7, paddingBottom: 20, maxWidth: 700 }}>{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ──────────────────────── COMPONENT ──────────────────────── */

export default function HagerstenContent() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <>
      {/* Breadcrumb */}
      <div style={{ background: "var(--color-bg-alt)", borderBottom: "1px solid var(--color-border-light)" }}>
        <nav aria-label="Brödsmulor" className="container" style={{ padding: "12px 20px", fontSize: 13, color: "var(--color-muted)", display: "flex", alignItems: "center", gap: 4 }}>
          <a href="/" style={{ color: "var(--color-muted)", textDecoration: "none" }}>Hem</a>
          <ChevronRight size={12} />
          <span style={{ color: "var(--color-heading)", fontWeight: 500 }}>Städfirma Hägersten</span>
        </nav>
      </div>

      {/* Hero med formulär */}
      <section className="section">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }} className="services-layout">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-primary)", marginBottom: 12, display: "block" }}>Din lokala städfirma</span>
              <h1 style={{ fontSize: "clamp(32px, 5vw, 48px)", marginBottom: 20, lineHeight: 1.1 }}>Städfirma i Hägersten</h1>
              <p style={{ fontSize: 17, color: "var(--color-body)", lineHeight: 1.7, marginBottom: 16 }}>
                Timeout Service är ett familjeägt städföretag med kontor på Terrängvägen 43 i Hägersten och 35 års erfarenhet. Vi städar hem, flyttstädar, putsar fönster och sköter kontor i hela Hägersten och grannområdena, med fast pris, RUT-avdrag och nöjd-kund-garanti.
              </p>
              <p style={{ fontSize: 15, color: "var(--color-muted)", lineHeight: 1.6, marginBottom: 32 }}>
                Vi finns i {omradenHagersten.slice(0, 8).join(", ")} och närliggande områden.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a href="/boka" className="btn-primary">Boka städning</a>
                <a href="tel:08-377176" className="btn-secondary"><Phone size={16} /> 08-37 71 76</a>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
              <OffertForm title="Fråga om pris eller boka" subtitle="Berätta vad du behöver hjälp med, så återkommer vi med ett fast pris." arende="Förfrågan Hägersten" event="lead-kontakt" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Fördelar */}
      <section className="section-alt">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }} className="why-grid">
            {fordelar.map((f, i) => (
              <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }}
                style={{ textAlign: "center", padding: 28, background: "white", borderRadius: 12, border: "1px solid var(--color-border)" }}>
                <div style={{ width: 52, height: 52, borderRadius: 12, background: "var(--color-primary-light)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>
                  <f.icon size={24} style={{ color: "var(--color-primary)" }} />
                </div>
                <h3 style={{ fontSize: 17, marginBottom: 6 }}>{f.title}</h3>
                <p style={{ fontSize: 14, color: "var(--color-muted)", lineHeight: 1.5 }}>{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tjänster */}
      <section className="section">
        <div className="container">
          <SectionHeader tag="Tjänster" title="Städhjälp i Hägersten" subtitle="Alla tjänster med fast pris. Priserna för privatpersoner gäller efter RUT-avdrag." />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }} className="why-grid">
            {tjanster.map((t, i) => (
              <motion.a key={t.namn} href={t.href} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }}
                style={{ display: "block", padding: 24, background: "white", borderRadius: 12, border: "1px solid var(--color-border)", textDecoration: "none", color: "inherit" }}>
                <div style={{ width: 44, height: 44, borderRadius: 10, background: "var(--color-primary-light)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 14 }}>
                  <t.icon size={22} style={{ color: "var(--color-primary)" }} />
                </div>
                <h3 style={{ fontSize: 18, marginBottom: 8 }}>{t.namn}</h3>
                <p style={{ fontSize: 14, color: "var(--color-muted)", lineHeight: 1.55, marginBottom: 12 }}>{t.text}</p>
                <span style={{ fontSize: 14, fontWeight: 600, color: "var(--color-primary)", display: "inline-flex", alignItems: "center", gap: 4 }}>Läs mer <ArrowRight size={14} /></span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Områden */}
      <section className="section-alt">
        <div className="container" style={{ maxWidth: 800 }}>
          <SectionHeader tag="Områden" title="Här städar vi" subtitle="Vi utgår från Terrängvägen 43 i Hägersten. De här områdena ligger närmast, men vi tar uppdrag i hela Storstockholm." />
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            style={{ display: "flex", flexWrap: "wrap", gap: 10, justifyContent: "center" }}>
            {omradenHagersten.map((o) => (
              <span key={o} style={{ padding: "10px 16px", background: "white", border: "1px solid var(--color-border)", borderRadius: 100, fontSize: 15, color: "var(--color-heading)", display: "inline-flex", alignItems: "center", gap: 6 }}>
                <MapPin size={14} style={{ color: "var(--color-primary)" }} /> {o}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Omdömen */}
      <section className="section">
        <div className="container" style={{ maxWidth: 900 }}>
          <SectionHeader tag="Referenser" title="Kunder i området berättar" />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }} className="services-layout">
            {omdomen.map((r, i) => (
              <motion.div key={r.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{ padding: 28, background: "var(--color-bg-alt)", borderRadius: 12, border: "1px solid var(--color-border-light)" }}>
                <div style={{ display: "flex", gap: 2, marginBottom: 14 }}>
                  {[...Array(5)].map((_, s) => <Star key={s} size={16} fill="var(--color-accent)" color="var(--color-accent)" />)}
                </div>
                <p style={{ fontSize: 15, color: "var(--color-body)", lineHeight: 1.7, marginBottom: 16 }}>{r.text}</p>
                <div style={{ fontSize: 14, fontWeight: 600, color: "var(--color-heading)" }}>{r.name}</div>
                <div style={{ fontSize: 13, color: "var(--color-muted)" }}>{r.role}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-alt">
        <div className="container" style={{ maxWidth: 750 }}>
          <SectionHeader tag="Vanliga frågor" title="Frågor och svar" />
          <div style={{ borderTop: "1px solid var(--color-border)" }}>
            {faqsHagersten.map((faq, i) => (
              <FAQItem key={i} faq={faq} isOpen={openFaq === i} onClick={() => setOpenFaq(openFaq === i ? -1 : i)} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--color-primary)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.05, backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 30px, rgba(255,255,255,0.5) 30px, rgba(255,255,255,0.5) 31px)" }} />
        <div className="container" style={{ padding: "80px 20px", textAlign: "center", position: "relative", zIndex: 1 }}>
          <h2 style={{ fontSize: "clamp(26px, 4vw, 40px)", color: "white", marginBottom: 14 }}>Boka städning i Hägersten</h2>
          <p style={{ fontSize: 17, color: "rgba(255,255,255,0.8)", maxWidth: 480, margin: "0 auto 32px", lineHeight: 1.6 }}>
            Fast pris, RUT-avdrag och nöjd-kund-garanti. Ring eller boka online.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: 14, flexWrap: "wrap" }}>
            <a className="btn-accent" href="/boka">Boka städning <ArrowRight size={17} /></a>
            <a className="btn-secondary" href="tel:08-377176" style={{ color: "white", borderColor: "rgba(255,255,255,0.25)" }}>
              <Phone size={16} /> Ring 08-37 71 76
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
