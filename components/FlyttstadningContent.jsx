"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Phone, ChevronRight, Check, Shield, Clock, Package, Award, Sparkles, Plus, Minus, Star, Users, Leaf, BadgeCheck } from "lucide-react";

/* ──── DATA ──── */

const checklistKok = [
  "Diskbänk, bänkytor, blandare, undersidor och avloppsrör rengörs",
  "Kakel ovanför diskbänk och arbetsyta/spis rengörs",
  "Kyl och frys — in- och utvändigt",
  "Skåp invändigt torkas av (när de är tomma)",
  "Sockel på underskåp rengörs",
  "Ugn med plåtar och galler rengörs — spis dras ut om möjligt",
  "Mikrovågsugn in- och utvändigt",
  "Fläktkåpa utsida och undersida avtorkas",
  "Diskmaskin in- och utvändigt",
];

const checklistBadrum = [
  "Badkar avkalkas och rengörs",
  "Badrumsskåp avtorkas",
  "Duschkabin, blandare, slang och munstycke avkalkas",
  "Kakel/klinker avkalkas och avtorkas",
  "VVS-rör avtorkas",
  "Toalett rengörs in- och utvändigt",
  "Handfat avtorkas inklusive undersida",
  "Badrumsväggar avtorkas",
  "Krokar och handdukshängare avtorkas",
  "Tvättmaskin och torktumlare avtorkas",
  "Golvbrunn rengörs",
];

const checklistRum = [
  "Kontakter, strömbrytare och fast belysning avtorkas",
  "Dörrar, karmar och handtag avtorkas",
  "Element avtorkas och bakom element borstas",
  "Garderober dammsugs och torkas av",
  "Golv och mattor dammsugs och fuktmoppas",
  "Socklar dammsugs och fuktmoppas",
  "Speglar putsas",
  "Spindelväv avlägsnas från tak och väggar",
  "Ledstänger och trappräcken avtorkas",
  "Trappor sopas, dammsugs och fuktmoppas",
  "Ventiler utsida avtorkas",
  "Väggpaneler avtorkas",
  "Ytterdörr in- och utsida avtorkas",
  "Glasade dörrar putsas",
];

const checklistFonster = [
  "Fönster putsas på alla sidor (standard inåtgående, 4-sidig, 2-glas)",
  "Fönsterbräda, karm, nisch och bleck rengörs",
];

const tillval = [
  { namn: "Möblerad bostad", pris: "+500 kr" },
  { namn: "Extra kyl/frys", pris: "+225 kr" },
  { namn: "Sanera ugn", pris: "+400 kr/st" },
  { namn: "Halvinglasad balkong", pris: "från 350 kr" },
  { namn: "Helinglasad balkong", pris: "från 500 kr" },
  { namn: "Tredje glasruta", pris: "+30 kr/ruta" },
  { namn: "Utåtgående fönster", pris: "+20 kr/fönster" },
  { namn: "Spröjsade fönster", pris: "+30 kr/fönster" },
  { namn: "Lördag", pris: "+800 kr" },
  { namn: "Söndag / röd dag", pris: "+1 000 kr" },
];

const ejIngar = [
  "Tvätt av väggar/tak — 250 kr/tim",
  "Lös inredning (möbler, garderober, lampor) — 250 kr/tim",
  "Golvbehandling (vaxning/polering) — offert",
  "Garage — +300 kr",
  "Vind/förråd — +250 kr",
  "Tavelhålsborttagning — 250 kr/tim",
  "Rensning av vattenlås — 300 kr",
  "Balkong djuprengöring — +250 kr/balkong",
  "Trädgård/gård — 250 kr/tim/person",
  "Skurmaskin (hårt nedsmutsade golv) — 250 kr/tim",
  "Sopkörning — 250 kr/tim + 600 kr miljöstation",
  "Öppen spis/kakelugn — +300 kr/st",
  "Fönsterputs över 2,3 meter — 250 kr/tim",
];

