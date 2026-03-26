"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, Phone } from "lucide-react";
import Image from "next/image";

const services = [
  {
    title: "Kontorstädning",
    desc: "Vi håller ert kontor snyggt och fräscht för medarbetare och kunder. Regelbunden städning anpassad efter era behov och schema, alltid med en egen kontaktperson.",
    href: "/kontorstadning",
    image: "/images/kontor-hero.jpg",
  },
  {
    title: "Fönsterputs företag",
    desc: "Professionell fönsterputs för kontor, butiker och fastigheter. Vi har utrustningen och erfarenheten för alla typer av fönster — även svåråtkomliga.",
    href: "/fonsterputs-foretag",
    image: "/images/tjanst-fonster.jpg",
  },
  {
    title: "Fönsterputs butik",
    desc: "Rena skyltfönster gör skillnad. Vi ser till att era butiksfönster alltid är skinande rena och ger ett professionellt intryck åt era kunder.",
    href: "/fonsterputs-butik",
    image: "/images/foretag-butik-hero.jpeg",
  },
  {
    title: "Butiksservice",
    desc: "Missnöjd med ert nuvarande städföretag? Vi erbjuder komplett butiksservice med flexibla lösningar anpassade efter era öppettider och behov.",
    href: "/butiksservice",
    image: "/images/foretag-butik.png",
  },
  {
    title: "Storstädning företag",
    desc: "Extra grundlig städning av era lokaler — perfekt inför revision, flytt eller som säsongsrengöring. Vi tar hand om allt från golv till tak.",
    href: "/storstadning-foretag",
    image: "/images/kontor-stad.jpg",
  },
  {
    title: "Flyttstädning företag",
    desc: "Vi sköter flyttstädningen av era lokaler så att ni kan fokusera på verksamheten. Garanterat godkänt resultat vid avsyning.",
    href: "/flyttstadning-foretag",
    image: "/images/flytt-foretag.jpg",
  },
  {
    title: "Golvvård",
    desc: "Vi utför golvvård i hela Storstockholm på ett hållbart och skonsamt sätt. Slipning, polering och behandling av alla typer av golv.",
    href: "/golvvard",
    image: "/images/kontor-notar.jpg",
  },
  {
    title: "Trappstädning",
    desc: "Välstädade trappor och entréer bidrar till ökad trivsel och ett professionellt intryck. Regelbunden trappstädning till fast pris.",
    href: "/trappstadning",
    image: "/images/foretag-trapp.jpeg",
  },
];

export default function ForetagContent() {
  return (
    <>
      {/* Breadcrumb */}
      <div style={{ background: "var(--color-bg-alt)", borderBottom: "1px solid var(--color-border-light)" }}>
        <nav aria-label="Brödsmulor" className="container" style={{ padding: "12px 20px", fontSize: 13, color: "var(--color-muted)", display: "flex", alignItems: "center", gap: 4 }}>
          <a href="/" style={{ color: "var(--color-muted)", textDecoration: "none" }}>Hem</a>
          <ChevronRight size={12} />
          <span style={{ color: "var(--color-heading)", fontWeight: 500 }}>Företag</span>
        </nav>
      </div>

      {/* Hero */}
      <section style={{ background: "var(--color-primary)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.05, backgroundImage: "repeating-linear-gradient(-45deg, transparent, transparent 20px, rgba(255,255,255,0.4) 20px, rgba(255,255,255,0.4) 21px)" }} />
        <div className="container" style={{ padding: "clamp(48px, 8vw, 80px) 20px", textAlign: "center", position: "relative", zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-accent)", marginBottom: 12, display: "block" }}>Företag</span>
            <h1 style={{ fontSize: "clamp(32px, 5vw, 52px)", color: "white", marginBottom: 16 }}>
              Alla våra tjänster för ert företag
            </h1>
            <p style={{ fontSize: 18, color: "rgba(255,255,255,0.8)", maxWidth: 600, margin: "0 auto", lineHeight: 1.6 }}>
              Professionell och kvalitetssäkrad leverans, varje gång. Alltid med en egen kontaktperson och ett genomtänkt miljö- och hållbarhetsarbete.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service grid */}
      <section className="section">
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: 24,
            }}
          >
            {services.map((service, i) => (
              <motion.a
                key={service.title}
                href={service.href}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  background: "white",
                  border: "1px solid var(--color-border)",
                  borderRadius: 12,
                  overflow: "hidden",
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-6px)";
                  e.currentTarget.style.boxShadow = "0 16px 48px rgba(0,114,185,0.1)";
                  e.currentTarget.style.borderColor = "var(--color-primary)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.borderColor = "var(--color-border)";
                }}
              >
                <div style={{ aspectRatio: "4/3", overflow: "hidden", position: "relative" }} className="service-image-card">
                  <Image
                    src={service.image}
                    alt={`${service.title} Stockholm — Timeout Service`}
                    fill
                    sizes="(max-width: 768px) 100vw, 350px"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div style={{ padding: 24, flex: 1, display: "flex", flexDirection: "column" }}>
                  <h2 style={{ fontSize: 22, marginBottom: 10, color: "var(--color-heading)" }}>{service.title}</h2>
                  <p style={{ fontSize: 15, color: "var(--color-muted)", lineHeight: 1.6, flex: 1, marginBottom: 16 }}>
                    {service.desc}
                  </p>
                  <span style={{ fontSize: 14, fontWeight: 600, color: "var(--color-primary)", display: "inline-flex", alignItems: "center", gap: 6 }}>
                    Läs mer <ArrowRight size={15} />
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--color-primary)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.05, backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 30px, rgba(255,255,255,0.5) 30px, rgba(255,255,255,0.5) 31px)" }} />
        <div className="container" style={{ padding: "72px 20px", textAlign: "center", position: "relative", zIndex: 1 }}>
          <h2 style={{ fontSize: "clamp(26px, 4vw, 38px)", color: "white", marginBottom: 14 }}>
            Behöver ert företag professionell städning?
          </h2>
          <p style={{ fontSize: 17, color: "rgba(255,255,255,0.8)", maxWidth: 520, margin: "0 auto 32px", lineHeight: 1.6 }}>
            Vi anpassar oss helt efter era behov och önskemål. Kontakta oss för en kostnadsfri offert.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: 14, flexWrap: "wrap" }}>
            <a className="btn-accent" href="/boka">Få en kostnadsfri offert <ArrowRight size={17} /></a>
            <a className="btn-secondary" href="tel:08-377176" style={{ color: "white", borderColor: "rgba(255,255,255,0.25)" }}>
              <Phone size={16} /> Ring 08-37 71 76
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
