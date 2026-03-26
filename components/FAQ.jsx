"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Vad kostar hemstädning?",
    a: "Priset beror på bostadens storlek och hur ofta du vill ha städning. Använd vår priskalkylator för att få ett prisförslag direkt. Alla priser visas efter RUT-avdrag (50%).",
  },
  {
    q: "Vad är RUT-avdrag?",
    a: "RUT-avdrag innebär att du som privatperson kan få 50% skattereduktion på hushållsnära tjänster som städning, upp till 75 000 kr per person och år. Vi hanterar allt pappersarbete åt dig.",
  },
  {
    q: "Får jag samma städare varje gång?",
    a: "Ja, vi matchar dig med en personlig städare som lär känna ditt hem och dina önskemål. Du får alltid samma person vid varje tillfälle.",
  },
  {
    q: "Är ni försäkrade?",
    a: "Ja, vi har en omfattande företagsförsäkring som täcker eventuella skador. Alla medarbetare är anställda med kollektivavtal och bakgrundskontrollerade.",
  },
  {
    q: "Hur snabbt kan ni komma?",
    a: "Vi kan oftast boka in dig inom 2-3 arbetsdagar. Vid brådskande behov, kontakta oss så gör vi vårt bästa för att hitta en tid snabbt.",
  },
  {
    q: "Vad händer om jag inte är nöjd?",
    a: "Vi har nöjd-kund-garanti. Om du inte är helt nöjd med städningen åtgärdar vi det kostnadsfritt inom 48 timmar.",
  },
  {
    q: "Vilka städprodukter använder ni?",
    a: "Vi använder enbart miljömärkta och Svanenmärkta städprodukter. Vi tar med all utrustning och alla produkter som behövs.",
  },
];

function FAQItem({ faq, isOpen, onClick }) {
  return (
    <div
      style={{
        borderBottom: "1px solid var(--color-border)",
      }}
    >
      <button
        onClick={onClick}
        style={{
          width: "100%",
          padding: "24px 0",
          background: "none",
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 16,
          textAlign: "left",
        }}
      >
        <span
          style={{
            fontSize: 17,
            fontWeight: 600,
            color: "var(--color-heading)",
            fontFamily: "var(--font-body)",
          }}
        >
          {faq.q}
        </span>
        <span
          style={{
            width: 32,
            height: 32,
            borderRadius: "50%",
            background: isOpen ? "var(--color-primary)" : "var(--color-primary-light)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            transition: "all 0.2s ease",
          }}
        >
          {isOpen ? (
            <Minus size={16} color="white" />
          ) : (
            <Plus size={16} color="var(--color-primary)" />
          )}
        </span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            style={{ overflow: "hidden" }}
          >
            <p
              style={{
                fontSize: 15,
                color: "var(--color-muted)",
                lineHeight: 1.7,
                paddingBottom: 24,
                maxWidth: 700,
              }}
            >
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.a,
      },
    })),
  };

  return (
    <section className="section">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="container" style={{ maxWidth: 780 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: 48 }}
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
            Vanliga frågor
          </span>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)" }}>
            Har du frågor? Vi har svaren.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ borderTop: "1px solid var(--color-border)" }}
        >
          {faqs.map((faq, i) => (
            <FAQItem
              key={i}
              faq={faq}
              isOpen={openIndex === i}
              onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
