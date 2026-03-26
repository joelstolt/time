"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Phone, ChevronRight, Check, Shield, Clock, Package, Sparkles, Plus, Minus } from "lucide-react";

const features = [
  { icon: Package, title: "Allt material ingår", desc: "Vi tar med all utrustning och alla rengöringsmedel" },
  { icon: Shield, title: "5 dagars garanti", desc: "Inte nöjd? Vi åtgärdar kostnadsfritt" },
  { icon: Check, title: "RUT-avdrag 50%", desc: "Du betalar halva priset — vi sköter pappersarbetet" },
  { icon: Clock, title: "Klart på en dag", desc: "Vi anpassar teamet efter bostadens storlek" },
];

const faqs = [
  { q: "Får man använda RUT-avdrag för storstädning?", a: "Ja, storstädning räknas som hushållsnära tjänst och du får använda RUT-avdrag som skattebetald privatperson som är minst 18 år. Du kan få upp till 75 000 kr i skattereduktion per person och år." },
  { q: "Hur ofta behöver man storstäda ett hem?", a: "Vi rekommenderar att man har ett par storstädningar per året för att hålla städstandarden på en hög nivå. Många väljer att storstäda inför våren och hösten." },
  { q: "Vad ska jag tänka på innan städningen?", a: "Plocka undan lösa föremål, se till att arbetsbänkar och diskbänk är fria. Flytta större saker som står i vägen och skydda stora möbler med plast om så behövs." },
  { q: "Är Timeout Service personalen tillförlitlig?", a: "Vår personal kontrolleras mot polisens belastningsregister samt undertecknar avtal om tystnadsplikt. De bär alltid Timeout Service AB uniform och har företagslegitimation." },
  { q: "Hur lång tid tar en storstädning?", a: "Vi anpassar teamets storlek så att städningen slutförs på en arbetsdag, oavsett bostadens storlek." },
  { q: "Ingår städmaterial?", a: "Ja, vi har med oss all utrustning, rengöringsmedel och material som kan behövas. Du behöver inte förbereda något." },
  { q: "Vad händer om något skulle råka gå sönder?", a: "Timeout Service AB är ansvarsförsäkrad. Om skadan uppkommit genom att vi har varit oaktsamma står vi självklart för kostnaden." },
  { q: "Hur betalar jag?", a: "Vi skickar faktura via e-post (kostnadsfritt). Det går även bra att betala med Swish. Betalningsvillkoren är 10 dagar. Vi administrerar ditt RUT-avdrag utan extra kostnad." },
  { q: "Vad händer om jag inte är nöjd?", a: "Om det är något som vi missat i utförandet kan du alltid ta kontakt med oss så ser vi till att felet avhjälps inom vår 5-dagars garanti." },
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

export default function StorstadningContent() {
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
          <span style={{ color: "var(--color-heading)", fontWeight: 500 }}>Storstädning</span>
        </nav>
      </div>

      {/* Hero */}
      <section className="section">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }} className="services-layout">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-primary)", marginBottom: 12, display: "block" }}>Privatperson</span>
              <h1 style={{ fontSize: "clamp(32px, 5vw, 48px)", marginBottom: 20, lineHeight: 1.1 }}>
                Storstädning i Stockholm
              </h1>
              <p style={{ fontSize: 17, color: "var(--color-body)", lineHeight: 1.7, marginBottom: 16 }}>
                När vårsolen skiner genom fönstret ser man plötsligt hur dammigt och smutsigt allting är. Stressa inte — ta en &ldquo;Timeout&rdquo; och vi gör jobbet åt dig!
              </p>
              <p style={{ fontSize: 17, color: "var(--color-body)", lineHeight: 1.7, marginBottom: 32 }}>
                Vår storstädning är en komplett genomgång av hela hemmet, från golv till tak. Vi tar med all utrustning och alla rengöringsmedel. Du behöver inte förbereda något — bara njut av resultatet.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a href="/boka" className="btn-primary">Boka storstädning</a>
                <a href="tel:08-377176" className="btn-secondary"><Phone size={16} /> 08-37 71 76</a>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
              <img src="/images/staff-living-2.jpg" alt="Storstädning Stockholm — Timeout Service" style={{ width: "100%", borderRadius: 12, aspectRatio: "4/3", objectFit: "cover" }} />
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

      {/* Vad ingår */}
      <section className="section">
        <div className="container" style={{ maxWidth: 800 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ textAlign: "center", marginBottom: 48 }}>
            <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-primary)", marginBottom: 12, display: "block" }}>Få ett helt nytt hem</span>
            <h2 style={{ fontSize: "clamp(26px, 4vw, 38px)", marginBottom: 14 }}>Vad ingår i storstädning?</h2>
            <p style={{ fontSize: 17, color: "var(--color-muted)", maxWidth: 600, margin: "0 auto", lineHeight: 1.6, marginBottom: 12 }}>
              En storstädning innebär en grundlig genomgång av hela hemmet. Här är vad som ingår — och du kan alltid lägga till extra tjänster.
            </p>
            <a href="/pdf/checklista-storstadning.pdf" target="_blank" rel="noopener noreferrer" style={{ fontSize: 14, fontWeight: 600, color: "var(--color-primary)", display: "inline-flex", alignItems: "center", gap: 6 }}>
              Ladda ner checklista (PDF) <ArrowRight size={14} />
            </a>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }} className="services-layout">
            {[
              "Dammsugning av alla golv, lister och mattor",
              "Fuktmoppning av alla golv",
              "Avtorkning av alla ytor och fria hyllor",
              "Rengöring av kök — spis, bänk, kakel, vitvaror",
              "Badrum — sanitetsporslin, kakel, dusch, speglar",
              "Fönsterbrädor dammtorkas",
              "Dörrar och karmar avfläckas",
              "Speglar och glasytor putsas",
              "Kontakter och strömbrytare avtorkas",
              "Lampskärmar dammas",
              "Snickerier avfläckas",
              "Papperskorgar töms",
            ].map((item) => (
              <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: 10, padding: "12px 16px", background: "var(--color-bg-alt)", borderRadius: 8, fontSize: 15, color: "var(--color-body)" }}>
                <Check size={18} style={{ color: "var(--color-primary)", flexShrink: 0, marginTop: 2 }} />
                {item}
              </div>
            ))}
          </motion.div>

          {/* Extra tillval */}
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
            style={{ marginTop: 32, padding: 24, background: "var(--color-accent-light)", border: "1px solid rgba(222,160,30,0.2)", borderRadius: 12, display: "flex", alignItems: "flex-start", gap: 14 }}>
            <Sparkles size={20} style={{ color: "var(--color-accent)", flexShrink: 0, marginTop: 2 }} />
            <div>
              <div style={{ fontSize: 15, fontWeight: 700, color: "var(--color-heading)", marginBottom: 4 }}>Extra tillval</div>
              <div style={{ fontSize: 14, color: "var(--color-muted)", lineHeight: 1.6 }}>
                Balkong, fönsterputs, ugnsrengöring, kamin/öppen spis, mattvätt, ångmaskin och städ på helg/röd dag. Använd vår priskalkylator för att se tilläggspriser.
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* RUT-info */}
      <section className="section-alt">
        <div className="container" style={{ maxWidth: 700 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }} className="services-layout">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 style={{ fontSize: "clamp(24px, 3.5vw, 32px)", marginBottom: 16 }}>Halva priset med RUT-avdrag</h2>
              <p style={{ fontSize: 16, color: "var(--color-body)", lineHeight: 1.7, marginBottom: 16 }}>
                Storstädning räknas som hushållsnära tjänst och ger dig rätt till 50% skattereduktion — upp till 75 000 kr per person och år.
              </p>
              <p style={{ fontSize: 16, color: "var(--color-body)", lineHeight: 1.7 }}>
                Vi sköter allt pappersarbete. Du betalar bara halva priset direkt på fakturan.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}
              style={{ background: "var(--color-primary)", borderRadius: 16, padding: 32, textAlign: "center" }}>
              <div style={{ fontSize: 48, fontWeight: 800, color: "var(--color-accent)", fontFamily: "var(--font-body)" }}>50%</div>
              <div style={{ fontSize: 16, color: "rgba(255,255,255,0.8)", marginTop: 4 }}>skattereduktion</div>
              <div style={{ fontSize: 14, color: "rgba(255,255,255,0.5)", marginTop: 8 }}>Upp till 75 000 kr/person/år</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container" style={{ maxWidth: 750 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ textAlign: "center", marginBottom: 48 }}>
            <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-primary)", marginBottom: 12, display: "block" }}>Vanliga frågor</span>
            <h2 style={{ fontSize: "clamp(26px, 4vw, 38px)" }}>Frågor och svar om storstädning</h2>
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
          <h2 style={{ fontSize: "clamp(26px, 4vw, 40px)", color: "white", marginBottom: 14 }}>
            Boka storstädning i Stockholm
          </h2>
          <p style={{ fontSize: 17, color: "rgba(255,255,255,0.8)", maxWidth: 480, margin: "0 auto 32px", lineHeight: 1.6 }}>
            Allt material ingår, 5 dagars garanti. Kontakta oss idag.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: 14, flexWrap: "wrap" }}>
            <a className="btn-accent" href="/boka">Boka storstädning <ArrowRight size={17} /></a>
            <a className="btn-secondary" href="tel:08-377176" style={{ color: "white", borderColor: "rgba(255,255,255,0.25)" }}>
              <Phone size={16} /> Ring 08-37 71 76
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
