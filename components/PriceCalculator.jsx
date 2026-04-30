"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronRight,
  Check,
  ArrowRight,
  Sparkles,
  Phone,
  Plus,
  Minus,
  Paperclip,
  X,
  Loader2,
} from "lucide-react";
import { compressImage } from "./imageCompression";

/* ══════════════════════════════════════════════════════════
   PRICING DATA — alla priser efter RUT-avdrag
   ══════════════════════════════════════════════════════════ */

const SERVICES = {
  hemstadning: {
    id: "hemstadning",
    label: "Hemstädning",
    type: "subscription",
    inputLabel: "Bostadens storlek (kvm)",
    hasFrequency: true,
    hasAddons: false,
    priceUnit: "kr/mån",
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
    id: "flyttstadning",
    label: "Flyttstädning",
    type: "onetime",
    inputLabel: "Bostadens storlek (kvm)",
    hasFrequency: false,
    hasAddons: true,
    priceUnit: "kr",
    tiers: [
      { min: 1, max: 49, price: 2400 },
      { min: 50, max: 59, price: 2800 },
      { min: 60, max: 75, price: 3300 },
      { min: 76, max: 85, price: 3700 },
      { min: 86, max: 95, price: 4000 },
      { min: 96, max: 105, price: 4400 },
      { min: 106, max: 125, price: 4700 },
      { min: 126, max: 150, price: 5100 },
      { min: 151, max: 180, price: 5600 },
      { min: 181, max: 199, price: 6200 },
      { min: 200, max: 221, price: 6700 },
      { min: 222, max: 240, price: 7200 },
      { min: 241, max: Infinity, price: null },
    ],
    addons: [
      { id: "racken", label: "Sopning + rengöring av räcken", price: 250 },
      { id: "halvbalkong", label: "Halvinglasad balkong", price: 350 },
      { id: "helbalkong", label: "Helinglasad balkong", price: 500 },
      { id: "vind", label: "Vind/källare", price: 400 },
      { id: "moblerat", label: "Möblerat boende", price: 500 },
      { id: "ugn", label: "Sanera ugn", price: 300 },
      { id: "angmaskin", label: "Ångmaskin", price: 400 },
      { id: "mattvatt", label: "Mattvätt — 100 kr/kvm", price: 0, isManual: true },
      { id: "lordag", label: "Städas på lördag", price: 800 },
      { id: "sondag", label: "Städas på söndag / röd dag", price: 1000 },
    ],
  },
  storstadning: {
    id: "storstadning",
    label: "Storstädning",
    type: "onetime",
    inputLabel: "Bostadens storlek (kvm)",
    hasFrequency: false,
    hasAddons: true,
    priceUnit: "kr",
    tiers: [
      { min: 1, max: 69, price: 2500 },
      { min: 70, max: 110, price: 3100 },
      { min: 111, max: 150, price: 3500 },
      { min: 151, max: 171, price: 4300 },
      { min: 172, max: 201, price: 4800 },
      { min: 202, max: 248, price: 5900 },
      { min: 249, max: Infinity, price: null },
    ],
    addons: [
      { id: "racken", label: "Balkong — sopning + rengöring", price: 250 },
      { id: "halvbalkong", label: "Halv inglasad balkong", price: 299 },
      { id: "helbalkong", label: "Helinglasad balkong", price: 399 },
      { id: "kylskap", label: "Rengöring av kylskåp", price: 205 },
      { id: "ugn", label: "Sanera ugn invändigt", price: 285 },
      { id: "kamin", label: "Kamin / öppen spis", price: 400 },
      { id: "mattvatt", label: "Mattvätt — 99 kr/kvm", price: 0, isManual: true },
      { id: "angmaskin", label: "Tillägg ångmaskin", price: 450 },
      { id: "lordag", label: "Städas på lördag", price: 800 },
      { id: "sondag", label: "Städas på söndag / röd dag", price: 1000 },
    ],
  },
  visningsstadning: {
    id: "visningsstadning",
    label: "Visningsstädning",
    type: "onetime",
    inputLabel: "Bostadens storlek (kvm)",
    hasFrequency: false,
    hasAddons: true,
    priceUnit: "kr",
    tiers: [
      { min: 1, max: 50, price: 2500 },
      { min: 51, max: 58, price: 2900 },
      { min: 59, max: 65, price: 3100 },
      { min: 66, max: 75, price: 3300 },
      { min: 76, max: 85, price: 3500 },
      { min: 86, max: 95, price: 3700 },
      { min: 96, max: 105, price: 3900 },
      { min: 106, max: 120, price: 4100 },
      { min: 121, max: 151, price: 4500 },
      { min: 152, max: 178, price: 4900 },
      { min: 179, max: 201, price: 5400 },
      { min: 202, max: 248, price: 6100 },
      { min: 249, max: Infinity, price: null },
    ],
    addons: [
      { id: "racken", label: "Balkong — sopning + rengöring", price: 250 },
      { id: "halvbalkong", label: "Halv inglasad balkong", price: 350 },
      { id: "helbalkong", label: "Hel inglasad balkong", price: 500 },
      { id: "kylskap", label: "Rengöring av kylskåp", price: 247 },
      { id: "ugn", label: "Sanera ugn invändigt", price: 300 },
      { id: "kamin", label: "Kamin / öppen spis", price: 400 },
      { id: "mattvatt", label: "Mattvätt — 100 kr/kvm", price: 0, isManual: true },
      { id: "angttvatt", label: "Ångtvätt", price: 500 },
      { id: "lordag", label: "Städas på lördag", price: 800 },
      { id: "sondag", label: "Städas på söndag / röd dag", price: 1000 },
    ],
  },
  badrumstvatt: {
    id: "badrumstvatt",
    label: "Badrumsstädning",
    type: "onetime",
    inputLabel: "Badrummets storlek (kvm)",
    hasFrequency: false,
    hasAddons: true,
    priceUnit: "kr",
    tiers: [
      { min: 1, max: 10, price: 1200 },
      { min: 11, max: 15, price: 1600 },
      { min: 16, max: 20, price: 2200 },
      { min: 21, max: Infinity, price: null },
    ],
    addons: [
      { id: "angttvatt", label: "Ångtvätt", price: 550 },
      { id: "mogel", label: "Mögelsanering — 400 kr/tim", price: 0, isManual: true },
      { id: "kalk", label: "Svår kalk — 400 kr/tim", price: 0, isManual: true },
      { id: "fogar", label: "Djuprengöring fogar — 400 kr/tim", price: 0, isManual: true },
      { id: "lordag", label: "Städas på lördag", price: 500 },
    ],
  },
  koksstadning: {
    id: "koksstadning",
    label: "Köksstädning",
    type: "onetime",
    inputLabel: "Kökets storlek (kvm)",
    hasFrequency: false,
    hasAddons: true,
    priceUnit: "kr",
    tiers: [
      { min: 1, max: 10, price: 1150 },
      { min: 11, max: 15, price: 1500 },
      { min: 16, max: 20, price: 2100 },
      { min: 21, max: Infinity, price: null },
    ],
    addons: [
      { id: "ugn", label: "Sanera ugn invändigt (ink. plåtar & galler)", price: 400 },
      { id: "vaggar", label: "Tvätta väggar/tak — 250 kr/tim", price: 0, isManual: true },
      { id: "lordag", label: "Städas på lördag", price: 500 },
    ],
  },
};

