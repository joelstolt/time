"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Phone, ChevronRight, Check, Sparkles, Droplets, Flame, ShieldCheck, Plus, Minus, Camera } from "lucide-react";
import BeforeAfterGallery from "./BeforeAfterGallery";

const priser = [
  { storlek: "1–10 m²", pris: "ca 1 200 kr" },
  { storlek: "11–15 m²", pris: "ca 1 600 kr" },
  { storlek: "16–20 m²", pris: "ca 2 200 kr" },
];

const tillval = [
  { namn: "Djuprengöring fogar, kalk, mögel eller rost", pris: "400 kr/tim" },
  { namn: "Ångmaskin (industriell, 8 bar, upp till 200°C)", pris: "550 kr" },
];

const ingarLista = [
  "Kakel och klinker avkalkas och avtorkas",
  "Fogar rengörs",
  "Sanitetsporslin rengörs grundligt",
  "Golvbrunn rensas",
  "Speglar putsas",
  "Blandare och duschmunstycke avkalkas",
  "Duschkabin och duschvägg rengörs",
  "Badkar rengörs in- och utvändigt",
  "Badrumsskåp avtorkas",
  "Golv skuras och moppas",
  "Tak och väggar avtorkas",
  "Alla ytor från golv till tak",
];

const faqs = [
  { q: "Får man använda RUT-avdrag för badrumsstädning?", a: "Ja, du får använda RUT-avdrag som skattebetald privatperson som är minst 18 år. Du behöver vara bosatt i Sverige och bo i bostaden där tjänsten utförs. Du får 50% skattereduktion." },
  { q: "Hur gör jag för att få RUT-avdrag?", a: "Du behöver inte göra någonting. Vi skickar alltid faktura med RUT-avdraget förberett. Vi sköter allt pappersarbete åt dig." },
  { q: "Vad ingår i ångmaskinstädning?", a: "Industriell ånga med 8 bars tryck och upp till 200°C löser effektivt ingrodd smuts, bakterier och fett — helt utan starka kemikalier. Perfekt för fogar, kakel och svåråtkomliga ytor." },
  { q: "Är Timeout Service personalen tillförlitlig?", a: "Vår personal kontrolleras mot polisens belastningsregister samt undertecknar avtal om tystnadsplikt. De bär alltid Timeout Service AB uniform och har företagslegitimation." },
  { q: "Måste jag ha egen utrustning?", a: "Nej, vi tar med all utrustning och alla rengöringsmedel som behövs." },
  { q: "Vad händer om badrummet är hårt nedsmutsad?", a: "Avtalat pris gäller för normalsmutsat boende. Vid kraftig nedsmutsning kommuniceras extra tid under pågående städning. Vi rekommenderar att boka storstädning istället om badrummet är mycket eftersatt." },
  { q: "Måste jag vara hemma?", a: "Vi uppskattar att du finns på plats för att släppa in oss, men du behöver inte vara hemma under hela städningen." },
  { q: "Hur lång tid tar badrumsstädning?", a: "Vi ser alltid till att ha tillräckligt med personal för att slutföra städningen inom en arbetsdag." },
  { q: "Om jag vill avboka?", a: "Kontakta oss omedelbart. Städningen debiteras fullt om avbokning inte sker innan planerat datum." },
  { q: "Vad händer om jag inte är nöjd?", a: "Kontakta oss inom 48 timmar efter slutfört arbete så åtgärdar vi eventuella brister kostnadsfritt." },
  { q: "Hur betalar jag?", a: "Vi skickar faktura via e-post (kostnadsfritt). Det går även bra med Swish. Betalningsvillkor 10 dagar. Vi administrerar RUT-avdraget utan extra kostnad." },
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

export default function BadrumsstadningContent() {
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
          <span style={{ color: "var(--color-heading)", fontWeight: 500 }}>Badrumsstädning</span>
        </nav>
      </div>

      {/* Hero */}
      <section className="section">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }} className="services-layout">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-primary)", marginBottom: 12, display: "block" }}>Privatperson</span>
              <h1 style={{ fontSize: "clamp(32px, 5vw, 48px)", marginBottom: 20, lineHeight: 1.1 }}>
                Badrumsstädning i Stockholm
              </h1>
              <p style={{ fontSize: 17, color: "var(--color-body)", lineHeight: 1.7, marginBottom: 16 }}>
                Vi gör ditt badrum glänsande rent! Från golv till tak med noga utvalda rengöringsmedel — inklusive rengöring av kakelfogar och svåråtkomliga ytor där smuts samlas.
              </p>
              <p style={{ fontSize: 15, color: "var(--color-muted)", lineHeight: 1.6, marginBottom: 32 }}>
                Om det börjar uppstå en rödaktig ton på kakelfogarna är det hög tid att göra en rejäl rengöring. Den rödaktiga beläggningen består i regel av bakterier och rödmögel.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a href="/boka" className="btn-primary">Boka badrumsstädning</a>
                <a href="tel:08-377176" className="btn-secondary"><Phone size={16} /> 08-37 71 76</a>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
              <img src="/images/badrum-hero.jpg" alt="Timeout Service rengör badrum med industriell ångmaskin — Stockholm" style={{ width: "100%", borderRadius: 12, aspectRatio: "3/4", objectFit: "cover", boxShadow: "0 20px 60px rgba(0,0,0,0.12)" }} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* YouTube video — direkt efter hero på WordPress-sidan */}
      <section className="section-alt" style={{ paddingTop: 40, paddingBottom: 40 }}>
        <div className="container" style={{ maxWidth: 900 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{ position: "relative", paddingBottom: "56.25%", height: 0, borderRadius: 12, overflow: "hidden", boxShadow: "0 10px 40px rgba(0,0,0,0.08)" }}
          >
            <iframe
              src="https://www.youtube-nocookie.com/embed/SBxRRVy_E70"
              title="Timeout Service — Badrumsstädning med ångmaskin"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
              style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: 0 }}
            />
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="section">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }} className="why-grid">
            {[
              { icon: Droplets, title: "Kalk & mögel", desc: "Vi tar bort kalk, mögel och rost från kakel, fogar och sanitetsporslin" },
              { icon: Flame, title: "Industriell ångmaskin", desc: "8 bars tryck, upp till 200°C — löser ingrodd smuts utan starka kemikalier" },
              { icon: ShieldCheck, title: "RUT-avdrag 50%", desc: "Du betalar halva priset. Vi sköter allt pappersarbete åt dig" },
            ].map((f, i) => (
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

      {/* Priser — 2-kolumn layout (text vänster, bild höger) som WordPress */}
      <section className="section">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 64, alignItems: "start" }} className="services-layout">
            {/* Text + priser vänster */}
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-primary)", marginBottom: 12, display: "block" }}>Priser badrumsstädning</span>
              <h2 style={{ fontSize: "clamp(26px, 4vw, 38px)", marginBottom: 16 }}>Våra priser</h2>
              <p style={{ fontSize: 16, color: "var(--color-body)", lineHeight: 1.7, marginBottom: 24 }}>
                Priserna varierar beroende på badrummets area och grundpris för städning utan tillägg är:
              </p>

              {/* Pristabell */}
              <div style={{ borderRadius: 12, overflow: "hidden", border: "1px solid var(--color-border)", marginBottom: 28 }}>
                <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 16 }}>
                  <thead>
                    <tr style={{ background: "var(--color-primary)", color: "white" }}>
                      <th style={{ padding: "14px 20px", textAlign: "left", fontWeight: 600 }}>Badrummets storlek</th>
                      <th style={{ padding: "14px 20px", textAlign: "right", fontWeight: 600 }}>Pris efter RUT</th>
                    </tr>
                  </thead>
                  <tbody>
                    {priser.map((row, i) => (
                      <tr key={row.storlek} style={{ background: i % 2 === 0 ? "white" : "var(--color-bg-alt)" }}>
                        <td style={{ padding: "14px 20px", fontWeight: 500, color: "var(--color-heading)" }}>{row.storlek}</td>
                        <td style={{ padding: "14px 20px", textAlign: "right", fontWeight: 700, color: "var(--color-primary)", fontSize: 17 }}>{row.pris}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Tillägg */}
              <h3 style={{ fontSize: 18, marginBottom: 12 }}>Tillägg:</h3>
              <div style={{ display: "grid", gap: 8, marginBottom: 24 }}>
                {tillval.map((t) => (
                  <div key={t.namn} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 16px", background: "var(--color-bg-alt)", borderRadius: 8, fontSize: 15 }}>
                    <span style={{ color: "var(--color-body)" }}>{t.namn}</span>
                    <span style={{ fontWeight: 700, color: "var(--color-primary)", whiteSpace: "nowrap", marginLeft: 12 }}>{t.pris}</span>
                  </div>
                ))}
              </div>

              <p style={{ fontSize: 15, color: "var(--color-muted)", lineHeight: 1.7, marginBottom: 20 }}>
                Exakt pris kommer vi överens om på plats vid det inledande besöket där även tillval och extra tjänster kan diskuteras. Använd <a href="#priskalkylator" style={{ color: "var(--color-primary)", fontWeight: 600 }}>priskalkylatorn</a> på startsidan för en prisidé, eller <a href="/kontakt" style={{ color: "var(--color-primary)", fontWeight: 600 }}>kontakta oss</a> för att boka ett besök.
              </p>

              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
                style={{ padding: 20, background: "var(--color-primary-light, rgba(0,0,0,0.03))", border: "1px solid rgba(0,0,0,0.08)", borderRadius: 12, display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 20 }}>
                <Camera size={18} style={{ color: "var(--color-primary)", flexShrink: 0, marginTop: 2 }} />
                <p style={{ fontSize: 14, color: "var(--color-muted)", lineHeight: 1.6 }}>
                  <strong style={{ color: "var(--color-heading)" }}>Viktigt:</strong> För att kunna ge en korrekt prisuppskattning behöver vi bilder på badrummet. Skicka gärna foton via <a href="/kontakt" style={{ color: "var(--color-primary)", fontWeight: 600 }}>kontaktformuläret</a> eller mejla dem till <a href="mailto:info@timeoutservice.se" style={{ color: "var(--color-primary)", fontWeight: 600 }}>info@timeoutservice.se</a> — gärna översikt samt närbilder på fogar, duschhörna och toalett.
                </p>
              </motion.div>

              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}
                style={{ padding: 20, background: "var(--color-accent-light)", border: "1px solid rgba(222,160,30,0.2)", borderRadius: 12, display: "flex", alignItems: "flex-start", gap: 12 }}>
                <Sparkles size={18} style={{ color: "var(--color-accent)", flexShrink: 0, marginTop: 2 }} />
                <p style={{ fontSize: 14, color: "var(--color-muted)", lineHeight: 1.6 }}>
                  <strong style={{ color: "var(--color-heading)" }}>Tips:</strong> Kombinera badrumsstädning med köksstädning och få ett komplett resultat.
                </p>
              </motion.div>
            </motion.div>

            {/* Bild höger — sticky på desktop */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              style={{ position: "sticky", top: 100 }}
              className="priser-sticky-image"
            >
              <img
                src="/images/badrum-man.jpg"
                alt="Timeout Service städar duschkabin — professionell badrumsstädning"
                loading="lazy"
                style={{ width: "100%", borderRadius: 16, aspectRatio: "3/4", objectFit: "cover", boxShadow: "0 20px 60px rgba(0,0,0,0.12)" }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vad ingår */}
      <section className="section-alt">
        <div className="container" style={{ maxWidth: 800 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ textAlign: "center", marginBottom: 40 }}>
            <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-primary)", marginBottom: 12, display: "block" }}>Checklista</span>
            <h2 style={{ fontSize: "clamp(26px, 4vw, 38px)", marginBottom: 8 }}>Vad ingår i badrumsstädningen?</h2>
            <a href="/pdf/checklista-badrum.pdf" target="_blank" rel="noopener noreferrer" style={{ fontSize: 14, fontWeight: 600, color: "var(--color-primary)", display: "inline-flex", alignItems: "center", gap: 6 }}>
              Ladda ner checklista (PDF) <ArrowRight size={14} />
            </a>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }} className="services-layout">
            {ingarLista.map((item) => (
              <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: 10, padding: "12px 16px", background: "white", borderRadius: 8, fontSize: 15, color: "var(--color-body)" }}>
                <Check size={18} style={{ color: "var(--color-primary)", flexShrink: 0, marginTop: 2 }} />
                {item}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container" style={{ maxWidth: 750 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ textAlign: "center", marginBottom: 48 }}>
            <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-primary)", marginBottom: 12, display: "block" }}>Vanliga frågor</span>
            <h2 style={{ fontSize: "clamp(26px, 4vw, 38px)" }}>Frågor och svar om badrumsstädning</h2>
          </motion.div>
          <div style={{ borderTop: "1px solid var(--color-border)" }}>
            {faqs.map((faq, i) => (
              <FAQItem key={i} faq={faq} isOpen={openFaq === i} onClick={() => setOpenFaq(openFaq === i ? -1 : i)} />
            ))}
          </div>
        </div>
      </section>

      {/* Före & efter — efter FAQ som på WordPress-sidan */}
      <BeforeAfterGallery />

      {/* CTA */}
      <section style={{ background: "var(--color-primary)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.05, backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 30px, rgba(255,255,255,0.5) 30px, rgba(255,255,255,0.5) 31px)" }} />
        <div className="container" style={{ padding: "80px 20px", textAlign: "center", position: "relative", zIndex: 1 }}>
          <h2 style={{ fontSize: "clamp(26px, 4vw, 40px)", color: "white", marginBottom: 14 }}>Boka badrumsstädning i Stockholm</h2>
          <p style={{ fontSize: 17, color: "rgba(255,255,255,0.8)", maxWidth: 480, margin: "0 auto 32px", lineHeight: 1.6 }}>
            Djuprengöring från 1 200 kr efter RUT-avdrag. Ångmaskin tillgänglig.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: 14, flexWrap: "wrap" }}>
            <a className="btn-accent" href="/boka">Boka badrumsstädning <ArrowRight size={17} /></a>
            <a className="btn-secondary" href="tel:08-377176" style={{ color: "white", borderColor: "rgba(255,255,255,0.25)" }}>
              <Phone size={16} /> Ring 08-37 71 76
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
