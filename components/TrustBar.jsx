"use client";

import { motion } from "framer-motion";
import { Shield, BadgeCheck, Leaf, HandHeart, Users } from "lucide-react";

const trustItems = [
  { icon: BadgeCheck, label: "RUT-avdrag 50%" },
  { icon: Shield, label: "Försäkrad verksamhet" },
  { icon: HandHeart, label: "Nöjd-kund-garanti" },
  { icon: Users, label: "Kollektivavtal" },
  { icon: Leaf, label: "Miljövänliga produkter" },
];

export default function TrustBar() {
  return (
    <section style={{ background: "var(--color-bg-alt)", borderTop: "1px solid var(--color-border-light)", borderBottom: "1px solid var(--color-border-light)" }}>
      <div className="container" style={{ padding: "24px 16px" }}>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "clamp(16px, 3vw, 40px)",
            flexWrap: "wrap",
          }}
        >
          {trustItems.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                fontSize: "clamp(12px, 1.3vw, 14px)",
                fontWeight: 500,
                color: "var(--color-heading)",
                whiteSpace: "nowrap",
              }}
            >
              <item.icon size={18} style={{ color: "var(--color-primary)", flexShrink: 0 }} />
              {item.label}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
