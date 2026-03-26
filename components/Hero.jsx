"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Star, Shield, Award, Leaf, Check, ArrowLeft } from "lucide-react";

/* ══════════════════ PRICING DATA ══════════════════ */

const SERVICES = {
  hemstadning: {
    id: "hemstadning", label: "Hemstädning", type: "subscription",
    inputLabel: "Hur stort bor du?", priceUnit: "/mån", priceSuffix: "Totalt pris Hemstäd:",
    hasFrequency: true, hasAddons: false,
    tiers: [
      { min: 1, max: 50, prices: { weekly: 2750, biweekly: 1350, monthly: 800 } },
      { min: 51, max: 62, prices: { weekly: 3200, biweekly: 1600, monthly: 1036 } },
      { min: 63, max: 85, prices: { weekly: 3650, biweekly: 1800, monthly: 1036 } },
      { min: 86, max: 107, prices: { weekly: 4100, biweekly: 2050, monthly: 1150 } },
      { min: 108, max: 170, prices: { weekly: 4300, biweekly: 2520, monthly: 1250 } },
      { min: 171, max: 180, prices: { weekly: 5038, biweekly: 2520, monthly: null } },
      { min: 181, max: 200, prices: { weekly: 5450, biweekly: 2740, monthly: null } },
      { min: 201, max: Infinity, prices: { weekly: 6410, biweekly: 3200, monthly: null } },
    ],
    frequencies: [
      { id: "weekly", label: "Varje vecka" },
      { id: "biweekly", label: "Varannan vecka" },
      { id: "monthly", label: "Var 4:e vecka" },
    ],
  },
  flyttstadning: {
    id: "flyttstadning", label: "Flyttstädning", type: "onetime",
    inputLabel: "Hur stort bor du?", priceUnit: "Kr/*Efter RUT-avdrag", priceSuffix: "Totalt pris flyttstäd:",
    hasFrequency: false, hasAddons: true,
    tiers: [
      { min: 1, max: 49, price: 2400 }, { min: 50, max: 59, price: 2800 }, { min: 60, max: 75, price: 3300 },
      { min: 76, max: 85, price: 3700 }, { min: 86, max: 95, price: 4000 }, { min: 96, max: 105, price: 4400 },
      { min: 106, max: 125, price: 4700 }, { min: 126, max: 150, price: 5100 }, { min: 151, max: 180, price: 5600 },
      { min: 181, max: 199, price: 6200 }, { min: 200, max: 221, price: 6700 }, { min: 222, max: 240, price: 7200 },
      { min: 241, max: Infinity, price: null },
    ],
    addons: [
      { id: "racken", label: "Sopning+rengöring av räcken", price: 250 },
      { id: "halvbalkong", label: "Halvinglasad balkong", price: 350 },
      { id: "helbalkong", label: "Helinglasad balkong", price: 500 },
      { id: "vind", label: "Vind/källare", price: 400 },
      { id: "moblerat", label: "Möblerat boende", price: 500 },
      { id: "ugn", label: "Sanera ugn", price: 300 },
      { id: "angmaskin", label: "Ångmaskin", price: 400 },
      { id: "mattvatt", label: "Mattvätt - 100 kr/kvm", price: 0, isManual: true },
      { id: "helg", label: "Städas på helg / röd dag", price: 500 },
    ],
  },
  storstadning: {
    id: "storstadning", label: "Storstädning", type: "onetime",
    inputLabel: "Hur stort bor du?", priceUnit: "Kr/*Efter RUT-avdrag", priceSuffix: "Totalt pris storstäd:",
    hasFrequency: false, hasAddons: true,
    tiers: [
      { min: 1, max: 69, price: 2500 }, { min: 70, max: 110, price: 3100 }, { min: 111, max: 150, price: 3500 },
      { min: 151, max: 171, price: 4300 }, { min: 172, max: 201, price: 4800 }, { min: 202, max: 248, price: 5900 },
      { min: 249, max: Infinity, price: null },
    ],
    addons: [
      { id: "racken", label: "Balkong Sopning+rengöring av räcken", price: 250 },
      { id: "halvbalkong", label: "Halv inglasad balkong", price: 299 },
      { id: "helbalkong", label: "Helinglasad balkong", price: 399 },
      { id: "kylskap", label: "Rengöring av kylskåp", price: 205 },
      { id: "ugn", label: "Sanera ugn invändigt", price: 285 },
      { id: "kamin", label: "kamin/öppen spis - 400 kr/st", price: 400 },
      { id: "mattvatt", label: "Mattvätt - 99 kr/kvm", price: 0, isManual: true },
      { id: "helg", label: "Städ på helg / röd dag", price: 485 },
      { id: "angmaskin", label: "Tillägg ångmaskin", price: 450 },
    ],
  },
  badrumstvatt: {
    id: "badrumstvatt", label: "Badrumstvätt", type: "onetime",
    inputLabel: "Hur stort badrum?", priceUnit: "Kr/*Efter RUT-avdrag", priceSuffix: "Totalt pris badrum:",
    hasFrequency: false, hasAddons: true,
    tiers: [
      { min: 1, max: 10, price: 1200 }, { min: 11, max: 15, price: 1600 },
      { min: 16, max: 20, price: 2200 }, { min: 21, max: Infinity, price: null },
    ],
    addons: [
      { id: "angttvatt", label: "Ångtvätt 550 kr", price: 550 },
      { id: "mogel", label: "Mögelsanering 400 kr/tim", price: 0, isManual: true },
      { id: "kalk", label: "Svår kalk 400 kr/tim", price: 0, isManual: true },
      { id: "fogar", label: "Djuprengöring fogar 400 kr/tim", price: 0, isManual: true },
    ],
  },
  koksstadning: {
    id: "koksstadning", label: "Köksstädning", type: "onetime",
    inputLabel: "Hur stort kök?", priceUnit: "Kr/*Efter RUT-avdrag", priceSuffix: "Totalt pris kök:",
    hasFrequency: false, hasAddons: true,
    tiers: [
      { min: 1, max: 10, price: 1150 }, { min: 11, max: 15, price: 1500 },
      { min: 16, max: 20, price: 2100 }, { min: 21, max: Infinity, price: null },
    ],
    addons: [
      { id: "ugn", label: "Sanera ugn invändigt, ink. ugn, plåtar och galler", price: 400 },
      { id: "vaggar", label: "Tvätta väggar/tak 250 kr/tim", price: 0, isManual: true },
    ],
  },
  visningsstadning: {
    id: "visningsstadning", label: "Visningstäd", type: "onetime",
    inputLabel: "Hur stort bor du?", priceUnit: "Kr/*Efter RUT-avdrag", priceSuffix: "Totalt pris Visningstäd:",
    hasFrequency: false, hasAddons: true,
    tiers: [
      { min: 1, max: 50, price: 2500 }, { min: 51, max: 58, price: 2900 }, { min: 59, max: 65, price: 3100 },
      { min: 66, max: 75, price: 3300 }, { min: 76, max: 85, price: 3500 }, { min: 86, max: 95, price: 3700 },
      { min: 96, max: 105, price: 3900 }, { min: 106, max: 120, price: 4100 }, { min: 121, max: 151, price: 4500 },
      { min: 152, max: 178, price: 4900 }, { min: 179, max: 201, price: 5400 }, { min: 202, max: 248, price: 6100 },
      { min: 249, max: Infinity, price: null },
    ],
    addons: [
      { id: "racken", label: "Balkong Sopning+rengöring av räcken", price: 250 },
      { id: "halvbalkong", label: "Halv inglasad balkong", price: 350 },
      { id: "helbalkong", label: "Hel inglasad balkong", price: 500 },
      { id: "kylskap", label: "Rengöring av kylskåp", price: 247 },
      { id: "ugn", label: "Sanera ugn invändigt", price: 300 },
      { id: "kamin", label: "kamin/öppen spis 400 kr/st", price: 400 },
      { id: "mattvatt", label: "Mattvätt - 100 kr/kvm", price: 0, isManual: true },
      { id: "helg", label: "Städas på helg / röd dag", price: 502 },
      { id: "angttvatt", label: "Ångtvätt", price: 500 },
    ],
  },
};

