"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const images = [
  { src: "/images/badrum-fore-efter/badrum-4.jpg", alt: "Badrumsstädning före och efter — kalkborttagning kakel" },
  { src: "/images/badrum-fore-efter/badrum-3.jpg", alt: "Badrumsstädning före och efter — fogarna rena" },
  { src: "/images/badrum-fore-efter/badrum-2.jpg", alt: "Badrumsstädning före och efter — mögelborttagning" },
  { src: "/images/badrum-fore-efter/badrum-13.jpg", alt: "Badrumsstädning före och efter — sanitetsporslin" },
  { src: "/images/badrum-fore-efter/badrum-20.jpg", alt: "Badrumsstädning före och efter — duschvägg" },
  { src: "/images/badrum-fore-efter/badrum-11.jpg", alt: "Badrumsstädning före och efter — golv och fogar" },
  { src: "/images/badrum-fore-efter/badrum-22.jpg", alt: "Badrumsstädning före och efter — djuprengöring" },
  { src: "/images/badrum-fore-efter/badrum-23.jpg", alt: "Badrumsstädning före och efter — ångmaskin resultat" },
  { src: "/images/badrum-fore-efter/badrum-21.jpg", alt: "Badrumsstädning före och efter — klinker" },
  { src: "/images/badrum-fore-efter/badrum-18.jpg", alt: "Badrumsstädning före och efter — blandare" },
  { src: "/images/badrum-fore-efter/badrum-17.jpg", alt: "Badrumsstädning före och efter — fogar och yta" },
  { src: "/images/badrum-fore-efter/badrum-16.jpg", alt: "Badrumsstädning före och efter — rostborttagning" },
  { src: "/images/badrum-fore-efter/badrum-15.jpg", alt: "Badrumsstädning före och efter — kakel och klinker" },
  { src: "/images/badrum-fore-efter/badrum-14.jpg", alt: "Badrumsstädning före och efter — golvbrunn" },
  { src: "/images/badrum-fore-efter/badrum-12.jpg", alt: "Badrumsstädning före och efter — total förändring" },
  { src: "/images/badrum-fore-efter/badrum-10.jpg", alt: "Badrumsstädning före och efter — glänsande kakel" },
  { src: "/images/badrum-fore-efter/badrum-9.jpg", alt: "Badrumsstädning före och efter — vitare fogar" },
  { src: "/images/badrum-fore-efter/badrum-8.jpg", alt: "Badrumsstädning före och efter — kalkfritt" },
  { src: "/images/badrum-fore-efter/badrum-7.png", alt: "Badrumsstädning före och efter — kemikaliefri rengöring" },
  { src: "/images/badrum-fore-efter/badrum-6.png", alt: "Badrumsstädning före och efter — perfekt resultat" },
  { src: "/images/badrum-fore-efter/badrum-19.jpg", alt: "Badrumsstädning före och efter — badkar" },
  { src: "/images/badrum-fore-efter/badrum-1.jpg", alt: "Badrumsstädning före och efter — helhetsresultat" },
  { src: "/images/badrum-fore-efter/badrum-5.png", alt: "Badrumsstädning före och efter — skinande rent" },
];

const VISIBLE_COUNT = 6;

