"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Phone,
  ChevronRight,
  Check,
  Shield,
  Thermometer,
  Users,
  BadgeCheck,
  Plus,
  Minus,
  Info,
} from "lucide-react";

/* ──────────────────────── DATA ──────────────────────── */

const lagenhetPriser = [
  { rum: "1 rok. max 9 fönster", etGlas: "450 kr", tvaGlas: "500 kr", treGlas: "632 kr" },
  { rum: "2 rok. max 11 fönster", etGlas: "450 kr", tvaGlas: "550 kr", treGlas: "660 kr" },
  { rum: "3 rok. max 13 fönster", etGlas: "475 kr", tvaGlas: "575 kr", treGlas: "726 kr" },
  { rum: "4 rok. max 15 fönster", etGlas: "500 kr", tvaGlas: "600 kr", treGlas: "800 kr" },
  { rum: "5 rok. max 17 fönster", etGlas: "525 kr", tvaGlas: "625 kr", treGlas: "880 kr" },
];

const villaPriser = [
  { typ: "Standard 2-luft", pris: "50 kr/fönster" },
  { typ: "Standard 4-luft", pris: "60 kr/fönster" },
  { typ: "Standard 6-luft", pris: "70 kr/fönster" },
  { typ: "Inglasad balkong/veranda", pris: "från 400 kr" },
  { typ: "Inglasad uteplats (max 10 glaspartier)", pris: "från 500 kr" },
];

const tillagg = [
  { namn: "Helgtillägg", pris: "500 kr" },
  { namn: "Stor stege", pris: "100 kr" },
  { namn: "Stegearbete över 6 meter", pris: "250 kr" },
  { namn: "Persienntvätt", pris: "75 kr eller 40 kr/st" },
  { namn: "Fönsterbåge/list tvätt", pris: "40 kr/st" },
  { namn: "Utåtgående fönster", pris: "+20 kr" },
  { namn: "Över-/underlapp", pris: "+30 kr" },
  { namn: "Silikon-/färgborttagning", pris: "+30 kr" },
  { namn: "Spröjs", pris: "+30 kr/fönster" },
  { namn: "Karmtvätt in-/utsida", pris: "+20 kr/fönster" },
];

const features = [
  { icon: BadgeCheck, title: "Fast pris", desc: "Inga överraskningar — du vet alltid vad det kostar" },
  { icon: Shield, title: "3 dagars garanti", desc: "Inte nöjd? Vi kommer tillbaka kostnadsfritt" },
  { icon: Thermometer, title: "Ner till -16°C", desc: "Vi putsar fönster året runt, oavsett väder" },
  { icon: Users, title: "550+ kunder/år", desc: "Stockholms mest anlitade fönsterputsare" },
];

const faqs = [
  { q: "Varför är era priser lägre än de flesta fönsterputsföretag?", a: "Timeout Service AB är ett familjeägt företag med 35 års erfarenhet. Vi utför de flesta fönsterputsuppdrag själva, vilket gör att vi kan erbjuda konkurrenskraftiga priser utan mellanhänder." },
  { q: "Får man använda RUT-avdrag för fönsterputs?", a: "Ja, du får använda RUT-avdrag som skattebetald privatperson som är minst 18 år vid beskattningsårets utgång. Du behöver vara bosatt i Sverige och bo i bostaden där tjänsten utförs. Du betalar bara 50% av arbetskostnaden." },
  { q: "Vad behöver jag förbereda?", a: "Se till att fönstren är tillgängliga — flytta undan gardiner, blomkrukor och lösa föremål. Fönsterlås bör vara tillgängliga. Behöver du hjälp med undan­plockning kan vi hjälpa till för 250 kr/timme." },
  { q: "Vilken lägsta temperatur putsar ni fönster i?", a: "Vi putsar fönster ända ner till -16°C. Vi anpassar våra metoder och medel efter temperaturen för bästa resultat." },
  { q: "Hur lång tid tar fönsterputsen?", a: "1–2 rum: ca 45 minuter till 1 timme. 3–4 rum: ca 1 till 1,5 timmar. Villor/radhus: beror på antal fönster." },
  { q: "Måste jag vara hemma?", a: "Vi uppskattar att du finns på plats för att släppa in oss, men du behöver inte vara hemma under hela putsningen." },
  { q: "Vad händer om det regnar?", a: "Om fönstren öppnas inåt genomförs putsningen som planerat. Vid utåtgående fönster kontaktar vi dig i förväg för att boka om." },
  { q: "Vad händer om något går sönder?", a: "Timeout Service AB är ansvarsförsäkrad. Om skadan uppkommit genom att vi har varit oaktsamma står vi självklart för kostnaden." },
  { q: "Hur betalar jag?", a: "Vi skickar faktura via e-post (kostnadsfritt). Det går även bra att betala med Swish. Betalningsvillkoren är 10 dagar. Vi administrerar ditt RUT-avdrag utan extra kostnad." },
];