const SERVICE_OPTIONS = [
  { value: "", label: "Välj tjänst" },
  { value: "hemstadning", label: "Hemstädning" },
  { value: "flyttstadning", label: "Flyttstädning" },
  { value: "storstadning", label: "Storstädning" },
  { value: "badrumstvatt", label: "Badrumstvätt" },
  { value: "koksstadning", label: "Köksstädning" },
  { value: "visningsstadning", label: "Visningstäd" },
];

function DotPattern({ style }) {
  const dots = [];
  for (let row = 0; row < 5; row++) {
    for (let col = 0; col < 5; col++) {
      dots.push(<circle key={`${row}-${col}`} cx={col * 10 + 4} cy={row * 10 + 4} r={2.5} fill="var(--color-accent)" />);
    }
  }
  return <svg width="50" height="50" viewBox="0 0 50 50" style={{ position: "absolute", ...style }}>{dots}</svg>;
}

/* ══════════════════ CALC ══════════════════ */

function calcPrice(service, sqm, frequency, addonIds) {
  if (!service || !sqm || sqm < 1) return null;
  const tier = service.tiers.find((t) => sqm >= t.min && sqm <= t.max);
  if (!tier) return { type: "contact" };

  if (service.hasFrequency) {
    if (!frequency) return null;
    const p = tier.prices[frequency];
    return p === null ? { type: "contact" } : { type: "price", total: p, unit: service.priceUnit };
  }

  const base = tier.price;
  if (base === null) return { type: "contact" };
  let addonTotal = 0;
  let hasManual = false;
  for (const id of addonIds) {
    const a = service.addons?.find((x) => x.id === id);
    if (a?.isManual) hasManual = true;
    else if (a) addonTotal += a.price;
  }
  if (hasManual) return { type: "contact" };
  return { type: "price", total: base + addonTotal, unit: service.priceUnit };
}

