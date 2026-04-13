"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Phone,
  ChevronRight,
  Check,
  SmilePlus,
  Headset,
  Clock,
  UserCheck,
  Plus,
  Minus,
  Sparkles,
  Home,
  ClipboardList,
  FileText,
  CalendarCheck,
  Package,
  Play,
} from "lucide-react";

/* ──────────────────────── DATA ──────────────────────── */

const checklistRum = [
  "Glas avfläckas, samtliga speglar putsas",
  "Dammsugning av golv, lister, mattor samt stoppade och klädda möbler",
  "Strömbrytare och kontakter avtorkas",
  "Hyllor dammas",
  "Dammtorkning av fönsterbrädor och alla fria ytor",
  "Borttagning av fläckar på dörrar och karmar",
  "Tavelramar och väggdekorationer i ståhöjd dammas av",
  "Lampskärmar i arbetshöjd dammas av",
  "Snickerier avfläckas",
  "Bord och stolar avtorkas, inklusive ben",
  "Små mattor tas ut och skakas",
  "Golv fuktmoppas",
  "Tömning av papperskorgar",
];

const checklistBadrum = [
  "Torkning av fläckar på badrumsskåp och vitvaror",
  "Badkar invändigt samt synlig utsida",
  "Kakel och väggar avfläckas vid behov",
  "Duschkabin, glas och lättåtkomliga skarvar",
  "Speglar avfläckas",
  "Tvättmaskin och torktumlare — synlig utsida",
  "Sanitära enheter rengörs",
  "Blandare avtorkas",
  "Botten på torkskåp dammsugs/torkas av",
];

const checklistKok = [
  "Köksbänk, diskbänk, spis och kakelvägg rengörs",
  "In- och utvändig rengöring av sopförvaringsyta",
  "Avtorkning av fläkt (ej filter), köksluckor och utsida av vitvaror",
  "In- och utvändig rengöring av mikrovågsugn",
  "Kyl/frys synlig utsida",
  "Diskmaskin utsida, kant på insidan",
  "Blandsopor/kompost töms",
  "Övriga köksredskap avtorkas (kaffebryggare, brödrost etc.)",
  "Golv fuktmoppas",
];

const checklistSovrum = [
  "Sänggavel dammsugs/avtorkas",
  "Damm torkas på alla bords- och arbetsytor",
  "Dammsugning av golv och mattor",
  "Fuktmoppning av golv",
  "Speglar och glasytor tvättas (utom fönster)",
];

const tillagg = [
  "Bädda sängar med nya sängkläder",
  "Tvätt, strykning och vikning av kläder",
  "Plocka ihop leksaker",
  "Rengöring av ugn invändigt",
  "Vattna blommor",
  "Slänga skräp på återvinningen",
  "Göra rent insida av kylskåp",
  "Handdiska och torka",
];

const tidtabell = [
  { area: "1–50 m²", vecka: "3 tim", varannan: "3 tim" },
  { area: "51–85 m²", vecka: "3–4 tim", varannan: "3–4 tim" },
  { area: "86–170 m²", vecka: "4–5 tim", varannan: "4–5 tim" },
  { area: "171–225 m²", vecka: "5–6 tim", varannan: "6–7 tim" },
];

const steg = [
  { icon: Home, title: "Kostnadsfritt hembesök", desc: "Vi börjar alltid med ett hembesök. Då kommer vi hem till dig för att prata om vilken, och hur mycket, städning du behöver hjälp med. Hembesöket är alltid kostnadsfritt och du förbinder dig inte till något." },
  { icon: FileText, title: "Personlig städbeskrivning", desc: "Efter hembesöket dokumenterar vi ditt hem i en städbeskrivning, så att vi kan utföra städningen som du vill ha den, varje gång." },
  { icon: CalendarCheck, title: "Vi kommer överens om schema", desc: "När du valt att bli kund hos oss så kommer vi överens om antal timmar och vilken veckodag du vill att vi ska komma." },
  { icon: Package, title: "Du får ett städpaket", desc: "Vid start får du ett städpaket innehållande redskap såsom mikrofibertrasor, moppskaft, hink med mera. Du står själv för rengöringsmedel och dammsugare." },
  { icon: Play, title: "Grundlig startstädning", desc: "Vi inleder din regelbundna hemstädning med en grundlig startstädning så att allt börjar på rätt nivå." },
];