export default function BeforeAfterGallery() {
  const [lightboxIndex, setLightboxIndex] = useState(-1);
  const [showAll, setShowAll] = useState(false);

  const displayed = showAll ? images : images.slice(0, VISIBLE_COUNT);

  const openLightbox = useCallback((i) => setLightboxIndex(i), []);
  const closeLightbox = useCallback(() => setLightboxIndex(-1), []);

  const prev = useCallback(() => {
    setLightboxIndex((c) => (c <= 0 ? images.length - 1 : c - 1));
  }, []);

  const next = useCallback(() => {
    setLightboxIndex((c) => (c >= images.length - 1 ? 0 : c + 1));
  }, []);

  return (
    <>
      <section className="section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ textAlign: "center", marginBottom: 40 }}
          >
            <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-primary)", marginBottom: 12, display: "block" }}>
              Före & efter
            </span>
            <h2 style={{ fontSize: "clamp(26px, 4vw, 38px)", marginBottom: 14 }}>
              Badrumstvätt med ångmaskin
            </h2>
            <p style={{ fontSize: 16, color: "var(--color-muted)", maxWidth: 600, margin: "0 auto", lineHeight: 1.6 }}>
              Kalk, mögel och ingrott smuts avlägsnas helt och hållet samt desinficeras med hjälp av vår ångmaskin. Se resultatet nedan!
            </p>
          </motion.div>

          {/* Image grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }} className="why-grid">
            {displayed.map((img, i) => (
              <motion.div
                key={img.src}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
              >
                <button
                  onClick={() => openLightbox(showAll ? i : i)}
                  style={{
                    display: "block",
                    width: "100%",
                    padding: 0,
                    border: "none",
                    background: "none",
                    cursor: "pointer",
                    borderRadius: 12,
                    overflow: "hidden",
                    position: "relative",
                  }}
                  aria-label={`Visa ${img.alt} i fullskärm`}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    style={{
                      width: "100%",
                      aspectRatio: "1/1",
                      objectFit: "cover",
                      display: "block",
                      transition: "transform 0.3s ease",
                    }}
                    onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                    onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
                  />
                  <div style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top, rgba(0,0,0,0.35) 0%, transparent 50%)",
                    opacity: 0,
                    transition: "opacity 0.3s ease",
                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent: "center",
                    paddingBottom: 16,
                  }}
                    onMouseOver={(e) => (e.currentTarget.style.opacity = "1")}
                    onMouseOut={(e) => (e.currentTarget.style.opacity = "0")}
                  >
                    <span style={{ color: "white", fontSize: 13, fontWeight: 600, letterSpacing: "0.05em" }}>Klicka för att förstora</span>
                  </div>
                </button>
              </motion.div>
            ))}
          </div>

          {/* Show more / less button */}
          {images.length > VISIBLE_COUNT && (
            <div style={{ textAlign: "center", marginTop: 32 }}>
              <button
                onClick={() => setShowAll(!showAll)}
                style={{
                  padding: "14px 32px",
                  fontSize: 15,
                  fontWeight: 600,
                  color: "var(--color-primary)",
                  background: "var(--color-primary-light)",
                  border: "1px solid rgba(0,114,185,0.2)",
                  borderRadius: 10,
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  fontFamily: "var(--font-body)",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background = "rgba(0,114,185,0.15)";
                  e.currentTarget.style.borderColor = "var(--color-primary)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = "var(--color-primary-light)";
                  e.currentTarget.style.borderColor = "rgba(0,114,185,0.2)";
                }}
              >
                {showAll ? "Visa färre bilder" : `Visa alla ${images.length} bilder`}
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex >= 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={closeLightbox}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 9999,
              background: "rgba(0,0,0,0.9)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 20,
            }}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              style={{
                position: "absolute",
                top: 20,
                right: 20,
                width: 44,
                height: 44,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.2)",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 10,
              }}
              aria-label="Stäng"
            >
              <X size={22} color="white" />
            </button>

            {/* Prev */}
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              style={{
                position: "absolute",
                left: 16,
                top: "50%",
                transform: "translateY(-50%)",
                width: 48,
                height: 48,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.2)",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 10,
              }}
              aria-label="Föregående bild"
            >
              <ChevronLeft size={26} color="white" />
            </button>

            {/* Image */}
            <motion.img
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              src={images[lightboxIndex].src}
              alt={images[lightboxIndex].alt}
              onClick={(e) => e.stopPropagation()}
              style={{
                maxWidth: "85vw",
                maxHeight: "85vh",
                objectFit: "contain",
                borderRadius: 8,
              }}
            />

            {/* Next */}
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              style={{
                position: "absolute",
                right: 16,
                top: "50%",
                transform: "translateY(-50%)",
                width: 48,
                height: 48,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.2)",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                zIndex: 10,
              }}
              aria-label="Nästa bild"
            >
              <ChevronRight size={26} color="white" />
            </button>

            {/* Counter */}
            <div style={{ position: "absolute", bottom: 20, left: "50%", transform: "translateX(-50%)", color: "rgba(255,255,255,0.7)", fontSize: 14, fontWeight: 500 }}>
              {lightboxIndex + 1} / {images.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