const omraden = "Hägersten, Skärholmen, Älvsjö, Årsta, Enskede, Enskede Gård, Johanneshov, Fasta, Bagarmossen, Bandhagen, Skarpnäck, Skönda och hela Storstockholm";

/* ──────────────────────── HELPERS ──────────────────────── */

function SectionHeader({ tag, title, subtitle, align = "center" }) {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ textAlign: align, marginBottom: 48 }}>
      {tag && <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-primary)", marginBottom: 12, display: "block" }}>{tag}</span>}
      <h2 style={{ fontSize: "clamp(26px, 4vw, 38px)", marginBottom: subtitle ? 14 : 0 }}>{title}</h2>
      {subtitle && <p style={{ fontSize: 17, color: "var(--color-muted)", maxWidth: 600, margin: align === "center" ? "0 auto" : 0, lineHeight: 1.6 }}>{subtitle}</p>}
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

export default function FonsterputsContent() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <>
      {/* Breadcrumb */}
      <div style={{ background: "var(--color-bg-alt)", borderBottom: "1px solid var(--color-border-light)" }}>
        <nav aria-label="Brödsmulor" className="container" style={{ padding: "12px 20px", fontSize: 13, color: "var(--color-muted)", display: "flex", alignItems: "center", gap: 4 }}>
          <a href="/" style={{ color: "var(--color-muted)", textDecoration: "none" }}>Hem</a>
          <ChevronRight size={12} />
          <a href="/tjanster" style={{ color: "var(--color-muted)", textDecoration: "none" }}>Privatperson</a>
          <ChevronRight size={12} />
          <span style={{ color: "var(--color-heading)", fontWeight: 500 }}>Fönsterputs</span>
        </nav>
      </div>

      {/* Hero */}
      <section className="section">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }} className="services-layout">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-primary)", marginBottom: 12, display: "block" }}>Privatperson</span>
              <h1 style={{ fontSize: "clamp(32px, 5vw, 48px)", marginBottom: 20, lineHeight: 1.1 }}>
                Professionell fönsterputs i Stockholm
              </h1>
              <p style={{ fontSize: 17, color: "var(--color-body)", lineHeight: 1.7, marginBottom: 16 }}>
                Vi ger finare utsikter till över 550 kunder varje år! Fönsterputs kan vara svårt att få till om man vill ha ett bra resultat — låt oss ta hand om det med fast pris och RUT-avdrag.
              </p>
              <p style={{ fontSize: 15, color: "var(--color-muted)", lineHeight: 1.6, marginBottom: 32 }}>
                Vi utför fönsterputs i {omraden}.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a href="/boka" className="btn-primary">Boka fönsterputs</a>
                <a href="tel:08-377176" className="btn-secondary"><Phone size={16} /> 08-37 71 76</a>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
              <img src="/images/fonsterputs-1.jpg" alt="Fönsterputs Stockholm — Timeout Service" style={{ width: "100%", borderRadius: 12, aspectRatio: "4/3", objectFit: "cover" }} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-alt">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }} className="why-grid">
            {features.map((f, i) => (
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

      {/* Priser lägenhet */}
      <section className="section">
        <div className="container" style={{ maxWidth: 800 }}>
          <SectionHeader tag="Priser fönsterputs" title="Priser Lägenhet" subtitle="Alla priser inkl. moms efter RUT-avdrag (50%). Materialavgift 100 kr tillkommer per tillfälle." />
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            style={{ borderRadius: 12, overflow: "hidden", border: "1px solid var(--color-border)" }}>
            <div style={{ overflowX: "auto" }}>
              <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 15, minWidth: 640 }}>
                <thead>
                  <tr style={{ background: "var(--color-primary)", color: "white" }}>
                    <th style={{ padding: "16px 20px", textAlign: "left", fontWeight: 600, verticalAlign: "top" }}>Antal fönster</th>
                    <th style={{ padding: "16px 20px", textAlign: "left", fontWeight: 600, verticalAlign: "top", lineHeight: 1.4 }}>
                      1 glas fönster,<br /><span style={{ fontWeight: 400, fontSize: 14, opacity: 0.9 }}>(2-sidig fönsterputs)</span>
                    </th>
                    <th style={{ padding: "16px 20px", textAlign: "left", fontWeight: 600, verticalAlign: "top", lineHeight: 1.4 }}>
                      2 glas fönster,<br /><span style={{ fontWeight: 400, fontSize: 14, opacity: 0.9 }}>(4-sidig fönsterputs)</span>
                    </th>
                    <th style={{ padding: "16px 20px", textAlign: "left", fontWeight: 600, verticalAlign: "top", lineHeight: 1.4 }}>
                      3 glas fönster,<br /><span style={{ fontWeight: 400, fontSize: 14, opacity: 0.9 }}>(6-sidig fönsterputs)</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {lagenhetPriser.map((row, i) => (
                    <tr key={row.rum} style={{ background: i % 2 === 0 ? "white" : "var(--color-bg-alt)" }}>
                      <td style={{ padding: "14px 20px", fontWeight: 600, color: "var(--color-heading)" }}>{row.rum}</td>
                      <td style={{ padding: "14px 20px", color: "var(--color-body)" }}>{row.etGlas}</td>
                      <td style={{ padding: "14px 20px", color: "var(--color-body)" }}>{row.tvaGlas}</td>
                      <td style={{ padding: "14px 20px", color: "var(--color-body)" }}>{row.treGlas}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div style={{ padding: "14px 20px", background: "var(--color-bg-alt)", fontSize: 14, color: "var(--color-muted)", borderTop: "1px solid var(--color-border)" }}>
              För extra fönster tillkommer avgift på <strong>30 kr/st</strong>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Priser villa */}
      <section className="section-alt">
        <div className="container" style={{ maxWidth: 800 }}>
          <SectionHeader tag="Villa & radhus" title="Priser för villa och radhus" subtitle="Minimidebitering 800 kr. Alla priser inkl. moms efter RUT-avdrag." />
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            style={{ borderRadius: 12, overflow: "hidden", border: "1px solid var(--color-border)" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 15 }}>
              <thead>
                <tr style={{ background: "var(--color-primary)", color: "white" }}>
                  <th style={{ padding: "14px 20px", textAlign: "left", fontWeight: 600 }}>Typ</th>
                  <th style={{ padding: "14px 20px", textAlign: "right", fontWeight: 600 }}>Pris</th>
                </tr>
              </thead>
              <tbody>
                {villaPriser.map((row, i) => (
                  <tr key={row.typ} style={{ background: i % 2 === 0 ? "white" : "var(--color-bg-alt)" }}>
                    <td style={{ padding: "14px 20px", color: "var(--color-heading)" }}>{row.typ}</td>
                    <td style={{ padding: "14px 20px", textAlign: "right", fontWeight: 600, color: "var(--color-primary)" }}>{row.pris}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* Tilläggsavgifter */}
      <section className="section">
        <div className="container" style={{ maxWidth: 800 }}>
          <SectionHeader tag="Tillägg" title="Tilläggsavgifter" subtitle="Tillval som kan tillkomma utöver baspriset." />
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }} className="services-layout">
            {tillagg.map((t) => (
              <div key={t.namn} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "14px 18px", background: "var(--color-bg-alt)", borderRadius: 8, fontSize: 15 }}>
                <span style={{ color: "var(--color-body)" }}>{t.namn}</span>
                <span style={{ fontWeight: 600, color: "var(--color-heading)", whiteSpace: "nowrap", marginLeft: 12 }}>{t.pris}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Hur man räknar fönster */}
      <section className="section-alt">
        <div className="container" style={{ maxWidth: 700 }}>
          <SectionHeader tag="Bra att veta" title="Hur räknar man fönster?" />
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            style={{ display: "flex", gap: 24, alignItems: "flex-start", background: "white", padding: 28, borderRadius: 12, border: "1px solid var(--color-border)" }}>
            <Info size={24} style={{ color: "var(--color-primary)", flexShrink: 0, marginTop: 2 }} />
            <div>
              <p style={{ fontSize: 15, color: "var(--color-body)", lineHeight: 1.7, marginBottom: 12 }}>
                Varje del av ett fönsterparti som går att öppna separat räknas som ett separat fönster.
              </p>
              <p style={{ fontSize: 15, color: "var(--color-body)", lineHeight: 1.7 }}>
                Fast fasadglas som separeras av lister innebär att varje enskild glasyta räknas som ett fönster.
              </p>
              <img src="/images/fonster-rakna.jpeg" alt="Hur man räknar fönster — illustration" style={{ marginTop: 20, width: "100%", borderRadius: 8, maxWidth: 400 }} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Avbokningspolicy */}
      <section className="section">
        <div className="container" style={{ maxWidth: 700 }}>
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            style={{ padding: 24, background: "var(--color-accent-light)", border: "1px solid rgba(222,160,30,0.2)", borderRadius: 12, display: "flex", alignItems: "flex-start", gap: 14 }}>
            <Info size={20} style={{ color: "var(--color-accent)", flexShrink: 0, marginTop: 2 }} />
            <p style={{ fontSize: 15, color: "var(--color-body)", lineHeight: 1.6 }}>
              <strong>Avbokningspolicy:</strong> Fönsterputsen debiteras fullt om avbokning inte sker minst 48 timmar före avtalad tid.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-alt">
        <div className="container" style={{ maxWidth: 750 }}>
          <SectionHeader tag="Vanliga frågor" title="Frågor och svar om fönsterputs" />
          <div style={{ borderTop: "1px solid var(--color-border)" }}>
            {faqs.map((faq, i) => (
              <FAQItem key={i} faq={faq} isOpen={openFaq === i} onClick={() => setOpenFaq(openFaq === i ? -1 : i)} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--color-primary)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.05, backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 30px, rgba(255,255,255,0.5) 30px, rgba(255,255,255,0.5) 31px)" }} />
        <div className="container" style={{ padding: "80px 20px", textAlign: "center", position: "relative", zIndex: 1 }}>
          <h2 style={{ fontSize: "clamp(26px, 4vw, 40px)", color: "white", marginBottom: 14 }}>
            Boka fönsterputs i Stockholm
          </h2>
          <p style={{ fontSize: 17, color: "rgba(255,255,255,0.8)", maxWidth: 480, margin: "0 auto 32px", lineHeight: 1.6 }}>
            Fast pris, RUT-avdrag och 3 dagars garanti. Kontakta oss idag för en offert.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: 14, flexWrap: "wrap" }}>
            <a className="btn-accent" href="/boka">Boka fönsterputs <ArrowRight size={17} /></a>
            <a className="btn-secondary" href="tel:08-377176" style={{ color: "white", borderColor: "rgba(255,255,255,0.25)" }}>
              <Phone size={16} /> Ring 08-37 71 76
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