const usps = [
  { icon: SmilePlus, label: "Nöjd-kund-garanti" },
  { icon: Headset, label: "Snabb kundservice" },
  { icon: Clock, label: "Ingen bindningstid" },
  { icon: UserCheck, label: "Samma städerska" },
];

const faqs = [
  { q: "Får man använda RUT-avdrag för hemstädning?", a: "Ja, du får använda RUT-avdrag som skattebetald privatperson som är minst 18 år fyllda vid beskattningsårets utgång. Du behöver vara bosatt i Sverige och vara helt eller delvis bosatt i bostaden där tjänsten utförs. Dödsbo kan bara få RUT-avdrag på uppdrag som har utförts före dödsfallet." },
  { q: "Hur gör jag för att få RUT-avdrag för hemstädning?", a: "Ni behöver inte göra någonting. För privatpersoner skickar vi alltid en faktura med RUT-avdraget förberett. I de fall då ni ej vill/kan utnyttja ert RUT-avdrag betalar ni helt enkelt hela beloppet." },
  { q: "Hur gör vi med nyckelkvittering?", a: "Vi bokar alltid in ett hemstädsmöte innan första städtillfället. Det är ett perfekt tillfälle för en nyckelkvittering och larmvisning. När vi väl har mottagit nyckeln förvaras dessa inlåsta i ett kassaskåp." },
  { q: "Är Timeout Service personalen tillförlitlig?", a: "Vår personal kontrolleras mot polisens belastningsregister samt undertecknar avtal om tystnadsplikt. De bär alltid Timeout Service AB uniform och har företagslegitimation." },
  { q: "Är det alltid samma person som kommer och städar?", a: "Ja, med oss är det alltid samma person som kommer, utom vid sjukdom eller semester. Då skickar vi en vikarie istället." },
  { q: "Måste jag lämna ut nycklar?", a: "Nej, om du garanterar att alltid vara hemma när städningen påbörjas och avslutas behöver vi ingen nyckel." },
  { q: "Måste jag ha städutrustning och rengöringsmedel?", a: "Vid start får du ett städpaket med mikrofibertrasor och moppskaft. Våra städmedel som är märkta med 'Bra miljöval' fylls på när de tar slut. Vi använder bara din dammsugare." },
  { q: "Vad händer om något skulle råka gå sönder?", a: "Timeout Service AB är ansvarsförsäkrad upp till 10 miljoner kronor. Om skadan uppkommit genom att vi har varit oaktsamma står vi självklart för kostnaden." },
  { q: "Hur betalar jag?", a: "Vi skickar faktura via e-post, vilket är kostnadsfritt. Det går även bra att betala med Swish. Betalningsvillkoren är 10 dagar. Vi administrerar ditt RUT-avdrag utan extra kostnad." },
];

const foreStadning = [
  "Plocka undan leksaker, kläder etc. så att vi kommer åt ordentligt",
  "Se till att alla utrymmen som ska städas är tillgängliga och olåsta",
  "Plocka undan saker som står framme i kök och badrum — det sparar tid",
  "Byt dammsugarpåsen om det behövs",
];

const stadmaterial = [
  "Dammsugare",
  "Glasputs (t.ex. Ajax)",
  "Såpa (t.ex. Grumme Gul Såpa)",
  "Jif eller Cif",
  "Köksrent",
  "Toalettmedel (t.ex. Ajax Dusch, bad)",
  "Kalkborttagningsmedel (t.ex. Cilit Bang)",
  "Toalettrengöring",
];

/* ──────────────────────── HELPERS ──────────────────────── */

function Section({ children, alt, style }) {
  return (
    <section className={alt ? "section-alt" : "section"} style={style}>
      <div className="container">{children}</div>
    </section>
  );
}

