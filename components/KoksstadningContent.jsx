"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Phone, ChevronRight, Check, Sparkles, Plus, Minus } from "lucide-react";

const priser = [
  { storlek: "1–10 m²", pris: "1 150 kr" },
  { storlek: "11–15 m²", pris: "1 500 kr" },
];

const extraTjanster = [
  { namn: "Tvätt av väggar och tak", pris: "250 kr/tim" },
  { namn: "Rengöring av lösa dekorationsföremål, uppackning av skåp/lådor", pris: "250 kr/tim" },
  { namn: "Fläktkåpa invändigt", pris: "300 kr/tim" },
  { namn: "Persienntvätt", pris: "40 kr/st" },
  { namn: "Handdisk", pris: "250 kr/tim" },
];

const faqs = [
  { q: "Får man använda RUT-avdrag för köksstädning?", a: "Ja, du får använda RUT-avdrag som skattebetald privatperson som är minst 18 år vid beskattningsårets utgång. Du behöver vara bosatt i Sverige och bo i bostaden där tjänsten utförs." },
  { q: "Hur gör jag för att få RUT-avdrag?", a: "Du behöver inte göra någonting. Vi skickar alltid faktura med RUT-avdraget förberett. Vi sköter allt pappersarbete åt dig." },
  { q: "Är Timeout Service personalen tillförlitlig?", a: "Vår personal kontrolleras mot polisens belastningsregister samt undertecknar avtal om tystnadsplikt. De bär alltid Timeout Service AB uniform och har företagslegitimation." },
  { q: "Måste jag vara hemma?", a: "Vi uppskattar att du finns på plats för att släppa in oss, men du behöver inte vara hemma under hela städningen." },
  { q: "Kan jag lämna nycklar till er?", a: "Ja, det går bra att lämna nycklar till oss." },
  { q: "Hur lång tid tar köksstädning?", a: "Vi ser alltid till att vi har tillräckligt med personal för att slutföra städningen inom en arbetsdag." },
  { q: "Hur betalar jag?", a: "Vi skickar faktura via e-post (kostnadsfritt). Det går även bra med Swish. Betalningsvillkor 10 dagar. Vi administrerar RUT-avdraget utan extra kostnad." },
  { q: "Om jag vill avboka?", a: "Kontakta oss omedelbart. Städningen debiteras fullt om avbokning inte sker innan planerat datum." },
  { q: "Vad ska jag tänka på innan städningen?", a: "Plocka undan lösa föremål för att maximera ytan vi kan rengöra. Töm disk och skapa utrymme på bänkytor. Meddela oss om speciella ytor på kyl och frys." },
  { q: "Vad händer om jag inte är nöjd?", a: "Kontakta oss inom 48 timmar efter slutfört arbete så åtgärdar vi eventuella brister." },
  { q: "Vad händer om något går sönder?", a: "Timeout Service AB är ansvarsförsäkrad. Om skadan uppkommit genom vår oaktsamhet står vi för kostnaden." },
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

export default function KoksstadningContent() {
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
          <span style={{ color: "var(--color-heading)", fontWeight: 500 }}>Köksstädning</span>
        </nav>
      </div>

      {/* Hero */}
      <section className="section">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }} className="services-layout">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-primary)", marginBottom: 12, display: "block" }}>Privatperson</span>
              <h1 style={{ fontSize: "clamp(32px, 5vw, 48px)", marginBottom: 20, lineHeight: 1.1 }}>
                Köksstädning i Stockholm
              </h1>
              <p style={{ fontSize: 17, color: "var(--color-body)", lineHeight: 1.7, marginBottom: 16 }}>
                Köksstädning är en av våra mest populära tjänster där vi djuprengör ditt kök — framför allt på ställen som i och runt spis och fläkt där mycket fett samlas.
              </p>
              <p style={{ fontSize: 15, color: "var(--color-muted)", lineHeight: 1.6, marginBottom: 32 }}>
                Köket är hemmets hjärta och höga hygienkrav är viktigt. Vardagsstädningen räcker inte alltid till. Vi djuprengör och tar bort smuts, fett och bakterier från minsta skrymsle och vrå.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a href="/boka" className="btn-primary">Boka köksstädning</a>
                <a href="tel:08-377176" className="btn-secondary"><Phone size={16} /> 08-37 71 76</a>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
              <img src="/images/staff-kitchen.jpg" alt="Köksstädning Stockholm — Timeout Service" style={{ width: "100%", borderRadius: 12, aspectRatio: "3/4", objectFit: "cover" }} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Priser */}
      <section className="section-alt">
        <div className="container" style={{ maxWidth: 700 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ textAlign: "center", marginBottom: 40 }}>
            <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-primary)", marginBottom: 12, display: "block" }}>Priser köksstädning</span>
            <h2 style={{ fontSize: "clamp(26px, 4vw, 38px)", marginBottom: 14 }}>Priser efter RUT-avdrag</h2>
            <p style={{ fontSize: 15, color: "var(--color-muted)", lineHeight: 1.6 }}>Exakt pris fastställs på plats. Du kan kombinera köksstädning med badrumsstädning.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            style={{ borderRadius: 12, overflow: "hidden", border: "1px solid var(--color-border)" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 16 }}>
              <thead>
                <tr style={{ background: "var(--color-primary)", color: "white" }}>
                  <th style={{ padding: "16px 24px", textAlign: "left", fontWeight: 600 }}>Kökets storlek</th>
                  <th style={{ padding: "16px 24px", textAlign: "right", fontWeight: 600 }}>Pris efter RUT</th>
                </tr>
              </thead>
              <tbody>
                {priser.map((row, i) => (
                  <tr key={row.storlek} style={{ background: i % 2 === 0 ? "white" : "var(--color-bg-alt)" }}>
                    <td style={{ padding: "16px 24px", fontWeight: 500, color: "var(--color-heading)" }}>{row.storlek}</td>
                    <td style={{ padding: "16px 24px", textAlign: "right", fontWeight: 700, color: "var(--color-primary)", fontSize: 18 }}>{row.pris}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* Vad ingår */}
      <section className="section">
        <div className="container" style={{ maxWidth: 800 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ textAlign: "center", marginBottom: 40 }}>
            <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-primary)", marginBottom: 12, display: "block" }}>Checklista</span>
            <h2 style={{ fontSize: "clamp(26px, 4vw, 38px)", marginBottom: 14 }}>Vad ingår i köksstädningen?</h2>
            <a href="/pdf/checklista-kok.pdf" target="_blank" rel="noopener noreferrer" style={{ fontSize: 14, fontWeight: 600, color: "var(--color-primary)", display: "inline-flex", alignItems: "center", gap: 6 }}>
              Ladda ner checklista (PDF) <ArrowRight size={14} />
            </a>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }} className="services-layout">
            {[
              "Diskbänk, bänkytor och blandare rengörs",
              "Kakel ovanför diskbänk och spis rengörs",
              "Kyl och frys — in- och utvändigt",
              "Skåp invändigt avtorkas (när de är tomma)",
              "Sockel på underskåp rengörs",
              "Ugn med plåtar och galler rengörs",
              "Spis dras ut och rengörs bakom",
              "Mikrovågsugn in- och utvändigt",
              "Fläktkåpa utsida och undersida avtorkas",
              "Diskmaskin in- och utvändigt",
              "Sopförvaringsyta rengörs in- och utvändigt",
              "Handtag avtorkas",
              "Golv fuktmoppas",
            ].map((item) => (
              <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: 10, padding: "12px 16px", background: "var(--color-bg-alt)", borderRadius: 8, fontSize: 15, color: "var(--color-body)" }}>
                <Check size={18} style={{ color: "var(--color-primary)", flexShrink: 0, marginTop: 2 }} />
                {item}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Extra tjänster */}
      <section className="section-alt">
        <div className="container" style={{ maxWidth: 650 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ textAlign: "center", marginBottom: 32 }}>
            <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-primary)", marginBottom: 12, display: "block" }}>Tillval</span>
            <h2 style={{ fontSize: "clamp(22px, 3vw, 30px)" }}>Extra tjänster</h2>
          </motion.div>
          <div style={{ display: "grid", gap: 8 }}>
            {extraTjanster.map((t) => (
              <div key={t.namn} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "14px 18px", background: "white", borderRadius: 8, border: "1px solid var(--color-border)", fontSize: 15 }}>
                <span style={{ color: "var(--color-body)" }}>{t.namn}</span>
                <span style={{ fontWeight: 600, color: "var(--color-heading)", whiteSpace: "nowrap", marginLeft: 12 }}>{t.pris}</span>
              </div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
            style={{ marginTop: 24, padding: 20, background: "var(--color-accent-light)", border: "1px solid rgba(222,160,30,0.2)", borderRadius: 12, display: "flex", alignItems: "flex-start", gap: 12 }}>
            <Sparkles size={18} style={{ color: "var(--color-accent)", flexShrink: 0, marginTop: 2 }} />
            <p style={{ fontSize: 14, color: "var(--color-muted)", lineHeight: 1.6 }}>
              <strong style={{ color: "var(--color-heading)" }}>Tips:</strong> Kombinera köksstädning med badrumsstädning och få ett komplett resultat. Kontakta oss för prisförslag.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tips inför */}
      <section className="section">
        <div className="container" style={{ maxWidth: 700 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ textAlign: "center", marginBottom: 36 }}>
            <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-primary)", marginBottom: 12, display: "block" }}>Tips</span>
            <h2 style={{ fontSize: "clamp(24px, 3.5vw, 32px)" }}>Att tänka på inför köksstädningen</h2>
          </motion.div>
          {[
            "Plocka undan lösa föremål för att maximera ytan vi kan rengöra",
            "Töm disk och skapa utrymme på bänkytor",
            "Meddela oss om speciella material på kyl- och frysytor",
            "Kommunicera eventuella önskemål innan vi börjar",
          ].map((item, i) => (
            <div key={i} style={{ display: "flex", gap: 14, padding: "14px 0", borderBottom: i < 3 ? "1px solid var(--color-border-light)" : "none" }}>
              <div style={{ width: 28, height: 28, borderRadius: "50%", background: "var(--color-accent)", color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 700, flexShrink: 0 }}>{i + 1}</div>
              <span style={{ fontSize: 15, color: "var(--color-body)", lineHeight: 1.5 }}>{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="section-alt">
        <div className="container" style={{ maxWidth: 750 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ textAlign: "center", marginBottom: 48 }}>
            <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-primary)", marginBottom: 12, display: "block" }}>Vanliga frågor</span>
            <h2 style={{ fontSize: "clamp(26px, 4vw, 38px)" }}>Frågor och svar om köksstädning</h2>
          </motion.div>
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
          <h2 style={{ fontSize: "clamp(26px, 4vw, 40px)", color: "white", marginBottom: 14 }}>Boka köksstädning i Stockholm</h2>
          <p style={{ fontSize: 17, color: "rgba(255,255,255,0.8)", maxWidth: 480, margin: "0 auto 32px", lineHeight: 1.6 }}>
            Djuprengöring av hela köket från 1 150 kr efter RUT-avdrag.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: 14, flexWrap: "wrap" }}>
            <a className="btn-accent" href="/boka">Boka köksstädning <ArrowRight size={17} /></a>
            <a className="btn-secondary" href="tel:08-377176" style={{ color: "white", borderColor: "rgba(255,255,255,0.25)" }}>
              <Phone size={16} /> Ring 08-37 71 76
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