const fmt = (n) => n.toLocaleString("sv-SE");

/* ══════════════════ COMPONENT ══════════════════ */

const trustItems = [
  { icon: Shield, text: "Nöjd-kund-garanti" },
  { icon: Award, text: "35 års erfarenhet" },
  { icon: Leaf, text: "Miljövänliga produkter" },
];

export default function Hero() {
  // Step: 0 = service+sqm, 1 = frequency/addons + price, 2 = booking form
  const [step, setStep] = useState(0);
  const [serviceId, setServiceId] = useState("");
  const [sqm, setSqm] = useState("");
  const [frequency, setFrequency] = useState(null);
  const [selectedAddons, setSelectedAddons] = useState([]);
  const [formSent, setFormSent] = useState(false);

  const service = serviceId ? SERVICES[serviceId] : null;
  const sqmNum = parseInt(sqm) || 0;
  const result = service ? calcPrice(service, sqmNum, frequency, selectedAddons) : null;

  const toggleAddon = (id) => setSelectedAddons((p) => p.includes(id) ? p.filter((x) => x !== id) : [...p, id]);

  const handleNext = () => {
    if (!service || sqmNum < 1) return;
    setFrequency(null);
    setSelectedAddons([]);
    setStep(1);
  };

  const handleBack = () => {
    if (step === 2) setStep(1);
    else if (step === 1) setStep(0);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSent(true);
  };

  // Determine if service needs a different input label
  const inputLabel = service ? service.inputLabel : "Hur stort bor du?";

  const cardStyle = {
    position: "relative",
    background: "rgba(0, 114, 185, 0.9)",
    backdropFilter: "blur(16px)",
    borderRadius: 16,
    padding: "clamp(24px, 4vw, 36px)",
    maxWidth: 680,
    margin: "0 auto",
  };

  const inputStyle = {
    width: "100%", padding: "14px 16px", fontSize: 15, border: "none",
    borderRadius: 8, background: "white", color: "#1a1a1a", outline: "none",
    fontFamily: "var(--font-body)",
  };

  const labelStyle = {
    display: "block", fontSize: 13, fontWeight: 700,
    color: "rgba(255,255,255,0.9)", marginBottom: 6, textAlign: "left",
  };

  return (
    <section style={{ position: "relative", minHeight: "auto", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
      <div style={{ position: "absolute", inset: 0, background: "var(--color-primary)", backgroundImage: "url('/hero-bg.jpg')", backgroundSize: "cover", backgroundPosition: "center" }} />
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.35))" }} />
      <div style={{ position: "absolute", inset: 0, opacity: 0.06, backgroundImage: "repeating-linear-gradient(-45deg, transparent, transparent 20px, rgba(255,255,255,0.4) 20px, rgba(255,255,255,0.4) 21px)" }} />
      <div style={{ position: "absolute", top: "20%", left: "10%", width: "50%", height: "60%", background: "radial-gradient(ellipse, rgba(0,114,185,0.2) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div style={{ position: "relative", zIndex: 2, textAlign: "center", padding: "clamp(48px, 8vw, 120px) 16px clamp(40px, 6vw, 80px)", width: "100%", maxWidth: 860, margin: "0 auto" }}>
        {/* Badge */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(255,255,255,0.12)", backdropFilter: "blur(8px)", padding: "8px 18px", borderRadius: 40, marginBottom: 28, border: "1px solid rgba(255,255,255,0.15)" }}>
          <div style={{ display: "flex", gap: 2 }}>{[...Array(5)].map((_, i) => <Star key={i} size={14} fill="var(--color-accent)" color="var(--color-accent)" />)}</div>
          <span style={{ color: "rgba(255,255,255,0.9)", fontSize: 13, fontWeight: 500 }}>5/5 i kundbetyg</span>
        </motion.div>

        {/* Heading */}
        <motion.h1 initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
          style={{ fontSize: "clamp(40px, 7vw, 76px)", fontWeight: 400, color: "white", lineHeight: 1.08, letterSpacing: "-0.02em", marginBottom: 12 }}>
          Städfirma i Stockholm
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
          style={{ fontSize: "clamp(18px, 2.5vw, 22px)", color: "rgba(255,255,255,0.85)", fontWeight: 400, marginBottom: 44 }}>
          Lämna städningen till oss
        </motion.p>

        {/* Calculator card */}
        <motion.div initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.35 }} style={cardStyle}>
          <DotPattern style={{ top: -16, left: -16, opacity: 0.6 }} />
          <DotPattern style={{ bottom: -16, right: -16, opacity: 0.6 }} />

          <h2 style={{ fontSize: "clamp(20px, 3vw, 26px)", fontWeight: 400, color: "white", marginBottom: 24, textAlign: "left" }}>
            Räkna ut pris och boka här!
          </h2>

          <AnimatePresence mode="wait">

            {/* ── STEP 0: Select service + sqm ── */}
            {step === 0 && (
              <motion.div key="step0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 20 }} className="hero-form-grid">
                  <div>
                    <label style={labelStyle}>Typ av tjänst</label>
                    <div style={{ position: "relative" }}>
                      <select value={serviceId} onChange={(e) => { setServiceId(e.target.value); setSqm(""); setFrequency(null); setSelectedAddons([]); }}
                        style={{ ...inputStyle, appearance: "none", cursor: "pointer", paddingRight: 40, color: serviceId ? "#1a1a1a" : "#999" }}>
                        {SERVICE_OPTIONS.map((o) => <option key={o.value} value={o.value} disabled={o.value === ""}>{o.label}</option>)}
                      </select>
                      <ChevronDown size={18} style={{ position: "absolute", right: 14, top: "50%", transform: "translateY(-50%)", color: "#666", pointerEvents: "none" }} />
                    </div>
                  </div>
                  <div>
                    <label style={labelStyle}>{inputLabel}</label>
                    <input type="number" min="1" placeholder="Skriv kvadratmeter här..." value={sqm} onChange={(e) => setSqm(e.target.value)} style={inputStyle} />
                  </div>
                </div>
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <button className="btn-accent" style={{ padding: "14px 36px" }} onClick={handleNext} disabled={!service || sqmNum < 1}>
                    Gå vidare
                  </button>
                </div>
              </motion.div>
            )}

            {/* ── STEP 1: Frequency / Addons + Price ── */}
            {step === 1 && service && (
              <motion.div key="step1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>

                {/* Hemstädning — frequency */}
                {service.hasFrequency && (
                  <>
                    <label style={labelStyle}>Hur ofta? - Hemstäd</label>
                    <div style={{ display: "grid", gap: 10, marginBottom: 20 }}>
                      {service.frequencies.map((f) => {
                        const tier = service.tiers.find((t) => sqmNum >= t.min && sqmNum <= t.max);
                        const p = tier?.prices[f.id];
                        const avail = p !== null && p !== undefined;
                        return (
                          <label key={f.id} style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 16px", background: "rgba(255,255,255,0.1)", borderRadius: 8, cursor: avail ? "pointer" : "default", opacity: avail ? 1 : 0.4 }}>
                            <input type="radio" name="freq" disabled={!avail} checked={frequency === f.id}
                              onChange={() => setFrequency(f.id)}
                              style={{ width: 20, height: 20, accentColor: "var(--color-accent)" }} />
                            <span style={{ color: "white", fontSize: 15, fontWeight: 500 }}>{f.label}</span>
                          </label>
                        );
                      })}
                    </div>
                  </>
                )}

                {/* Other services — addons */}
                {service.hasAddons && service.addons && (
                  <>
                    <label style={labelStyle}>Extra tillval</label>
                    <div style={{ display: "grid", gap: 6, marginBottom: 20, maxHeight: 240, overflowY: "auto" }}>
                      {service.addons.map((addon) => (
                        <label key={addon.id} style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 14px", background: selectedAddons.includes(addon.id) ? "rgba(255,255,255,0.2)" : "rgba(255,255,255,0.08)", borderRadius: 8, cursor: "pointer", transition: "all 0.15s" }}>
                          <input type="checkbox" checked={selectedAddons.includes(addon.id)} onChange={() => toggleAddon(addon.id)}
                            style={{ width: 18, height: 18, accentColor: "var(--color-accent)" }} />
                          <span style={{ color: "white", fontSize: 14, flex: 1 }}>{addon.label}</span>
                        </label>
                      ))}
                    </div>
                  </>
                )}

                {/* Price display */}
                {result?.type === "price" && (
                  <div style={{ background: "white", borderRadius: 10, padding: "16px 20px", display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
                    <span style={{ fontSize: 14, fontWeight: 600, color: "var(--color-muted)" }}>{service.priceSuffix}</span>
                    <div style={{ display: "flex", alignItems: "baseline", gap: 4 }}>
                      <span style={{ fontSize: 32, fontWeight: 800, color: "var(--color-heading)" }}>{fmt(result.total)}</span>
                      <span style={{ fontSize: 14, color: "var(--color-muted)" }}>{result.unit}</span>
                    </div>
                  </div>
                )}

                {result?.type === "contact" && (
                  <div style={{ background: "rgba(222,160,30,0.2)", borderRadius: 10, padding: "16px 20px", marginBottom: 16, textAlign: "center" }}>
                    <span style={{ color: "white", fontSize: 15, fontWeight: 600 }}>Kontakta oss för offert!</span>
                  </div>
                )}

                {/* Navigation */}
                <div style={{ display: "flex", justifyContent: "space-between" }}>
                  <button onClick={handleBack} style={{ padding: "12px 20px", background: "rgba(255,255,255,0.15)", border: "none", borderRadius: 8, color: "white", fontSize: 14, fontWeight: 600, cursor: "pointer", display: "flex", alignItems: "center", gap: 6, fontFamily: "var(--font-body)" }}>
                    <ArrowLeft size={16} /> Tillbaka
                  </button>
                  {result?.type === "price" && (
                    <button className="btn-accent" style={{ padding: "12px 28px" }} onClick={() => setStep(2)}>
                      Boka
                    </button>
                  )}
                </div>
              </motion.div>
            )}

            {/* ── STEP 2: Booking form ── */}
            {step === 2 && service && (
              <motion.div key="step2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
                {!formSent ? (
                  <form onSubmit={handleSubmit}>
                    {/* Summary */}
                    <div style={{ background: "rgba(255,255,255,0.12)", borderRadius: 8, padding: "12px 16px", marginBottom: 20, fontSize: 14, color: "rgba(255,255,255,0.8)", textAlign: "left" }}>
                      <strong>{service.label}</strong> · {sqmNum} m²
                      {frequency && ` · ${service.frequencies.find((f) => f.id === frequency)?.label}`}
                      {selectedAddons.length > 0 && ` · ${selectedAddons.length} tillval`}
                      {result?.type === "price" && <span style={{ float: "right", fontWeight: 700, color: "var(--color-accent)" }}>{fmt(result.total)} {result.unit}</span>}
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 12 }} className="hero-form-grid">
                      <input name="fornamn" required placeholder="Förnamn" style={inputStyle} />
                      <input name="efternamn" required placeholder="Efternamn" style={inputStyle} />
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 12 }} className="hero-form-grid">
                      <input name="adress" placeholder="Adress" style={inputStyle} />
                      <input name="postnummer" placeholder="Postnummer" style={inputStyle} />
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 12 }} className="hero-form-grid">
                      <input name="ort" placeholder="Ort" style={inputStyle} />
                      <input name="email" type="email" required placeholder="Email" style={inputStyle} />
                    </div>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 12 }} className="hero-form-grid">
                      <input name="telefon" type="tel" required placeholder="Telefonnummer" style={inputStyle} />
                      <input name="datum" type="text" placeholder="Önskat datum" onFocus={(e) => (e.target.type = "date")} style={inputStyle} />
                    </div>
                    <textarea name="meddelande" rows={3} placeholder="Meddelande" style={{ ...inputStyle, resize: "vertical", marginBottom: 16 }} />

                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                      <button type="button" onClick={handleBack} style={{ padding: "12px 20px", background: "rgba(255,255,255,0.15)", border: "none", borderRadius: 8, color: "white", fontSize: 14, fontWeight: 600, cursor: "pointer", display: "flex", alignItems: "center", gap: 6, fontFamily: "var(--font-body)" }}>
                        <ArrowLeft size={16} /> Gå tillbaka
                      </button>
                      <button type="submit" className="btn-accent" style={{ padding: "12px 36px" }}>
                        Boka
                      </button>
                    </div>
                  </form>
                ) : (
                  <div style={{ textAlign: "center", padding: "40px 20px" }}>
                    <div style={{ width: 56, height: 56, borderRadius: "50%", background: "rgba(255,255,255,0.2)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>
                      <Check size={28} color="white" />
                    </div>
                    <h3 style={{ color: "white", fontSize: 22, marginBottom: 8 }}>Tack för din bokning!</h3>
                    <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 15 }}>Vi kontaktar dig inom kort.</p>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Trust indicators */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.6 }}
          className="hero-trust"
          style={{ display: "flex", justifyContent: "center", gap: 32, marginTop: 36, flexWrap: "wrap" }}>
          {trustItems.map((item) => (
            <div key={item.text} style={{ display: "flex", alignItems: "center", gap: 8, color: "rgba(255,255,255,0.75)", fontSize: 14, fontWeight: 500 }}>
              <item.icon size={17} style={{ color: "var(--color-accent)" }} />
              {item.text}
            </div>
          ))}
        </motion.div>
      </div>

      <style jsx global>{`
        @media (max-width: 640px) {
          .hero-form-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
