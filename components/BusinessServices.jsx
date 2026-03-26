"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const serviceCards = [
  { title: "Fönsterputs butik", href: "/fonsterputs-butik", image: "/images/fonsterputs-butik.png" },
  { title: "Kontorstädning", href: "/kontorstadning", image: "/images/kontorstadning.png" },
  { title: "Fönsterputs företag", href: "/fonsterputs-foretag", image: "/images/fonsterputs-foretag.png" },
];

export default function BusinessServices() {
  return (
    <section className="section-alt">
      <div className="container">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 64,
            alignItems: "center",
          }}
          className="biz-layout"
        >
          {/* Left — text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
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
              Företag
            </span>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 38px)", marginBottom: 20 }}>
              Företagstjänster
            </h2>
            <p style={{ fontSize: 16, color: "var(--color-body)", lineHeight: 1.7, marginBottom: 16 }}>
              Våra företagstjänster innebär både professionell och kvalitetssäkrad leverans, varje gång. Alltid med egen kontaktperson hos oss, och alltid med ett genomtänkt miljö- och hållbarhetsarbete.
            </p>
            <p style={{ fontSize: 16, color: "var(--color-body)", lineHeight: 1.7, marginBottom: 32 }}>
              Är du missnöjd med ditt nuvarande städföretag? Vi är medvetna om att alla kunder har olika behov, så vi anpassar oss efter de önskemål just ni har!
            </p>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <a href="/boka" className="btn-primary" style={{ padding: "14px 28px", fontSize: 15 }}>
                Boka tid
              </a>
              <a href="/foretag" className="btn-secondary" style={{ padding: "14px 28px", fontSize: 15 }}>
                Våra företagstjänster <ArrowRight size={16} />
              </a>
            </div>
          </motion.div>

          {/* Right — service cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
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
                <Image
                  src={card.image}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 300px"
                  style={{ objectFit: "cover" }}
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
        </div>
      </div>

      <style jsx global>{`
        @media (max-width: 768px) {
          .biz-layout {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}