const usps = [
  { icon: Shield, label: "10 dagars garanti" },
  { icon: Sparkles, label: "Fönsterputs ingår" },
  { icon: Package, label: "Allt material ingår" },
  { icon: BadgeCheck, label: "Inga dolda avgifter" },
  { icon: Users, label: "Egen personal" },
  { icon: Leaf, label: "Miljömärkta produkter" },
  { icon: Award, label: "UC GOLD kreditvärdighet" },
  { icon: Check, label: "Kollektivavtal" },
];

const foreStadning = [
  "Bostaden ska vara tom på tillhörigheter",
  "Kyl och frys ska vara avstängd, frysen avfrostad",
  "Dra ut kyl, frys, spis, tvättmaskin och tork från väggen",
  "Rengör persienner",
  "Skruva loss ugnsglas (dubbelglas demonteras av kund)",
];

const faqs = [
  { q: "Får man använda RUT-avdrag för flyttstädning?", a: "Ja, du får använda RUT-avdrag som skattebetald privatperson som är minst 18 år vid beskattningsårets utgång. Du behöver vara bosatt i Sverige och bo helt eller delvis i bostaden. Dödsbo kan bara få RUT-avdrag på uppdrag utförda före dödsfallet." },
  { q: "Vad ingår i priset?", a: "Resa, material, utrustning, fönsterputs, arbetsgaranti och RUT-administration ingår i priset." },
  { q: "Är det alltid samma personal som kommer?", a: "Vår personal kontrolleras mot polisens belastningsregister samt undertecknar avtal om tystnadsplikt. De bär alltid Timeout Service AB uniform och har företagslegitimation." },
  { q: "När bör jag boka?", a: "Vi rekommenderar att boka 10–15 dagar innan nyckelöverlämning." },
  { q: "Måste jag ha utrustning och rengöringsmedel?", a: "Nej, vi tar med all utrustning och alla material som behövs." },
  { q: "Måste jag vara hemma under städningen?", a: "Nej, men vi uppskattar att du finns på plats för att släppa in oss." },
  { q: "Hur lång tid tar en flyttstädning?", a: "Vi ser alltid till att vi har tillräckligt med personal för att slutföra städningen under en arbetsdag." },
  { q: "Vad händer om jag flyttar samma dag?", a: "Töm kök och badrum först. Vi börjar där eftersom dessa utrymmen tar längst tid." },
  { q: "Finns det garanti på flyttstädningen?", a: "Ja, vi har 10 dagars nöjd-kund-garanti. Eventuella brister som noteras vid första besiktning åtgärdas kostnadsfritt." },
  { q: "Hur betalar jag?", a: "Vi skickar faktura via e-post (kostnadsfritt). Det går även bra med Swish. Betalningsvillkor 10 dagar. Vi administrerar RUT-avdraget utan extra kostnad." },
  { q: "Vad händer om något går sönder?", a: "Timeout Service AB är ansvarsförsäkrad. Om skadan uppkommit genom vår oaktsamhet står vi för kostnaden." },
];

/* ──── HELPERS ──── */

function ChecklistBlock({ title, items }) {
  return (
    <div style={{ marginBottom: 28 }}>
      <h3 style={{ fontSize: 18, marginBottom: 14, color: "var(--color-primary)" }}>{title}</h3>
      <ul style={{ listStyle: "none", display: "grid", gap: 6 }}>
        {items.map((item) => (
          <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: 14, color: "var(--color-body)", lineHeight: 1.5 }}>
            <Check size={16} style={{ color: "var(--color-primary)", flexShrink: 0, marginTop: 2 }} />
            {item}
          </li>
        ))}
      </ul>
    </div>
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

/* ──── COMPONENT ──── */

