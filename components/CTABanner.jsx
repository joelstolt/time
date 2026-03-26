"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

export default function CTABanner() {
  return (
    <section
      style={{
        background: "var(--color-primary)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle pattern */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          opacity: 0.05,
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 30px,
            rgba(255,255,255,0.5) 30px,
            rgba(255,255,255,0.5) 31px
          )`,
        }}
      />

      {/* Radial glow */}
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "60%", height: "80%", background: "radial-gradient(ellipse, rgba(222,160,30,0.12) 0%, transparent 70%)", pointerEvents: "none" }} />

      <div
        className="container"
        style={{
          padding: "80px 20px",
          textAlign: "center",
          position: "relative",
          zIndex: 1,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 42px)",
              color: "white",
              marginBottom: 16,
            }}
          >
            Redo att boka din städning?
          </h2>
          <p
            style={{
              fontSize: 18,
              color: "rgba(255,255,255,0.8)",
              maxWidth: 520,
              margin: "0 auto 36px",
              lineHeight: 1.6,
            }}
          >
            Få en kostnadsfri offert eller boka direkt. Vi finns här för att
            hjälpa dig — varje dag.
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              gap: 16,
              flexWrap: "wrap",
            }}
          >
            <a className="btn-accent" href="/boka">
              Få en kostnadsfri offert <ArrowRight size={18} />
            </a>
            <a
              className="btn-secondary"
              href="tel:08-377176"
              style={{
                color: "white",
                borderColor: "rgba(255,255,255,0.25)",
              }}
            >
              <Phone size={17} /> Ring 08-37 71 76
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
