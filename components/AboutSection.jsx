"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const highlights = [
  "35 års erfarenhet i bagaget",
  "Resultat med högsta kvalitet",
  "Inget uppdrag är för stort eller för litet",
  "Bästa tänkbara service enligt era önskemål",
];

export default function AboutSection() {
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
          className="about-layout"
        >
          {/* Left — image placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 12,
            }}
          >
            <div
              style={{
                borderRadius: 12,
                overflow: "hidden",
                aspectRatio: "3/4",
                background: "var(--color-primary-light)",
                gridRow: "1 / 3",
              }}
            >
              <img src="/images/staff-kitchen.jpg" alt="Timeout Service — köksstädning" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div
              style={{
                borderRadius: 12,
                overflow: "hidden",
                aspectRatio: "1/1",
                background: "var(--color-primary-light)",
              }}
            >
              <img src="/images/staff-bedroom.jpg" alt="Timeout Service — sovrum" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div
              style={{
                borderRadius: 12,
                overflow: "hidden",
                aspectRatio: "1/1",
                background: "var(--color-primary-light)",
              }}
            >
              <img src="/images/staff-office.jpg" alt="Timeout Service — kontorsstädning" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          </motion.div>

          {/* Right — text */}
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
              Om Timeout Service
            </span>
            <h2 style={{ fontSize: "clamp(26px, 3.5vw, 36px)", marginBottom: 20, lineHeight: 1.25 }}>
              Vi utför våra tjänster i rätt tid, på rätt sätt och enligt överenskomna villkor
            </h2>
            <p style={{ fontSize: 16, color: "var(--color-body)", lineHeight: 1.7, marginBottom: 16 }}>
              Timeout Service AB är ett familjeägt företag. Vi har kompetensen samt de rätta resurserna och metoderna för att utföra alla typer av fönsterputs- samt professionella städtjänster för både privatpersoner samt små och stora företag.
            </p>
            <p style={{ fontSize: 16, color: "var(--color-body)", lineHeight: 1.7, marginBottom: 28 }}>
              Vi hjälper till med bl.a. flyttstädning, visningsstädning, storstädning, byggstädning, fönsterputs osv.
            </p>

            {/* Highlights */}
            <div style={{ display: "flex", flexDirection: "column", gap: 14, marginBottom: 32 }}>
              {highlights.map((item) => (
                <div key={item} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <CheckCircle size={20} style={{ color: "var(--color-primary)", flexShrink: 0 }} />
                  <span style={{ fontSize: 15, fontWeight: 500, color: "var(--color-heading)" }}>{item}</span>
                </div>
              ))}
            </div>

            <a href="/om-oss" className="btn-primary" style={{ padding: "14px 28px", fontSize: 15 }}>
              Läs mer om oss
            </a>
          </motion.div>
        </div>
      </div>

      <style jsx global>{`
        @media (max-width: 768px) {
          .about-layout {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
      `}</style>
    </section>
  );
}
