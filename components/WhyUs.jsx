"use client";

import { motion } from "framer-motion";
import { Leaf, Shield, Heart, SmilePlus, Headset, UserCheck, Clock } from "lucide-react";

const reasons = [
  {
    icon: Leaf,
    title: "Utveckling av miljöpolicy",
    text: "Vi gör vårt bästa för att skapa förutsättningar till miljöförbättring. Utveckling av miljöpolicy sker kontinuerligt och det är ett arbete som ständigt är under förbättring. Vi använder alltid miljömärkta städprodukter och i största mån flergångsartiklar.",
  },
  {
    icon: Shield,
    title: "Vi prioriterar kvalitet och säkerhet",
    text: "Efter 35 års erfarenhet i branschen har vi sett och utfört det mesta många gånger. Vår kunskap om olika bäst lämpade städmetoder i olika situationer sparar er både tid och pengar. Rätt utrustning och material säkerställer kvaliteten och säkerheten.",
  },
  {
    icon: Heart,
    title: "Motiverade och engagerade medarbetare",
    text: "Personalen är vår absolut viktigaste resurs! Med strikta rutiner runt nyckel- och kodhantering, samt välutbildad personal, ser vi till att våra kunder kan känna sig trygga. En bakgrundskontroll görs på alla medarbetare. Alla är anställda enligt kollektivavtal.",
  },
];

const usps = [
  { icon: SmilePlus, label: "Nöjd-kund-garanti" },
  { icon: Headset, label: "Snabb kundservice" },
  { icon: UserCheck, label: "Samma städerska" },
  { icon: Clock, label: "Ingen bindningstid" },
];

export default function WhyUs() {
  return (
    <section className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: 56 }}
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
            Därför Timeout Service
          </span>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 38px)", marginBottom: 16 }}>
            Varför vi är ett bra alternativ
          </h2>
        </motion.div>

        {/* Reason cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 28,
            marginBottom: 56,
          }}
          className="why-grid"
        >
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              className="premium-card"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              style={{
                padding: 32,
                background: "white",
                border: "1px solid var(--color-border)",
                borderRadius: 12,
                borderTop: "3px solid var(--color-primary)",
              }}
            >
              <div
                style={{
                  width: 52,
                  height: 52,
                  borderRadius: 10,
                  background: "var(--color-primary-light)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 20,
                }}
              >
                <reason.icon size={24} style={{ color: "var(--color-primary)" }} />
              </div>
              <h3 style={{ fontSize: 20, marginBottom: 12 }}>{reason.title}</h3>
              <p style={{ fontSize: 15, color: "var(--color-muted)", lineHeight: 1.7 }}>
                {reason.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* USP badges row */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="usp-badges"
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 16,
            flexWrap: "wrap",
          }}
        >
          {usps.map((usp) => (
            <div
              key={usp.label}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                padding: "14px 24px",
                background: "var(--color-primary-light)",
                borderRadius: 10,
                fontSize: 15,
                fontWeight: 600,
                color: "var(--color-primary)",
              }}
            >
              <usp.icon size={20} />
              {usp.label}
            </div>
          ))}
        </motion.div>

        {/* Read more */}
        <div style={{ textAlign: "center", marginTop: 40 }}>
          <a href="/om-oss" className="btn-secondary" style={{ padding: "14px 28px", fontSize: 15 }}>
            Läs mer om oss
          </a>
        </div>
      </div>

      <style jsx global>{`
        @media (max-width: 768px) {
          .why-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
