"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    text: "Jag har alltid fått ett fantastiskt personligt bemötande och ett perfekt städresultat, både vid hemstädning och vid städning av vår förskola. Jag är väldigt petig med min städning och aldrig blivit nöjd med något annat städbolag tidigare. Jag rekommenderar varmt Timeout Service med Håkan i spetsen!",
    name: "Tina Hom",
    role: "Privatperson",
    rating: 5,
  },
  {
    text: "När jag kontaktade Timeout Service fick jag svar otroligt snabbt, redan några dagar senare kom dom förbi och kollade och kom fram med ett bra pris. Är väldigt nöjd med deras service, jag behöver inte oroa mig för nånting när det gäller fönsterna. Det blir alltid skinande rent :)",
    name: "Jennifer Saksen Bengtsson",
    role: "Pressbyrån Sveavägen",
    rating: 5,
  },
  {
    text: "Riktigt duktiga, anlitar både privat och via företaget. Är alltid i tid och hjälper till om man behöver något! Alltid ett bra resultat.",
    name: "Aleksandra",
    role: "Coop Västertorp",
    rating: 5,
  },
  {
    text: "Vi har anlitat TimeOutService sedan 2016 både för regelbunden kontorsstädning samt för våra kunders räkning. De har alltid agerat utifrån våra önskemål och är otroligt enkla och flexibla att ha att göra med.",
    name: "Maria Ragnarsson",
    role: "Notar",
    rating: 5,
  },
];

function StarRating({ rating }) {
  return (
    <div style={{ display: "flex", gap: 2 }}>
      {[...Array(rating)].map((_, i) => (
        <Star key={i} size={16} fill="var(--color-accent)" color="var(--color-accent)" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="section-alt">
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
            Referenser
          </span>
          <h2 style={{ fontSize: "clamp(28px, 4vw, 38px)", marginBottom: 16 }}>
            Vad våra kunder säger
          </h2>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: 24,
          }}
        >
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              style={{
                padding: 32,
                background: "white",
                border: "1px solid var(--color-border)",
                borderRadius: 12,
                position: "relative",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Quote
                size={32}
                style={{
                  color: "var(--color-primary-light)",
                  position: "absolute",
                  top: 20,
                  right: 20,
                }}
              />
              <StarRating rating={review.rating} />
              <p
                style={{
                  fontSize: 15,
                  color: "var(--color-body)",
                  lineHeight: 1.7,
                  marginTop: 16,
                  marginBottom: 24,
                  flex: 1,
                }}
              >
                &ldquo;{review.text}&rdquo;
              </p>
              <div style={{ borderTop: "1px solid var(--color-border-light)", paddingTop: 16 }}>
                <div style={{ fontSize: 15, fontWeight: 700, color: "var(--color-heading)" }}>
                  {review.name}
                </div>
                <div style={{ fontSize: 13, color: "var(--color-muted)" }}>
                  {review.role}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