const SERVICE_LIST = Object.values(SERVICES);

/* ══════════════════════════════════════════════════════════
   CALCULATION
   ══════════════════════════════════════════════════════════ */

function calculatePrice(service, sqm, frequency, selectedAddonIds) {
  if (!service || !sqm || sqm < 1) return null;

  const tier = service.tiers.find((t) => sqm >= t.min && sqm <= t.max);
  if (!tier) return { type: "contact" };

  let basePrice;
  if (service.hasFrequency) {
    if (!frequency) return null;
    basePrice = tier.prices[frequency];
  } else {
    basePrice = tier.price;
  }

  if (basePrice === null) return { type: "contact" };

  let addonTotal = 0;
  let hasManualAddon = false;

  if (service.addons) {
    for (const addonId of selectedAddonIds) {
      const addon = service.addons.find((a) => a.id === addonId);
      if (addon?.isManual) hasManualAddon = true;
      else if (addon) addonTotal += addon.price;
    }
  }

  if (hasManualAddon) {
    return { type: "contact", basePrice, addonTotal, note: "Några tillval kräver manuell offert" };
  }

  return {
    type: "price",
    basePrice,
    addonTotal,
    total: basePrice + addonTotal,
    unit: service.priceUnit,
  };
}

/* ══════════════════════════════════════════════════════════
   COMPONENT
   ══════════════════════════════════════════════════════════ */

