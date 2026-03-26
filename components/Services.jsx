"use client";

import { motion } from "framer-motion";
import { ArrowRight, Award, ShieldCheck, Smartphone } from "lucide-react";

const serviceCards = [
  { title: "Fönsterputs", href: "/fonsterputs", image: "/images/fonsterputs.png" },
  { title: "Flyttstädning", href: "/flyttstadning", image: "/images/flyttstadning.png" },
  { title: "Hemstädning", href: "/hemstadning", image: "/images/hemstadning.png" },
];

const badges = [
  { icon: Award, title: "Nöjd-kund-garanti", desc: "Vi levererar bra städning" },
  { icon: ShieldCheck, title: "Trygg & stabil ekonomi", desc: "Högsta kreditvärdighet" },
  { icon: Smartphone, title: "Digital städrapport", desc: "Se vad som utförts i mobilen" },
];

export default function Services() {
  return (
    <section className="section">
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 64,
            alignItems: "center",
          }}
          className="services-layout"
        >
          {/* Left — service image cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 16,
            }}
          >
            {serviceCards.map((card, i) => (
              <a
                key={card.title}
                href={card.href}
                className="service-image-card"
                style={{
                  position: "relative",
                  display: "block",
                  borderRadius: 12,
                  overflow: "hidden",
                  aspectRatio: i === 2 ? "2/1.2" : "1/1.2",
                  gridColumn: i === 2 ? "1 / -1" : "auto",
                  background: "var(--color-primary-light)",
                  textDecoration: "none",
                }}
              >
                <img
                  src={card.image}
                  alt={card.title}
                  style={{
                    position: "absolute",
                    inset: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: "20px",
                    background: "linear-gradient(to top, rgba(0,0,0,0.6), transparent)",
                  }}
                >
                  <span style={{ color: "white", fontSize: 18, fontWeight: 700, fontFamily: "var(--font-heading)" }}>
                    {card.title}
                  </span>
                </div>
              </a>
            ))}
          </motion.div>

          {/* Right — text content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span
              style={{
                fontSize: 13,
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--color-primary)",
                marginBottom: 12,
                display: "block",
              }}
            >
              Privatperson
            </span>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 38px)", marginBottom: 20 }}>
              Vad kan vi hjälpa er med?
            </h2>
            <p style={{ fontSize: 16, color: "var(--color-body)", lineHeight: 1.7, marginBottom: 16 }}>
              Timeout Service AB är ett familjeägt företag. Vi har kompetensen samt de rätta resurserna och metoderna för att utföra alla typer av fönsterputs- samt professionella städtjänster för både privatpersoner och små och stora företag.
            </p>
            <p style={{ fontSize: 16, color: "var(--color-body)", lineHeight: 1.7, marginBottom: 32 }}>
              Vi hjälper till med bl.a. flyttstädning, visningsstädning, storstädning, byggstädning, fönsterputs osv. Se alla våra privata städtjänster så kan du läsa mer.
            </p>

            <div style={{ display: "flex", gap: 12, marginBottom: 40, flexWrap: "wrap" }}>
              <a href="/boka" className="btn-primary" style={{ padding: "14px 28px", fontSize: 15 }}>
                Boka tid
              </a>
              <a href="/tjanster" className="btn-secondary" style={{ padding: "14px 28px", fontSize: 15 }}>
                Våra tjänster <ArrowRight size={16} />
              </a>
            </div>

            {/* Trust badges */}
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {badges.map((badge) => (
                <div key={badge.title} style={{ display: "flex", alignItems: "center", gap: 14 }}>
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 10,
                      background: "var(--color-primary-light)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <badge.icon size={22} style={{ color: "var(--color-primary)" }} />
                  </div>
                  <div>
                    <div style={{ fontSize: 15, fontWeight: 700, color: "var(--color-heading)" }}>{badge.title}</div>
                    <div style={{ fontSize: 14, color: "var(--color-muted)" }}>{badge.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx global>{`
        @media (max-width: 768px) {
          .services-layout {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}
