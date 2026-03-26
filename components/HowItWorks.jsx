"use client";

import { motion } from "framer-motion";
import { ClipboardList, UserCheck, Sparkles } from "lucide-react";

const steps = [
  {
    icon: ClipboardList,
    number: "01",
    title: "Berätta om din bostad",
    desc: "Fyll i vår kalkylator eller kontakta oss direkt. Vi anpassar städningen efter dina behov.",
  },
  {
    icon: UserCheck,
    number: "02",
    title: "Vi matchar dig med en städare",
    desc: "Du får en personlig städare som lär känna ditt hem. Samma person varje gång.",
  },
  {
    icon: Sparkles,
    number: "03",
    title: "Njut av ett rent hem",
    desc: "Luta dig tillbaka och njut. Är du inte nöjd åtgärdar vi det kostnadsfritt inom 48 timmar.",
  },
];

export default function HowItWorks() {
  return (
    <section className="section-alt">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: 60 }}
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
            Så fungerar det
          </span>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", marginBottom: 16 }}>
            Tre enkla steg till ett rent hem
          </h2>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 40,
            position: "relative",
          }}
          className="steps-grid"
        >
          {/* Connecting line (desktop only) */}
          <div
            className="steps-line hidden md:block"
            style={{
              position: "absolute",
              top: 52,
              left: "20%",
              right: "20%",
              height: 2,
              background: "var(--color-border)",
              zIndex: 0,
            }}
          />

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              style={{
                textAlign: "center",
                position: "relative",
                zIndex: 1,
              }}
            >
              <div
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: "50%",
                  background: "white",
                  border: "3px solid var(--color-primary)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 24px",
                  position: "relative",
                }}
              >
                <step.icon size={32} style={{ color: "var(--color-primary)" }} />
                <span
                  style={{
                    position: "absolute",
                    top: -6,
                    right: -6,
                    width: 28,
                    height: 28,
                    borderRadius: "50%",
                    background: "var(--color-accent)",
                    color: "white",
                    fontSize: 12,
                    fontWeight: 700,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {step.number}
                </span>
              </div>
              <h3 style={{ fontSize: 22, marginBottom: 10 }}>{step.title}</h3>
              <p
                style={{
                  fontSize: 15,
                  color: "var(--color-muted)",
                  lineHeight: 1.6,
                  maxWidth: 300,
                  margin: "0 auto",
                }}
              >
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @media (max-width: 768px) {
          .steps-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
      `}</style>
    </section>
  );
}
