"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Phone, ChevronRight, Check, Star, Sparkles, Plus, Minus, Percent, Shield, Package, Users } from "lucide-react";

const faqs = [
  { q: "Får man använda RUT-avdrag för visningsstädning?", a: "Ja, du får använda RUT-avdrag som skattebetald privatperson som är minst 18 år vid beskattningsårets utgång. Du behöver vara bosatt i Sverige och bo i bostaden där tjänsten utförs." },
  { q: "Hur gör jag för att få RUT-avdrag?", a: "Du behöver inte göra någonting. Vi skickar alltid faktura med RUT-avdraget förberett. Vi sköter allt pappersarbete åt dig." },
  { q: "Ingår fönsterputsning i tjänsten?", a: "Fönsterputs är en tilläggstjänst som kan bokas vid beställning. Kontakta oss för pris." },
  { q: "Är Timeout Service personalen tillförlitlig?", a: "Vår personal kontrolleras mot polisens belastningsregister samt undertecknar avtal om tystnadsplikt. De bär alltid Timeout Service AB uniform och har företagslegitimation." },
  { q: "Kan jag lämna nycklar till er?", a: "Ja, det går bra att lämna nycklar till oss." },
  { q: "Hur lång tid tar en visningsstädning?", a: "Vi ser alltid till att vi har tillräckligt med personal för att slutföra städningen inom en arbetsdag." },
  { q: "Måste jag vara hemma?", a: "Nej, men vi uppskattar att du finns på plats för att släppa in oss." },
  { q: "Om jag vill avboka städningen?", a: "Kontakta oss omedelbart. Avbokning samma dag debiteras fullt." },
  { q: "Vad ska jag tänka på innan städningen?", a: "Plocka undan lösa föremål, se till att bänkytor och diskbänk är fria. Flytta saker som står i vägen för fönsterputsning och skydda möbler med plast vid behov." },
  { q: "Vad händer om det regnar och jag beställt fönsterputs?", a: "Om fönstren öppnas inåt genomförs putsningen som planerat. Vid utåtgående fönster kontaktar vi dig i förväg för att boka om." },
  { q: "Kan jag beställa visningsstädning om bostaden är hårt smutsad?", a: "Standardpriser gäller för normalt underhållna bostäder. Hårt nedsmutsade bostäder kan medföra extra tid. Alternativ: boka storstädning istället." },
  { q: "Måste jag ha städutrustning i lägenheten?", a: "Nej, vi tar med all utrustning och alla rengöringsmedel som behövs." },
  { q: "Vad händer om något går sönder?", a: "Timeout Service AB är ansvarsförsäkrad. Om skadan uppkommit genom vår oaktsamhet står vi för kostnaden." },
  { q: "Hur betalar jag?", a: "Vi skickar faktura via e-post (kostnadsfritt). Det går även bra med Swish. Betalningsvillkor 10 dagar. Vi administrerar RUT-avdraget utan extra kostnad." },
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

export default function VisningsstadningContent() {
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
          <span style={{ color: "var(--color-heading)", fontWeight: 500 }}>Visningsstädning</span>
        </nav>
      </div>

      {/* Hero */}
      <section className="section">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }} className="services-layout">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-primary)", marginBottom: 12, display: "block" }}>Privatperson</span>
              <h1 style={{ fontSize: "clamp(32px, 5vw, 48px)", marginBottom: 20, lineHeight: 1.1 }}>
                Visningsstädning i Stockholm
              </h1>
              <p style={{ fontSize: 17, color: "var(--color-body)", lineHeight: 1.7, marginBottom: 16 }}>
                För bästa försäljningsresultat gör visningsstädning skillnad. En av de viktigaste dagarna är naturligtvis visningsdagen — och ett professionellt städat hem ger köparna ett helt annat intryck.
              </p>
              <p style={{ fontSize: 15, color: "var(--color-muted)", lineHeight: 1.6, marginBottom: 32 }}>
                Vi samarbetar med Notar i Årsta, Älvsjö och Högdalen samt SKB. Sedan 2016 har vi städat tusentals kvadratmeter med mycket bra resultat.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a href="/boka" className="btn-primary">Boka visningsstädning</a>
                <a href="tel:08-377176" className="btn-secondary"><Phone size={16} /> 08-37 71 76</a>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
              <img src="/images/tjanst-visning.jpg" alt="Visningsstädning Stockholm — Timeout Service samarbete med Notar" style={{ width: "100%", borderRadius: 12, aspectRatio: "1/1", objectFit: "cover" }} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Notar testimonial */}
      <section className="section-alt" style={{ paddingTop: 60, paddingBottom: 60 }}>
        <div className="container" style={{ maxWidth: 700, textAlign: "center" }}>
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-primary)", marginBottom: 16, display: "block" }}>Notars mäklare säger</span>
            <div style={{ display: "flex", justifyContent: "center", gap: 2, marginBottom: 16 }}>
              {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="var(--color-accent)" color="var(--color-accent)" />)}
            </div>
            <p style={{ fontSize: 18, fontStyle: "italic", color: "var(--color-body)", lineHeight: 1.7, marginBottom: 12, fontFamily: "var(--font-heading)" }}>
              &ldquo;Vi har anlitat Timeout Service sedan 2016 både för regelbunden kontorsstädning samt för våra kunders räkning. De har alltid agerat utifrån våra önskemål och är otroligt enkla och flexibla att ha att göra med.&rdquo;
            </p>
            <p style={{ fontSize: 14, fontWeight: 600, color: "var(--color-primary)" }}>— Maria Ragnarsson, Notar</p>
          </motion.div>
        </div>
      </section>

      {/* 10% rabatt */}
      <section className="section">
        <div className="container" style={{ maxWidth: 800 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 28, alignItems: "center", background: "var(--color-primary)", borderRadius: 16, padding: "clamp(28px, 4vw, 40px)" }} className="services-layout">
            <div style={{ width: 80, height: 80, borderRadius: "50%", background: "var(--color-accent)", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Percent size={36} color="white" />
            </div>
            <div>
              <h2 style={{ fontSize: "clamp(22px, 3vw, 28px)", color: "white", marginBottom: 10 }}>
                Få 10% rabatt på din flyttstädning!
              </h2>
              <p style={{ fontSize: 16, color: "rgba(255,255,255,0.8)", lineHeight: 1.6, marginBottom: 16 }}>
                Boka visningsstädning och flyttstädning tillsammans så får du 10% rabatt på flyttstädningen. Vi arbetar enligt en omfattande checklista för att säkerställa bästa resultat.
              </p>
              <a href="/boka" className="btn-accent" style={{ padding: "12px 28px", fontSize: 14 }}>
                Boka kombination <ArrowRight size={16} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vad ingår */}
      <section className="section-alt">
        <div className="container" style={{ maxWidth: 800 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ textAlign: "center", marginBottom: 48 }}>
            <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-primary)", marginBottom: 12, display: "block" }}>Vad vi gör</span>
            <h2 style={{ fontSize: "clamp(26px, 4vw, 38px)", marginBottom: 8 }}>Varför visningsstädning?</h2>
            <a href="/pdf/checklista-visningsstadning.pdf" target="_blank" rel="noopener noreferrer" style={{ fontSize: 14, fontWeight: 600, color: "var(--color-primary)", display: "inline-flex", alignItems: "center", gap: 6, marginBottom: 14 }}>
              Ladda ner checklista (PDF) <ArrowRight size={14} />
            </a>
          </motion.div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }} className="why-grid">
            {[
              { icon: Sparkles, title: "Bästa intrycket", desc: "Ett professionellt städat hem säljer snabbare och till bättre pris" },
              { icon: Shield, title: "Trygg kvalitet", desc: "35 års erfarenhet och samarbete med ledande mäklare" },
              { icon: Package, title: "Allt material ingår", desc: "Vi tar med all utrustning — du behöver inte förbereda något" },
            ].map((f, i) => (
              <motion.div key={f.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }}
                style={{ textAlign: "center", padding: 28, background: "white", borderRadius: 12, border: "1px solid var(--color-border)" }}>
                <div style={{ width: 48, height: 48, borderRadius: 10, background: "var(--color-primary-light)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 14px" }}>
                  <f.icon size={22} style={{ color: "var(--color-primary)" }} />
                </div>
                <h3 style={{ fontSize: 17, marginBottom: 6 }}>{f.title}</h3>
                <p style={{ fontSize: 14, color: "var(--color-muted)", lineHeight: 1.5 }}>{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tips inför */}
      <section className="section">
        <div className="container" style={{ maxWidth: 700 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ textAlign: "center", marginBottom: 36 }}>
            <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-primary)", marginBottom: 12, display: "block" }}>Tips</span>
            <h2 style={{ fontSize: "clamp(24px, 3.5vw, 32px)" }}>Att tänka på inför visningsstädning</h2>
          </motion.div>
          {[
            "Plocka undan lösa föremål, kläder och leksaker",
            "Se till att bänkytor och diskbänk är fria",
            "Flytta saker som står i vägen för fönsterputsning",
            "Skydda möbler med plast eller tidningspapper vid behov",
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
            <h2 style={{ fontSize: "clamp(26px, 4vw, 38px)" }}>Frågor och svar om visningsstädning</h2>
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
          <h2 style={{ fontSize: "clamp(26px, 4vw, 40px)", color: "white", marginBottom: 14 }}>Boka visningsstädning i Stockholm</h2>
          <p style={{ fontSize: 17, color: "rgba(255,255,255,0.8)", maxWidth: 520, margin: "0 auto 32px", lineHeight: 1.6 }}>
            Ge köparna bästa möjliga intryck. Samarbete med Notar & SKB sedan 2016.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: 14, flexWrap: "wrap" }}>
            <a className="btn-accent" href="/boka">Boka visningsstädning <ArrowRight size={17} /></a>
            <a className="btn-secondary" href="tel:08-377176" style={{ color: "white", borderColor: "rgba(255,255,255,0.25)" }}>
              <Phone size={16} /> Ring 08-37 71 76
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