export default function PriceCalculator() {
  const [step, setStep] = useState(0);
  const [serviceId, setServiceId] = useState(null);
  const [sqm, setSqm] = useState("");
  const [frequency, setFrequency] = useState(null);
  const [selectedAddons, setSelectedAddons] = useState([]);
  const [formSent, setFormSent] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("idle"); // idle | sending | error
  const [files, setFiles] = useState([]);
  const [compressing, setCompressing] = useState(false);

  const handleFiles = async (e) => {
    const picked = Array.from(e.target.files || []);
    e.target.value = "";
    if (picked.length === 0) return;
    setCompressing(true);
    try {
      const compressed = await Promise.all(picked.map(compressImage));
      setFiles((prev) => [...prev, ...compressed].slice(0, 10));
    } finally {
      setCompressing(false);
    }
  };
  const removeFile = (i) => setFiles((prev) => prev.filter((_, idx) => idx !== i));

  const service = serviceId ? SERVICES[serviceId] : null;

  const getStepLabels = () => {
    if (!service) return ["Tjänst", "Storlek", "—", "Pris", "Boka"];
    if (service.hasFrequency) return ["Tjänst", "Storlek", "Frekvens", "Pris", "Boka"];
    return ["Tjänst", "Storlek", "Tillval", "Pris", "Boka"];
  };

  const stepLabels = getStepLabels();

  const handleServiceSelect = (id) => {
    setServiceId(id);
    setSqm("");
    setFrequency(null);
    setSelectedAddons([]);
    setStep(1);
  };

  const toggleAddon = (id) => {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((a) => a !== id) : [...prev, id]
    );
  };

  const sqmNum = parseInt(sqm) || 0;
  const result = service ? calculatePrice(service, sqmNum, frequency, selectedAddons) : null;

  const canAdvanceStep1 = sqmNum > 0;
  const canAdvanceStep2 = service?.hasFrequency ? !!frequency : true;

  const formatPrice = (n) => n.toLocaleString("sv-SE");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (submitStatus === "sending") return;

    const formEl = e.currentTarget;
    const selectedAddonLabels = selectedAddons
      .map((id) => service?.addons?.find((a) => a.id === id)?.label)
      .filter(Boolean);
    const freqLabel = frequency
      ? service?.frequencies?.find((f) => f.id === frequency)?.label
      : null;
    const pris =
      result?.type === "price"
        ? `${formatPrice(result.total)} ${result.unit}`
        : null;

    setSubmitStatus("sending");
    try {
      const data = new FormData(formEl);
      if (service?.label) data.set("tjanst", service.label);
      if (sqmNum) data.set("kvm", String(sqmNum));
      if (freqLabel) data.set("frekvens", freqLabel);
      selectedAddonLabels.forEach((label) => data.append("tillval", label));
      if (pris) data.set("pris", pris);
      files.forEach((f) => data.append("files", f));

      const res = await fetch("/api/send", { method: "POST", body: data });
      if (!res.ok) throw new Error("Request failed");
      setFormSent(true);
      setSubmitStatus("idle");
    } catch {
      setSubmitStatus("error");
    }
  };

  return (
    <section id="priskalkylator" className="section-alt">
      <div className="container" style={{ maxWidth: 860 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: 48 }}
        >
          <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-primary)", marginBottom: 12, display: "block" }}>
            Priskalkylator
          </span>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", marginBottom: 12 }}>
            Räkna ut ditt pris
          </h2>
          <p style={{ fontSize: 17, color: "var(--color-muted)", maxWidth: 480, margin: "0 auto" }}>
            Alla priser visas efter RUT-avdrag (50%).
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{ background: "white", border: "1px solid var(--color-border)", borderRadius: 16, overflow: "hidden", boxShadow: "0 20px 60px rgba(0,0,0,0.06)" }}
        >
          {/* Step indicators */}
          <div style={{ display: "flex", borderBottom: "1px solid var(--color-border-light)" }}>
            {stepLabels.map((s, i) => (
              <button
                key={s + i}
                onClick={() => i <= step && setStep(i)}
                style={{
                  flex: 1, padding: "16px 8px", border: "none", cursor: i <= step ? "pointer" : "default",
                  background: step === i ? "var(--color-primary)" : i < step ? "var(--color-primary-light)" : "white",
                  color: step === i ? "white" : i < step ? "var(--color-primary)" : "var(--color-muted)",
                  display: "flex", alignItems: "center", justifyContent: "center", gap: 6,
                  fontSize: 13, fontWeight: 600, fontFamily: "var(--font-body)",
                  borderRight: i < 4 ? "1px solid var(--color-border-light)" : "none",
                  transition: "all 0.25s ease",
                }}
              >
                <span style={{
                  width: 24, height: 24, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 11, fontWeight: 700,
                  background: step === i ? "var(--color-accent)" : i < step ? "var(--color-primary)" : "var(--color-bg-alt)",
                  color: step === i || i < step ? "white" : "var(--color-muted)",
                }}>
                  {i < step ? <Check size={12} /> : i + 1}
                </span>
                <span className="hidden sm:inline">{s}</span>
              </button>
            ))}
          </div>

          {/* Content */}
          <div style={{ padding: "clamp(20px, 4vw, 36px)" }}>
            <AnimatePresence mode="wait">

              {/* ── STEP 0: Tjänst ── */}
              {step === 0 && (
                <motion.div key="s0" initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -16 }} transition={{ duration: 0.2 }}>
                  <h3 style={{ fontSize: 20, marginBottom: 6 }}>Vilken tjänst behöver du?</h3>
                  <p style={{ fontSize: 15, color: "var(--color-muted)", marginBottom: 24 }}>Välj tjänst för att se pris</p>
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 10 }}>
                    {SERVICE_LIST.map((s) => (
                      <button
                        key={s.id}
                        onClick={() => handleServiceSelect(s.id)}
                        style={{
                          padding: "18px 20px", borderRadius: 10, cursor: "pointer",
                          background: serviceId === s.id ? "var(--color-primary)" : "var(--color-bg-alt)",
                          color: serviceId === s.id ? "white" : "var(--color-heading)",
                          border: serviceId === s.id ? "2px solid var(--color-primary)" : "2px solid transparent",
                          fontSize: 15, fontWeight: 500, fontFamily: "var(--font-body)", textAlign: "left",
                          transition: "all 0.2s",
                        }}
                      >
                        {s.label}
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* ── STEP 1: Storlek ── */}
              {step === 1 && service && (
                <motion.div key="s1" initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -16 }} transition={{ duration: 0.2 }}>
                  <h3 style={{ fontSize: 20, marginBottom: 6 }}>{service.inputLabel}</h3>
                  <p style={{ fontSize: 15, color: "var(--color-muted)", marginBottom: 24 }}>Ange storlek i kvadratmeter</p>
                  <div style={{ maxWidth: 320 }}>
                    <div style={{ position: "relative" }}>
                      <input
                        type="number"
                        min="1"
                        value={sqm}
                        onChange={(e) => setSqm(e.target.value)}
                        placeholder="t.ex. 75"
                        autoFocus
                        style={{
                          width: "100%", padding: "16px 60px 16px 20px", fontSize: 18, fontWeight: 600,
                          border: "2px solid var(--color-border)", borderRadius: 10, outline: "none",
                          fontFamily: "var(--font-body)", color: "var(--color-heading)",
                          transition: "border-color 0.2s",
                        }}
                        onFocus={(e) => (e.target.style.borderColor = "var(--color-primary)")}
                        onBlur={(e) => (e.target.style.borderColor = "var(--color-border)")}
                      />
                      <span style={{ position: "absolute", right: 20, top: "50%", transform: "translateY(-50%)", fontSize: 16, color: "var(--color-muted)", fontWeight: 500 }}>
                        m²
                      </span>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* ── STEP 2: Frekvens / Tillval ── */}
              {step === 2 && service && (
                <motion.div key="s2" initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -16 }} transition={{ duration: 0.2 }}>

                  {/* Hemstädning — frequency */}
                  {service.hasFrequency && (
                    <>
                      <h3 style={{ fontSize: 20, marginBottom: 6 }}>Hur ofta vill du ha städning?</h3>
                      <p style={{ fontSize: 15, color: "var(--color-muted)", marginBottom: 24 }}>Regelbunden städning ger bättre pris</p>
                      <div style={{ display: "grid", gap: 10 }}>
                        {service.frequencies.map((f) => {
                          const tier = service.tiers.find((t) => sqmNum >= t.min && sqmNum <= t.max);
                          const freqPrice = tier?.prices[f.id];
                          const isAvailable = freqPrice !== null;
                          return (
                            <button
                              key={f.id}
                              onClick={() => { if (isAvailable) { setFrequency(f.id); setStep(3); } }}
                              disabled={!isAvailable}
                              style={{
                                padding: "20px 24px", borderRadius: 10, cursor: isAvailable ? "pointer" : "default",
                                background: frequency === f.id ? "var(--color-primary)" : isAvailable ? "var(--color-bg-alt)" : "#f0f0f0",
                                color: frequency === f.id ? "white" : isAvailable ? "var(--color-heading)" : "var(--color-faint)",
                                border: frequency === f.id ? "2px solid var(--color-primary)" : "2px solid transparent",
                                display: "flex", alignItems: "center", justifyContent: "space-between",
                                fontSize: 16, fontWeight: 600, fontFamily: "var(--font-body)", textAlign: "left",
                                opacity: isAvailable ? 1 : 0.5, transition: "all 0.2s",
                              }}
                            >
                              <span>{f.label}</span>
                              {isAvailable && freqPrice ? (
                                <span style={{ fontSize: 15, fontWeight: 700, color: frequency === f.id ? "var(--color-accent)" : "var(--color-primary)" }}>
                                  {formatPrice(freqPrice)} kr/mån
                                </span>
                              ) : (
                                <span style={{ fontSize: 13, color: "var(--color-faint)" }}>Kontakta oss</span>
                              )}
                            </button>
                          );
                        })}
                      </div>
                    </>
                  )}

                  {/* Other services — addons */}
                  {service.hasAddons && service.addons && (
                    <>
                      <h3 style={{ fontSize: 20, marginBottom: 6 }}>Extra tillval</h3>
                      <p style={{ fontSize: 15, color: "var(--color-muted)", marginBottom: 24 }}>Valfritt — lägg till om du önskar</p>
                      <div style={{ display: "grid", gap: 8 }}>
                        {service.addons.map((addon) => (
                          <button
                            key={addon.id}
                            onClick={() => toggleAddon(addon.id)}
                            style={{
                              padding: "14px 18px", borderRadius: 10, cursor: "pointer",
                              background: selectedAddons.includes(addon.id) ? "var(--color-primary-light)" : "var(--color-bg-alt)",
                              border: selectedAddons.includes(addon.id) ? "2px solid var(--color-primary)" : "2px solid transparent",
                              display: "flex", alignItems: "center", justifyContent: "space-between",
                              textAlign: "left", fontFamily: "var(--font-body)", transition: "all 0.2s",
                            }}
                          >
                            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                              <div style={{
                                width: 22, height: 22, borderRadius: 6, flexShrink: 0,
                                border: selectedAddons.includes(addon.id) ? "none" : "2px solid var(--color-border)",
                                background: selectedAddons.includes(addon.id) ? "var(--color-primary)" : "white",
                                display: "flex", alignItems: "center", justifyContent: "center",
                              }}>
                                {selectedAddons.includes(addon.id) && <Check size={14} color="white" />}
                              </div>
                              <span style={{ fontSize: 15, fontWeight: 500, color: "var(--color-heading)" }}>{addon.label}</span>
                            </div>
                            <span style={{ fontSize: 14, fontWeight: 600, color: addon.isManual ? "var(--color-accent)" : "var(--color-muted)", whiteSpace: "nowrap", marginLeft: 12 }}>
                              {addon.isManual ? "Offert" : `${addon.price} kr`}
                            </span>
                          </button>
                        ))}
                      </div>
                    </>
                  )}
                </motion.div>
              )}

              {/* ── STEP 3: Resultat ── */}
              {step === 3 && service && (
                <motion.div key="s3" initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -16 }} transition={{ duration: 0.2 }}>

                  {/* Summary */}
                  <div style={{ marginBottom: 24, padding: "16px 20px", background: "var(--color-bg-alt)", borderRadius: 10, fontSize: 14, color: "var(--color-muted)" }}>
                    <strong style={{ color: "var(--color-heading)" }}>{service.label}</strong> · {sqmNum} m²
                    {frequency && ` · ${service.frequencies.find((f) => f.id === frequency)?.label}`}
                    {selectedAddons.length > 0 && ` · ${selectedAddons.length} tillval`}
                  </div>

                  {result?.type === "price" ? (
                    <div style={{ background: "var(--color-primary)", padding: 32, borderRadius: 12 }}>
                      <div style={{ fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,0.5)", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: 8 }}>
                        {service.type === "subscription" ? "Pris per månad efter RUT-avdrag" : "Totalt pris efter RUT-avdrag"}
                      </div>
                      <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginBottom: 4 }}>
                        <motion.span
                          className="text-shimmer"
                          initial={{ scale: 0.5, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
                          style={{ fontSize: 48, fontWeight: 800, fontFamily: "var(--font-body)", display: "inline-block" }}
                        >
                          {formatPrice(result.total)}
                        </motion.span>
                        <span style={{ fontSize: 18, color: "rgba(255,255,255,0.6)", fontWeight: 500 }}>
                          {result.unit}
                        </span>
                      </div>
                      {result.addonTotal > 0 && (
                        <div style={{ fontSize: 14, color: "rgba(255,255,255,0.5)", marginBottom: 20 }}>
                          Grundpris {formatPrice(result.basePrice)} kr + tillval {formatPrice(result.addonTotal)} kr
                        </div>
                      )}
                      <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 20 }}>
                        <button onClick={() => setStep(4)} className="btn-accent" style={{ border: "none", cursor: "pointer" }}>Boka nu <ArrowRight size={17} /></button>
                        <a href="tel:08-377176" className="btn-secondary" style={{ color: "white", borderColor: "rgba(255,255,255,0.2)" }}>
                          <Phone size={16} /> Ring oss
                        </a>
                      </div>
                    </div>
                  ) : (
                    <div style={{ background: "var(--color-accent-light)", border: "2px solid var(--color-accent)", padding: 32, borderRadius: 12, textAlign: "center" }}>
                      <h3 style={{ fontSize: 22, marginBottom: 8 }}>Kontakta oss för offert</h3>
                      <p style={{ fontSize: 15, color: "var(--color-muted)", marginBottom: 24, lineHeight: 1.6 }}>
                        {result?.note || "För den valda storleken behöver vi ge dig en personlig offert."}
                      </p>
                      <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
                        <a href="tel:08-377176" className="btn-primary"><Phone size={16} /> Ring 08-37 71 76</a>
                        <a href="/kontakt" className="btn-secondary">Kontakta oss</a>
                      </div>
                    </div>
                  )}
                </motion.div>
              )}

              {/* ── STEP 4: Bokningsformulär ── */}
              {step === 4 && service && (
                <motion.div key="s4" initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -16 }} transition={{ duration: 0.2 }}>
                  {!formSent ? (
                    <>
                      <h3 style={{ fontSize: 20, marginBottom: 6 }}>Fyll i dina uppgifter</h3>
                      {/* Summary */}
                      <div style={{ marginBottom: 20, padding: "12px 16px", background: "var(--color-bg-alt)", borderRadius: 8, fontSize: 14, color: "var(--color-muted)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 8 }}>
                        <span>
                          <strong style={{ color: "var(--color-heading)" }}>{service.label}</strong> · {sqmNum} m²
                          {frequency && ` · ${service.frequencies.find((f) => f.id === frequency)?.label}`}
                          {selectedAddons.length > 0 && ` · ${selectedAddons.length} tillval`}
                        </span>
                        {result?.type === "price" && (
                          <span style={{ fontWeight: 700, color: "var(--color-primary)", fontSize: 16 }}>{formatPrice(result.total)} {result.unit}</span>
                        )}
                      </div>
                      <form onSubmit={handleSubmit} style={{ display: "grid", gap: 12 }}>
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }} className="hero-form-grid">
                          <input name="fornamn" required placeholder="Förnamn *" style={{ width: "100%", padding: "14px 16px", fontSize: 15, border: "2px solid var(--color-border)", borderRadius: 10, outline: "none", fontFamily: "var(--font-body)" }} />
                          <input name="efternamn" required placeholder="Efternamn *" style={{ width: "100%", padding: "14px 16px", fontSize: 15, border: "2px solid var(--color-border)", borderRadius: 10, outline: "none", fontFamily: "var(--font-body)" }} />
                        </div>
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }} className="hero-form-grid">
                          <input name="adress" placeholder="Adress" style={{ width: "100%", padding: "14px 16px", fontSize: 15, border: "2px solid var(--color-border)", borderRadius: 10, outline: "none", fontFamily: "var(--font-body)" }} />
                          <input name="postnummer" placeholder="Postnummer" style={{ width: "100%", padding: "14px 16px", fontSize: 15, border: "2px solid var(--color-border)", borderRadius: 10, outline: "none", fontFamily: "var(--font-body)" }} />
                        </div>
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }} className="hero-form-grid">
                          <input name="email" type="email" required placeholder="Email *" style={{ width: "100%", padding: "14px 16px", fontSize: 15, border: "2px solid var(--color-border)", borderRadius: 10, outline: "none", fontFamily: "var(--font-body)" }} />
                          <input name="telefon" type="tel" required placeholder="Telefonnummer *" style={{ width: "100%", padding: "14px 16px", fontSize: 15, border: "2px solid var(--color-border)", borderRadius: 10, outline: "none", fontFamily: "var(--font-body)" }} />
                        </div>
                        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }} className="hero-form-grid">
                          <input name="ort" placeholder="Ort" style={{ width: "100%", padding: "14px 16px", fontSize: 15, border: "2px solid var(--color-border)", borderRadius: 10, outline: "none", fontFamily: "var(--font-body)" }} />
                          <input name="datum" type="text" placeholder="Önskat datum" onFocus={(e) => (e.target.type = "date")} style={{ width: "100%", padding: "14px 16px", fontSize: 15, border: "2px solid var(--color-border)", borderRadius: 10, outline: "none", fontFamily: "var(--font-body)" }} />
                        </div>
                        <textarea name="meddelande" rows={3} placeholder="Meddelande" style={{ width: "100%", padding: "14px 16px", fontSize: 15, border: "2px solid var(--color-border)", borderRadius: 10, outline: "none", fontFamily: "var(--font-body)", resize: "vertical" }} />

                        {/* Bilduppladdning */}
                        <div>
                          <label style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, padding: 12, border: "2px dashed var(--color-border)", borderRadius: 10, cursor: compressing ? "wait" : "pointer", background: "white", fontSize: 14, color: "var(--color-muted)", opacity: compressing ? 0.7 : 1 }}>
                            {compressing ? <Loader2 size={16} className="spin" /> : <Paperclip size={16} />}
                            <span>{compressing ? "Förbereder bilder..." : "Bifoga bilder (valfritt)"}</span>
                            <input type="file" accept="image/*" multiple onChange={handleFiles} disabled={compressing} style={{ display: "none" }} />
                          </label>
                          {files.length > 0 && (
                            <ul style={{ listStyle: "none", padding: 0, margin: "8px 0 0", display: "grid", gap: 4 }}>
                              {files.map((f, i) => (
                                <li key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10, padding: "6px 10px", background: "var(--color-bg-alt)", borderRadius: 6, fontSize: 12 }}>
                                  <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{f.name} <span style={{ color: "var(--color-muted)" }}>({(f.size / 1024).toFixed(0)} kB)</span></span>
                                  <button type="button" onClick={() => removeFile(i)} aria-label="Ta bort" style={{ background: "transparent", border: "none", cursor: "pointer", color: "var(--color-muted)", display: "flex", alignItems: "center", padding: 0 }}>
                                    <X size={14} />
                                  </button>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>

                        {/* Honeypot mot bot-submissions */}
                        <input type="text" name="company" tabIndex={-1} autoComplete="off" style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }} aria-hidden="true" />

                        {submitStatus === "error" && (
                          <p style={{ color: "var(--color-primary)", fontSize: 13, textAlign: "center", margin: 0 }}>
                            Något gick fel. Försök igen eller ring oss direkt.
                          </p>
                        )}

                        <button type="submit" className="btn-accent" disabled={submitStatus === "sending"} style={{ width: "100%", justifyContent: "center", padding: 16, border: "none", cursor: submitStatus === "sending" ? "default" : "pointer", fontSize: 16, opacity: submitStatus === "sending" ? 0.6 : 1 }}>
                          {submitStatus === "sending" ? "Skickar…" : "Skicka bokningsförfrågan"}
                        </button>
                      </form>
                    </>
                  ) : (
                    <div style={{ textAlign: "center", padding: "48px 20px" }}>
                      <div style={{ width: 56, height: 56, borderRadius: "50%", background: "var(--color-primary-light)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 16px" }}>
                        <Check size={28} color="var(--color-primary)" />
                      </div>
                      <h3 style={{ fontSize: 22, marginBottom: 8 }}>Tack för din bokning!</h3>
                      <p style={{ fontSize: 15, color: "var(--color-muted)" }}>Vi kontaktar dig inom kort.</p>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Navigation */}
          {!formSent && (
            <div style={{ padding: "16px clamp(20px, 4vw, 36px) 24px", display: "flex", justifyContent: "space-between" }}>
              <button
                onClick={() => setStep(Math.max(0, step - 1))}
                disabled={step === 0}
                style={{
                  padding: "10px 24px", background: "transparent", border: "1px solid var(--color-border)",
                  borderRadius: 8, cursor: step === 0 ? "default" : "pointer", opacity: step === 0 ? 0.3 : 1,
                  fontSize: 14, fontWeight: 500, fontFamily: "var(--font-body)", color: "var(--color-heading)", transition: "all 0.2s",
                }}
              >
                Tillbaka
              </button>
              {step === 1 && (
                <button
                  onClick={() => canAdvanceStep1 && setStep(2)}
                  disabled={!canAdvanceStep1}
                  className="btn-primary"
                  style={{ padding: "10px 24px", fontSize: 14, gap: 6, opacity: canAdvanceStep1 ? 1 : 0.4 }}
                >
                  Gå vidare <ChevronRight size={16} />
                </button>
              )}
              {step === 2 && !service?.hasFrequency && (
                <button
                  onClick={() => setStep(3)}
                  className="btn-primary"
                  style={{ padding: "10px 24px", fontSize: 14, gap: 6 }}
                >
                  Se pris <ChevronRight size={16} />
                </button>
              )}
            </div>
          )}
        </motion.div>

        {/* RUT info */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{
            marginTop: 24, padding: "18px 24px", background: "var(--color-accent-light)",
            border: "1px solid rgba(222, 160, 30, 0.2)", borderRadius: 10,
            display: "flex", alignItems: "flex-start", gap: 12,
          }}
        >
          <Sparkles size={18} style={{ color: "var(--color-accent)", flexShrink: 0, marginTop: 2 }} />
          <div>
            <div style={{ fontSize: 14, fontWeight: 700, color: "var(--color-heading)", marginBottom: 2 }}>
              RUT-avdrag — halva priset!
            </div>
            <div style={{ fontSize: 14, color: "var(--color-muted)", lineHeight: 1.5 }}>
              Som privatperson får du 50% skattereduktion på städtjänster, upp till 75 000 kr per person och år. Vi sköter allt pappersarbete.
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