function SectionHeader({ tag, title, subtitle, align = "center" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      style={{ textAlign: align, marginBottom: 48 }}
    >
      {tag && (
        <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-primary)", marginBottom: 12, display: "block" }}>
          {tag}
        </span>
      )}
      <h2 style={{ fontSize: "clamp(26px, 4vw, 38px)", marginBottom: subtitle ? 14 : 0 }}>{title}</h2>
      {subtitle && <p style={{ fontSize: 17, color: "var(--color-muted)", maxWidth: 600, margin: align === "center" ? "0 auto" : 0, lineHeight: 1.6 }}>{subtitle}</p>}
    </motion.div>
  );
}

function ChecklistSection({ title, items }) {
  return (
    <div style={{ marginBottom: 32 }}>
      <h3 style={{ fontSize: 20, marginBottom: 16, color: "var(--color-primary)" }}>{title}</h3>
      <ul style={{ listStyle: "none", display: "grid", gap: 8 }}>
        {items.map((item) => (
          <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: 10, fontSize: 15, color: "var(--color-body)", lineHeight: 1.5 }}>
            <Check size={18} style={{ color: "var(--color-primary)", flexShrink: 0, marginTop: 2 }} />
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
        <span style={{ width: 30, height: 30, borderRadius: "50%", background: isOpen ? "var(--color-primary)" : "var(--color-primary-light)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, transition: "all 0.2s" }}>
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

export default function HemstadningContent() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <>
      {/* ── BREADCRUMB ── */}
      <div style={{ background: "var(--color-bg-alt)", borderBottom: "1px solid var(--color-border-light)" }}>
        <nav className="container" style={{ padding: "12px 20px", fontSize: 13, color: "var(--color-muted)", display: "flex", alignItems: "center", flexWrap: "wrap", gap: 4 }}>
          <a href="/" style={{ color: "var(--color-muted)", textDecoration: "none" }}>Hem</a>
          <ChevronRight size={12} />
          <a href="/tjanster" style={{ color: "var(--color-muted)", textDecoration: "none" }}>Privatperson</a>
          <ChevronRight size={12} />
          <span style={{ color: "var(--color-heading)", fontWeight: 500 }}>Hemstädning</span>
        </nav>
      </div>

      {/* ── HERO ── */}
      <Section>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }} className="services-layout">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-primary)", marginBottom: 12, display: "block" }}>Privatperson</span>
            <h1 style={{ fontSize: "clamp(32px, 5vw, 48px)", marginBottom: 20, lineHeight: 1.1 }}>
              Hemstädning i Stockholm
            </h1>
            <p style={{ fontSize: 17, color: "var(--color-body)", lineHeight: 1.7, marginBottom: 16 }}>
              Städning kan vara svårt att ta tag i — det är ansträngande och tar framför allt mycket tid. Dock gillar de allra flesta av oss att komma hem till ett rent och fräscht hem.
            </p>
            <p style={{ fontSize: 17, color: "var(--color-body)", lineHeight: 1.7, marginBottom: 32 }}>
              Ta en &ldquo;Timeout&rdquo; och ta hand om familjen, så sköter vi städningen åt er!
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a href="/boka" className="btn-primary">Boka hemstädning</a>
              <a href="tel:08-377176" className="btn-secondary"><Phone size={16} /> 08-37 71 76</a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            <img
              src="/images/tjanst-flytt.jpg"
              alt="Hemstädning Stockholm — Timeout Service städar kök"
              style={{ width: "100%", borderRadius: 12, aspectRatio: "3/4", objectFit: "cover", boxShadow: "0 20px 60px rgba(0,0,0,0.12)" }}
            />
          </motion.div>
        </div>
      </Section>

      {/* ── VAD INGÅR ── */}
      <Section alt>
        <SectionHeader tag="Checklista" title="Vad ingår i hemstädning?" subtitle="Vår hemstädning utförs enligt en checklista för att alltid säkerställa det bästa resultatet. Du kan naturligtvis anpassa städningen med speciella önskemål." />
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "32px 48px", background: "white", padding: "clamp(24px, 4vw, 40px)", borderRadius: 16, border: "1px solid var(--color-border)" }}
          className="services-layout"
        >
          <ChecklistSection title="Samtliga rum" items={checklistRum} />
          <ChecklistSection title="Kök" items={checklistKok} />
          <ChecklistSection title="Badrum & toalett" items={checklistBadrum} />
          <ChecklistSection title="Sovrum" items={checklistSovrum} />
        </motion.div>
      </Section>

      {/* ── TILLÄGGSTJÄNSTER ── */}
      <Section>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }} className="services-layout">
          <div>
            <SectionHeader tag="Extra" title="Tilläggstjänster" subtitle="Ställ samman de extratjänster du är intresserad av så återkommer vi med en offert. Som existerande kund får du fördelaktiga erbjudanden på samtliga tilläggstjänster." align="left" />
            <ul style={{ listStyle: "none", display: "grid", gap: 10 }}>
              {tillagg.map((item) => (
                <li key={item} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 15, color: "var(--color-body)", padding: "12px 16px", background: "var(--color-bg-alt)", borderRadius: 8 }}>
                  <Sparkles size={16} style={{ color: "var(--color-accent)", flexShrink: 0 }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeader tag="Att ha hemma" title="Städmaterial" subtitle="Vid start får du ett städpaket med mikrofibertrasor, moppskaft, hink med mera. Du står själv för rengöringsmedel och dammsugare." align="left" />
            <ul style={{ listStyle: "none", display: "grid", gap: 10 }}>
              {stadmaterial.map((item) => (
                <li key={item} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 15, color: "var(--color-body)", padding: "12px 16px", background: "var(--color-bg-alt)", borderRadius: 8 }}>
                  <Check size={16} style={{ color: "var(--color-primary)", flexShrink: 0 }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* ── HUR BLIR DU KUND ── */}
      <Section alt>
        <SectionHeader tag="Steg för steg" title="Hur blir du kund hos oss?" />
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          {steg.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              style={{
                display: "flex",
                gap: 20,
                padding: "28px 0",
                borderBottom: i < steg.length - 1 ? "1px solid var(--color-border)" : "none",
              }}
            >
              <div style={{ width: 52, height: 52, borderRadius: 12, background: "var(--color-primary-light)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <s.icon size={24} style={{ color: "var(--color-primary)" }} />
              </div>
              <div>
                <div style={{ fontSize: 13, fontWeight: 700, color: "var(--color-accent)", marginBottom: 4 }}>Steg {i + 1}</div>
                <h3 style={{ fontSize: 18, marginBottom: 6 }}>{s.title}</h3>
                <p style={{ fontSize: 15, color: "var(--color-muted)", lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ── TIDSUPPSKATTNING ── */}
      <Section>
        <SectionHeader tag="Priser för hemstädning" title="Tidsuppskattning" subtitle="Tiden varierar beroende på bostadens storlek och frekvens. Alla priser visas efter RUT-avdrag (50%)." />
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
          style={{ maxWidth: 650, margin: "0 auto", borderRadius: 12, overflow: "hidden", border: "1px solid var(--color-border)" }}
        >
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 15 }}>
            <thead>
              <tr style={{ background: "var(--color-primary)", color: "white" }}>
                <th style={{ padding: "14px 20px", textAlign: "left", fontWeight: 600 }}>Yta</th>
                <th style={{ padding: "14px 20px", textAlign: "left", fontWeight: 600 }}>Varje vecka</th>
                <th style={{ padding: "14px 20px", textAlign: "left", fontWeight: 600 }}>Varannan vecka</th>
              </tr>
            </thead>
            <tbody>
              {tidtabell.map((row, i) => (
                <tr key={row.area} style={{ background: i % 2 === 0 ? "white" : "var(--color-bg-alt)" }}>
                  <td style={{ padding: "14px 20px", fontWeight: 600, color: "var(--color-heading)" }}>{row.area}</td>
                  <td style={{ padding: "14px 20px", color: "var(--color-body)" }}>{row.vecka}</td>
                  <td style={{ padding: "14px 20px", color: "var(--color-body)" }}>{row.varannan}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </Section>

      {/* ── INGA BINDNINGSTIDER + USP ── */}
      <Section alt>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }} className="services-layout">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <img src="/images/hemstad-garanti.png" alt="Nöjd kund hemstädning" style={{ width: "100%", borderRadius: 12, maxWidth: 400 }} />
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
            <h2 style={{ fontSize: "clamp(26px, 3.5vw, 36px)", marginBottom: 16 }}>Inga bindningstider</h2>
            <p style={{ fontSize: 16, color: "var(--color-body)", lineHeight: 1.7, marginBottom: 28 }}>
              På Timeout Service är vi övertygade om att nöjda kunder fortsätter att använda våra tjänster. Därför har vi <strong>inga bindnings- eller uppsägningstider</strong>. Så länge du vill att vi fortsätter att städa ditt hem så gör vi det — när du behöver avsluta eller pausa tjänsten så gör vi det direkt.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
              {usps.map((usp) => (
                <div key={usp.label} style={{ display: "flex", alignItems: "center", gap: 8, padding: "10px 18px", background: "var(--color-primary-light)", borderRadius: 8, fontSize: 14, fontWeight: 600, color: "var(--color-primary)" }}>
                  <usp.icon size={18} /> {usp.label}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Section>

      {/* ── INFÖR VARJE STÄDNING ── */}
      <Section>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <SectionHeader tag="Tips" title="Att tänka på inför varje städning" subtitle="För att du ska få ut det mesta av den tid vi är hos er rekommenderar vi att du:" />
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            {foreStadning.map((item, i) => (
              <div key={i} style={{ display: "flex", gap: 14, padding: "16px 0", borderBottom: i < foreStadning.length - 1 ? "1px solid var(--color-border-light)" : "none" }}>
                <div style={{ width: 28, height: 28, borderRadius: "50%", background: "var(--color-accent)", color: "white", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, fontWeight: 700, flexShrink: 0 }}>
                  {i + 1}
                </div>
                <span style={{ fontSize: 15, color: "var(--color-body)", lineHeight: 1.5 }}>{item}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* ── FAQ ── */}
      <Section alt>
        <div style={{ maxWidth: 750, margin: "0 auto" }}>
          <SectionHeader tag="Vanliga frågor" title="Frågor och svar om hemstädning" />
          <div style={{ borderTop: "1px solid var(--color-border)" }}>
            {faqs.map((faq, i) => (
              <FAQItem key={i} faq={faq} isOpen={openFaq === i} onClick={() => setOpenFaq(openFaq === i ? -1 : i)} />
            ))}
          </div>
        </div>
      </Section>

      {/* ── CTA ── */}
      <section style={{ background: "var(--color-primary)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.05, backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 30px, rgba(255,255,255,0.5) 30px, rgba(255,255,255,0.5) 31px)" }} />
        <div className="container" style={{ padding: "80px 20px", textAlign: "center", position: "relative", zIndex: 1 }}>
          <h2 style={{ fontSize: "clamp(26px, 4vw, 40px)", color: "white", marginBottom: 14 }}>
            Boka hemstädning i Stockholm
          </h2>
          <p style={{ fontSize: 17, color: "rgba(255,255,255,0.8)", maxWidth: 480, margin: "0 auto 32px", lineHeight: 1.6 }}>
            Kostnadsfritt hembesök, inga bindningstider. Kontakta oss idag.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: 14, flexWrap: "wrap" }}>
            <a className="btn-accent" href="/boka">Boka kostnadsfritt hembesök <ArrowRight size={17} /></a>
            <a className="btn-secondary" href="tel:08-377176" style={{ color: "white", borderColor: "rgba(255,255,255,0.25)" }}>
              <Phone size={16} /> Ring 08-37 71 76
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