export default function FlyttstadningContent() {
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
          <span style={{ color: "var(--color-heading)", fontWeight: 500 }}>Flyttstädning</span>
        </nav>
      </div>

      {/* Hero */}
      <section className="section">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }} className="services-layout">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-primary)", marginBottom: 12, display: "block" }}>Privatperson</span>
              <h1 style={{ fontSize: "clamp(32px, 5vw, 48px)", marginBottom: 20, lineHeight: 1.1 }}>
                Flyttstädning i Stockholm
              </h1>
              <p style={{ fontSize: 17, color: "var(--color-body)", lineHeight: 1.7, marginBottom: 16 }}>
                Flyttstädning är något som måste bli gjort grundligt och fackmannamässigt. Vi arbetar enligt mäklarsamfundets riktlinjer och har över 35 års erfarenhet.
              </p>
              <p style={{ fontSize: 15, color: "var(--color-muted)", lineHeight: 1.6, marginBottom: 32 }}>
                Vi samarbetar med NOTAR och SKB och har städat tusentals kvadratmeter sedan 2016. Fönsterputs ingår alltid i priset.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a href="/boka" className="btn-primary">Boka flyttstädning</a>
                <a href="tel:08-377176" className="btn-secondary"><Phone size={16} /> 08-37 71 76</a>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
              <img src="/images/flytt-hero.jpg" alt="Flyttstädning Stockholm — Timeout Service" style={{ width: "100%", borderRadius: 12, aspectRatio: "4/3", objectFit: "cover", boxShadow: "0 20px 60px rgba(0,0,0,0.12)" }} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Notar quote */}
      <section className="section-alt" style={{ paddingTop: 60, paddingBottom: 60 }}>
        <div className="container" style={{ maxWidth: 700, textAlign: "center" }}>
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <div style={{ display: "flex", justifyContent: "center", gap: 2, marginBottom: 16 }}>
              {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="var(--color-accent)" color="var(--color-accent)" />)}
            </div>
            <p style={{ fontSize: 18, fontStyle: "italic", color: "var(--color-body)", lineHeight: 1.7, marginBottom: 12, fontFamily: "var(--font-heading)" }}>
              &ldquo;Vi rekommenderar Timeout Service för alla våra kunder som behöver flyttstädning.&rdquo;
            </p>
            <p style={{ fontSize: 14, fontWeight: 600, color: "var(--color-primary)" }}>— Notar Mäklare</p>
          </motion.div>
        </div>
      </section>

      {/* Checklista */}
      <section className="section">
        <div className="container" style={{ maxWidth: 900 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ textAlign: "center", marginBottom: 48 }}>
            <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-primary)", marginBottom: 12, display: "block" }}>Checklista</span>
            <h2 style={{ fontSize: "clamp(26px, 4vw, 38px)", marginBottom: 14 }}>Vad ingår i flyttstädningen?</h2>
            <p style={{ fontSize: 17, color: "var(--color-muted)", maxWidth: 600, margin: "0 auto", lineHeight: 1.6 }}>
              Vi arbetar enligt mäklarsamfundets riktlinjer. Här är vad som ingår — och du kan alltid lägga till extra tjänster.
            </p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px 48px", background: "white", padding: "clamp(24px, 4vw, 40px)", borderRadius: 16, border: "1px solid var(--color-border)" }} className="services-layout">
            <ChecklistBlock title="Kök" items={checklistKok} />
            <ChecklistBlock title="Badrum" items={checklistBadrum} />
            <ChecklistBlock title="Rum & sovrum" items={checklistRum} />
            <ChecklistBlock title="Fönster (ingår i priset)" items={checklistFonster} />
          </motion.div>
        </div>
      </section>

      {/* Tillval + Ej ingår */}
      <section className="section-alt">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40 }} className="services-layout">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <h2 style={{ fontSize: "clamp(22px, 3vw, 28px)", marginBottom: 20 }}>Tillval</h2>
              <div style={{ display: "grid", gap: 8 }}>
                {tillval.map((t) => (
                  <div key={t.namn} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "12px 16px", background: "white", borderRadius: 8, fontSize: 14 }}>
                    <span style={{ color: "var(--color-body)" }}>{t.namn}</span>
                    <span style={{ fontWeight: 600, color: "var(--color-heading)", whiteSpace: "nowrap", marginLeft: 12 }}>{t.pris}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
              <h2 style={{ fontSize: "clamp(22px, 3vw, 28px)", marginBottom: 20 }}>Beställs separat</h2>
              <div style={{ display: "grid", gap: 6 }}>
                {ejIngar.map((item) => (
                  <div key={item} style={{ padding: "10px 16px", background: "white", borderRadius: 8, fontSize: 14, color: "var(--color-body)" }}>
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Inför städning */}
      <section className="section">
        <div className="container" style={{ maxWidth: 700 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ textAlign: "center", marginBottom: 36 }}>
            <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-primary)", marginBottom: 12, display: "block" }}>Tips</span>
            <h2 style={{ fontSize: "clamp(24px, 3.5vw, 32px)" }}>Att tänka på inför städningen</h2>
          </motion.div>
          {foreStadning.map((item, i) => (
            <div key={i} style={{ display: "flex", gap: 14, padding: "14px 0", borderBottom: i < foreStadning.length - 1 ? "1px solid var(--color-border-light)" : "none" }}>
              <div style={{ width: 28, height: 28, borderRadius: "50%", background: "var(--color-accent)", color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 700, flexShrink: 0 }}>{i + 1}</div>
              <span style={{ fontSize: 15, color: "var(--color-body)", lineHeight: 1.5 }}>{item}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Garanti + Varför oss */}
      <section className="section-alt">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }} className="services-layout">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 style={{ fontSize: "clamp(24px, 3.5vw, 32px)", marginBottom: 16 }}>Garanti och säkerhet</h2>
              <p style={{ fontSize: 16, color: "var(--color-body)", lineHeight: 1.7, marginBottom: 16 }}>
                Som kund ska du känna dig säker med oss. Vi ger skriftlig garanti på att arbetet utförs fackmannamässigt. Du har <strong>10 dagars nöjd-kund-garanti</strong> efter slutfört arbete.
              </p>
              <p style={{ fontSize: 16, color: "var(--color-body)", lineHeight: 1.7 }}>
                Eventuella brister som noteras vid första besiktning åtgärdas kostnadsfritt. Timeout Service AB är ansvarsförsäkrad.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
              <h3 style={{ fontSize: 20, marginBottom: 20 }}>Varför anlita oss?</h3>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                {usps.map((usp) => (
                  <div key={usp.label} style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 14px", background: "var(--color-primary-light)", borderRadius: 8, fontSize: 13, fontWeight: 600, color: "var(--color-primary)" }}>
                    <usp.icon size={16} /> {usp.label}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sanering */}
      <section className="section">
        <div className="container" style={{ maxWidth: 700 }}>
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            style={{ padding: 28, background: "var(--color-accent-light)", border: "1px solid rgba(222,160,30,0.2)", borderRadius: 12, display: "flex", alignItems: "flex-start", gap: 14 }}>
            <Sparkles size={20} style={{ color: "var(--color-accent)", flexShrink: 0, marginTop: 2 }} />
            <div>
              <div style={{ fontSize: 16, fontWeight: 700, color: "var(--color-heading)", marginBottom: 6 }}>Sanering</div>
              <p style={{ fontSize: 15, color: "var(--color-muted)", lineHeight: 1.6 }}>
                Om det förekommit rökning i bostaden, längre tids vanvård eller kraftig nedsmutsning kan städningen helt eller delvis klassas som sanering. Meddela oss innan för att få korrekt prissättning. Om det konstateras på plats att det krävs sanering kontaktar vi dig angående merkostnad.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-alt">
        <div className="container" style={{ maxWidth: 750 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ textAlign: "center", marginBottom: 48 }}>
            <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-primary)", marginBottom: 12, display: "block" }}>Vanliga frågor</span>
            <h2 style={{ fontSize: "clamp(26px, 4vw, 38px)" }}>Frågor och svar om flyttstädning</h2>
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
          <h2 style={{ fontSize: "clamp(26px, 4vw, 40px)", color: "white", marginBottom: 14 }}>Boka flyttstädning i Stockholm</h2>
          <p style={{ fontSize: 17, color: "rgba(255,255,255,0.8)", maxWidth: 520, margin: "0 auto 32px", lineHeight: 1.6 }}>
            Fönsterputs ingår, 10 dagars garanti, allt material ingår. Boka 10–15 dagar innan nyckelöverlämning.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: 14, flexWrap: "wrap" }}>
            <a className="btn-accent" href="/boka">Boka flyttstädning <ArrowRight size={17} /></a>
            <a className="btn-secondary" href="tel:08-377176" style={{ color: "white", borderColor: "rgba(255,255,255,0.25)" }}>
              <Phone size={16} /> Ring 08-37 71 76
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
