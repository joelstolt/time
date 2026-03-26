"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Phone, ChevronRight, Check, Leaf, Sparkles, Eye, Plus, Minus } from "lucide-react";

const steg = [
  { nr: "1", title: "Dammsugning", desc: "Vi börjar med att avlägsna löst smuts och damm från mattan." },
  { nr: "2", title: "Fläckborttagning", desc: "Fläckar behandlas och löses upp med specialmedel." },
  { nr: "3", title: "Maskinell skurning", desc: "Ingrodd smuts löses upp med professionell skurmaskin." },
  { nr: "4", title: "Våtsugning", desc: "All smuts och rengöringsmedel sugs upp ur mattan." },
  { nr: "5", title: "Slutkontroll", desc: "Vi gör en slutkontroll tillsammans med dig." },
];

const faqs = [
  { q: "Får man använda RUT-avdrag för mattvätt?", a: "Ja, du får använda RUT-avdrag som skattebetald privatperson som är minst 18 år vid beskattningsårets utgång. Du behöver vara bosatt i Sverige och bo i bostaden där tjänsten utförs." },
  { q: "Hur gör jag för att få RUT-avdrag?", a: "Du behöver inte göra någonting. Vi skickar alltid faktura med RUT-avdraget förberett. Vi sköter allt pappersarbete åt dig." },
  { q: "Måste jag ha egen utrustning?", a: "Nej, vi tillhandahåller all utrustning och alla rengöringsmedel." },
  { q: "Måste jag vara hemma?", a: "Vi uppskattar att du finns på plats för att släppa in oss, men du behöver inte vara hemma under hela tvättningen." },
  { q: "Utför ni mattvätt hemma hos mig?", a: "Ja, de flesta uppdrag utför vi på plats hemma hos dig i hela Storstockholm." },
  { q: "Kan ni ta bort fläckar?", a: "Vi kan få bort nästan alla typer av fläckar. Bedömning sker på plats." },
  { q: "Vad ska jag tänka på innan mattvätten?", a: "Flytta undan saker som står på mattan så att vi kommer åt ordentligt." },
  { q: "Hur lång tid innan jag kan gå på mattan?", a: "Vänta minst 8–12 timmar innan du går på mattan efter tvättningen." },
  { q: "Kan ni garantera att fläckar försvinner?", a: "Vi kan inte ge garanti utan att ha sett mattan. Bedömning görs på plats och vi meddelar förväntat resultat." },
  { q: "Är Timeout Service personalen tillförlitlig?", a: "Vår personal kontrolleras mot polisens belastningsregister samt undertecknar avtal om tystnadsplikt. De bär alltid uniform och har företagslegitimation." },
  { q: "Hur betalar jag?", a: "Vi skickar faktura via e-post (kostnadsfritt). Det går även bra med Swish. Betalningsvillkor 10 dagar. Vi administrerar RUT-avdraget utan extra kostnad." },
  { q: "Vad händer om något går sönder?", a: "Timeout Service AB är ansvarsförsäkrad upp till 10 miljoner kronor. Om skadan uppkommit genom vår oaktsamhet står vi för kostnaden." },
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

export default function MattvattContent() {
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
          <span style={{ color: "var(--color-heading)", fontWeight: 500 }}>Mattvätt</span>
        </nav>
      </div>

      {/* Hero */}
      <section className="section">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }} className="services-layout">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-primary)", marginBottom: 12, display: "block" }}>Privatperson</span>
              <h1 style={{ fontSize: "clamp(32px, 5vw, 48px)", marginBottom: 20, lineHeight: 1.1 }}>
                Professionell mattvätt i Stockholm
              </h1>
              <p style={{ fontSize: 17, color: "var(--color-body)", lineHeight: 1.7, marginBottom: 16 }}>
                Vi utför mattvätt i hela Storstockholm — på plats hemma hos dig! Mattvätt förlänger mattans livslängd och återställer dess ursprungliga lyster.
              </p>
              <p style={{ fontSize: 15, color: "var(--color-muted)", lineHeight: 1.6, marginBottom: 32 }}>
                Vanlig dammsugning avlägsnar ytligt damm men inte den djupa smutsen och bakterierna som är skadliga för mattan på sikt. Vi rekommenderar professionell mattvätt årligen, eller minst vartannat år.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a href="/boka" className="btn-primary">Boka mattvätt</a>
                <a href="tel:08-377176" className="btn-secondary"><Phone size={16} /> 08-37 71 76</a>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
              <img src="/images/mattvatt-1.png" alt="Mattvätt Stockholm — Timeout Service" style={{ width: "100%", borderRadius: 12, maxWidth: 400, margin: "0 auto", display: "block" }} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pris */}
      <section className="section-alt">
        <div className="container" style={{ maxWidth: 600 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ textAlign: "center" }}>
            <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-primary)", marginBottom: 12, display: "block" }}>Priser</span>
            <h2 style={{ fontSize: "clamp(26px, 4vw, 38px)", marginBottom: 14 }}>Kontakta oss för offert</h2>
            <p style={{ fontSize: 16, color: "var(--color-muted)", lineHeight: 1.6, maxWidth: 480, margin: "0 auto 28px" }}>
              Priset beror på mattans storlek, material och skick. Kontakta oss för en kostnadsfri bedömning och offert.
            </p>
            <div style={{ display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap" }}>
              <a href="/boka" className="btn-primary">Få offert</a>
              <a href="tel:08-377176" className="btn-secondary"><Phone size={16} /> 08-37 71 76</a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process */}
      <section className="section">
        <div className="container" style={{ maxWidth: 750 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ textAlign: "center", marginBottom: 48 }}>
            <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-primary)", marginBottom: 12, display: "block" }}>Vår process</span>
            <h2 style={{ fontSize: "clamp(26px, 4vw, 38px)", marginBottom: 14 }}>Så tvättar vi din matta</h2>
            <p style={{ fontSize: 15, color: "var(--color-muted)", display: "flex", alignItems: "center", justifyContent: "center", gap: 6 }}>
              <Leaf size={16} style={{ color: "var(--color-primary)" }} /> Alla våra tvättmedel är Svanenmärkta
            </p>
          </motion.div>

          {steg.map((s, i) => (
            <motion.div
              key={s.nr}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              style={{ display: "flex", gap: 20, padding: "24px 0", borderBottom: i < steg.length - 1 ? "1px solid var(--color-border-light)" : "none" }}
            >
              <div style={{ width: 48, height: 48, borderRadius: "50%", background: "var(--color-primary)", color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, fontWeight: 800, flexShrink: 0 }}>
                {s.nr}
              </div>
              <div>
                <h3 style={{ fontSize: 18, marginBottom: 4 }}>{s.title}</h3>
                <p style={{ fontSize: 15, color: "var(--color-muted)", lineHeight: 1.5 }}>{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Bilder */}
      <section className="section-alt">
        <div className="container" style={{ maxWidth: 600 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ textAlign: "center", marginBottom: 32 }}>
            <h2 style={{ fontSize: "clamp(22px, 3vw, 30px)" }}>Resultat som syns</h2>
          </motion.div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            <img src="/images/mattvatt-2.png" alt="Mattvätt före och efter" style={{ width: "100%", borderRadius: 10 }} />
            <img src="/images/mattvatt-3.png" alt="Mattvätt resultat" style={{ width: "100%", borderRadius: 10 }} />
          </div>
        </div>
      </section>

      {/* Tips */}
      <section className="section">
        <div className="container" style={{ maxWidth: 700 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            style={{ padding: 28, background: "var(--color-accent-light)", border: "1px solid rgba(222,160,30,0.2)", borderRadius: 12, display: "flex", alignItems: "flex-start", gap: 14 }}>
            <Eye size={20} style={{ color: "var(--color-accent)", flexShrink: 0, marginTop: 2 }} />
            <div>
              <div style={{ fontSize: 16, fontWeight: 700, color: "var(--color-heading)", marginBottom: 6 }}>Bra att veta</div>
              <ul style={{ listStyle: "none", display: "grid", gap: 6 }}>
                <li style={{ fontSize: 15, color: "var(--color-body)", lineHeight: 1.5, display: "flex", alignItems: "flex-start", gap: 8 }}>
                  <Check size={16} style={{ color: "var(--color-accent)", flexShrink: 0, marginTop: 3 }} />
                  Flytta undan saker som står på mattan innan vi kommer
                </li>
                <li style={{ fontSize: 15, color: "var(--color-body)", lineHeight: 1.5, display: "flex", alignItems: "flex-start", gap: 8 }}>
                  <Check size={16} style={{ color: "var(--color-accent)", flexShrink: 0, marginTop: 3 }} />
                  Vänta minst 8–12 timmar innan du går på mattan efter tvättningen
                </li>
                <li style={{ fontSize: 15, color: "var(--color-body)", lineHeight: 1.5, display: "flex", alignItems: "flex-start", gap: 8 }}>
                  <Check size={16} style={{ color: "var(--color-accent)", flexShrink: 0, marginTop: 3 }} />
                  Vi rekommenderar professionell mattvätt minst vartannat år
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-alt">
        <div className="container" style={{ maxWidth: 750 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ textAlign: "center", marginBottom: 48 }}>
            <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-primary)", marginBottom: 12, display: "block" }}>Vanliga frågor</span>
            <h2 style={{ fontSize: "clamp(26px, 4vw, 38px)" }}>Frågor och svar om mattvätt</h2>
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
          <h2 style={{ fontSize: "clamp(26px, 4vw, 40px)", color: "white", marginBottom: 14 }}>Boka mattvätt i Stockholm</h2>
          <p style={{ fontSize: 17, color: "rgba(255,255,255,0.8)", maxWidth: 480, margin: "0 auto 32px", lineHeight: 1.6 }}>
            99 kr/kvm, Svanenmärkta produkter, på plats hemma hos dig.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: 14, flexWrap: "wrap" }}>
            <a className="btn-accent" href="/boka">Boka mattvätt <ArrowRight size={17} /></a>
            <a className="btn-secondary" href="tel:08-377176" style={{ color: "white", borderColor: "rgba(255,255,255,0.25)" }}>
              <Phone size={16} /> Ring 08-37 71 76
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
