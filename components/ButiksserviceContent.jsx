"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone, ChevronRight, Sparkles, ShoppingBag, Sun, Footprints, Check, Percent } from "lucide-react";

const tjanster = [
  { icon: Sun, title: "Fönsterputs", desc: "Professionell utrustning och verktyg för alla typer av butiksfönster. Rutinmässiga och krävande uppdrag i hela Stockholm.", href: "/fonsterputs-butik" },
  { icon: Footprints, title: "Golvvård", desc: "Undersökningar visar att 75% av butiksbesökare lägger märke till polerade golv. Vi erbjuder heltäckande program för alla golvtyper med hållbara, miljövänliga metoder.", href: "/golvvard" },
  { icon: ShoppingBag, title: "Butiksstädning", desc: "Rena och attraktiva butikslokaler förbättrar kundupplevelsen och bidrar till långsiktig lönsamhet. Vi anpassar oss efter era öppettider.", href: "/butiksservice" },
];

export default function ButiksserviceContent() {
  return (
    <>
      <div style={{ background: "var(--color-bg-alt)", borderBottom: "1px solid var(--color-border-light)" }}>
        <nav aria-label="Brödsmulor" className="container" style={{ padding: "12px 20px", fontSize: 13, color: "var(--color-muted)", display: "flex", alignItems: "center", gap: 4 }}>
          <a href="/" style={{ color: "var(--color-muted)", textDecoration: "none" }}>Hem</a><ChevronRight size={12} />
          <a href="/foretag" style={{ color: "var(--color-muted)", textDecoration: "none" }}>Företag</a><ChevronRight size={12} />
          <span style={{ color: "var(--color-heading)", fontWeight: 500 }}>Butiksservice</span>
        </nav>
      </div>

      {/* Hero */}
      <section className="section">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }} className="services-layout">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
              <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-primary)", marginBottom: 12, display: "block" }}>Företag</span>
              <h1 style={{ fontSize: "clamp(32px, 5vw, 48px)", marginBottom: 20, lineHeight: 1.1 }}>Hållbar butiksservice i Stockholm</h1>
              <p style={{ fontSize: 17, color: "var(--color-body)", lineHeight: 1.7, marginBottom: 16 }}>
                Missnöjd med ert nuvarande städföretag? Vi erbjuder kompetens, resurser och metoder för professionell butiksstädning och fönsterputs. Boka både städning och fönsterputs — och få rabatt.
              </p>
              <p style={{ fontSize: 15, color: "var(--color-muted)", lineHeight: 1.6, marginBottom: 32 }}>
                Vi städar sju dagar i veckan, året runt — anpassat efter era öppettider och behov. Personalen är vår viktigaste resurs och vi säkerställer bästa möjliga förutsättningar för varje uppdrag.
              </p>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <a href="/boka" className="btn-primary">Boka kostnadsfritt kundbesök</a>
                <a href="tel:08-377176" className="btn-secondary"><Phone size={16} /> 08-37 71 76</a>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
              <img src="/images/foretag-butik.png" alt="Butiksservice Stockholm — Timeout Service" style={{ width: "100%", borderRadius: 12, aspectRatio: "16/10", objectFit: "cover" }} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Rabatt */}
      <section className="section-alt" style={{ paddingTop: 48, paddingBottom: 48 }}>
        <div className="container" style={{ maxWidth: 700 }}>
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
            style={{ display: "flex", alignItems: "center", gap: 20, background: "var(--color-primary)", borderRadius: 16, padding: "clamp(24px, 3vw, 32px)" }} className="services-layout">
            <div style={{ width: 64, height: 64, borderRadius: "50%", background: "var(--color-accent)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <Percent size={28} color="white" />
            </div>
            <div>
              <h3 style={{ fontSize: 20, color: "white", marginBottom: 6 }}>Rabatt vid kombination</h3>
              <p style={{ fontSize: 15, color: "rgba(255,255,255,0.8)", lineHeight: 1.5 }}>
                Boka butiksstädning och fönsterputs tillsammans — och få förmånligt pris på hela paketet.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Tjänster */}
      <section className="section">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ textAlign: "center", marginBottom: 48 }}>
            <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-primary)", marginBottom: 12, display: "block" }}>Våra tjänster</span>
            <h2 style={{ fontSize: "clamp(26px, 4vw, 38px)" }}>Allt er butik behöver</h2>
          </motion.div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }} className="why-grid">
            {tjanster.map((t, i) => (
              <motion.a key={t.title} href={t.href} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
                style={{ padding: 32, background: "white", border: "1px solid var(--color-border)", borderRadius: 12, textDecoration: "none", transition: "all 0.3s", borderTop: "3px solid var(--color-primary)" }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,114,185,0.08)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}>
                <div style={{ width: 48, height: 48, borderRadius: 10, background: "var(--color-primary-light)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18 }}>
                  <t.icon size={22} style={{ color: "var(--color-primary)" }} />
                </div>
                <h3 style={{ fontSize: 20, marginBottom: 8, color: "var(--color-heading)" }}>{t.title}</h3>
                <p style={{ fontSize: 15, color: "var(--color-muted)", lineHeight: 1.6, marginBottom: 14 }}>{t.desc}</p>
                <span style={{ fontSize: 14, fontWeight: 600, color: "var(--color-primary)", display: "inline-flex", alignItems: "center", gap: 6 }}>Läs mer <ArrowRight size={14} /></span>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Varför oss */}
      <section className="section-alt">
        <div className="container" style={{ maxWidth: 700 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} style={{ textAlign: "center", marginBottom: 36 }}>
            <h2 style={{ fontSize: "clamp(24px, 3.5vw, 32px)" }}>Varför Timeout Service?</h2>
          </motion.div>
          <div style={{ display: "grid", gap: 10 }}>
            {[
              "Öppet 7 dagar i veckan, året runt",
              "Anpassar oss efter era öppettider och behov",
              "Fast pris — bestäms vid kostnadsfritt kundbesök",
              "Miljövänliga produkter och metoder",
              "Egen personal — inga underleverantörer",
              "35 års erfarenhet i branschen",
              "Rabatt vid kombination av tjänster",
            ].map((item) => (
              <div key={item} style={{ display: "flex", alignItems: "center", gap: 10, padding: "14px 18px", background: "white", borderRadius: 8, fontSize: 15, color: "var(--color-body)" }}>
                <Check size={18} style={{ color: "var(--color-primary)", flexShrink: 0 }} /> {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--color-primary)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.05, backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 30px, rgba(255,255,255,0.5) 30px, rgba(255,255,255,0.5) 31px)" }} />
        <div className="container" style={{ padding: "80px 20px", textAlign: "center", position: "relative", zIndex: 1 }}>
          <h2 style={{ fontSize: "clamp(26px, 4vw, 40px)", color: "white", marginBottom: 14 }}>Boka butiksservice i Stockholm</h2>
          <p style={{ fontSize: 17, color: "rgba(255,255,255,0.8)", maxWidth: 520, margin: "0 auto 32px" }}>Kostnadsfritt kundbesök. Vi kommer överens om ett fast pris tillsammans.</p>
          <div style={{ display: "flex", justifyContent: "center", gap: 14, flexWrap: "wrap" }}>
            <a className="btn-accent" href="/boka">Boka kundbesök <ArrowRight size={17} /></a>
            <a className="btn-secondary" href="tel:08-377176" style={{ color: "white", borderColor: "rgba(255,255,255,0.25)" }}><Phone size={16} /> Ring 08-37 71 76</a>
          </div>
        </div>
      </section>
    </>
  );
}
