"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronRight, Phone } from "lucide-react";

const services = [
  {
    title: "Hemstädning",
    desc: "De allra flesta av oss gillar att komma hem till ett rent och fräscht hem. Låt oss ta hand om städningen så kan du fokusera på det som verkligen betyder något — din familj och fritid.",
    href: "/hemstadning",
    image: "/images/tjanst-hemstad.jpg",
  },
  {
    title: "Fönsterputs",
    desc: "Fönsterputs kan vara svårt att få till om man vill ha ett bra resultat. Ta en 'Timeout' medan vi putsar dina fönster — skinande rent garanterat.",
    href: "/fonsterputs",
    image: "/images/tjanst-fonster.jpg",
  },
  {
    title: "Flyttstädning",
    desc: "Vi sköter flyttstädningen så att du kan fokusera på flytten. Vi garanterar godkänd besiktning och tar hand om allt från golv till tak.",
    href: "/flyttstadning",
    image: "/images/tjanst-flytt.jpg",
  },
  {
    title: "Storstädning",
    desc: "När det behövs en extra noggrann städning — från golv till tak. Perfekt inför säsongsbyten, högtider eller när hemmet behöver en ordentlig uppfräschning.",
    href: "/storstadning",
    image: "/images/tjanst-storstadning.jpg",
  },
  {
    title: "Visningsstädning",
    desc: "Ge potentiella köpare bästa möjliga intryck. Vi ser till att ditt hem glänser inför visningen så att du kan fokusera på försäljningen.",
    href: "/visningsstadning",
    image: "/images/tjanst-visning.jpg",
  },
  {
    title: "Köksstädning",
    desc: "Grundlig rengöring av köket — vitvaror, bänkytor, kakel och golv. Vi tar hand om det som tar mest tid så att du kan fokusera på familjen.",
    href: "/koksstadning",
    image: "/images/tjanst-kok.png",
  },
  {
    title: "Badrumsstädning",
    desc: "Professionell badrumsstädning med fokus på kalk, mögel och djuprengöring. Vi får ditt badrum att kännas som nytt.",
    href: "/badrumsstadning",
    image: "/images/tjanst-badrum.jpg",
  },
  {
    title: "Mattvätt",
    desc: "Vi utför mattvätt i hela Storstockholm — hemma hos dig. Skonsam och effektiv rengöring som förlänger mattans livslängd.",
    href: "/mattvatt",
    image: "/images/tjanst-mattvatt.jpg",
  },
];

export default function TjansterContent() {
  return (
    <>
      {/* Breadcrumb */}
      <div style={{ background: "var(--color-bg-alt)", borderBottom: "1px solid var(--color-border-light)" }}>
        <nav aria-label="Brödsmulor" className="container" style={{ padding: "12px 20px", fontSize: 13, color: "var(--color-muted)", display: "flex", alignItems: "center", gap: 4 }}>
          <a href="/" style={{ color: "var(--color-muted)", textDecoration: "none" }}>Hem</a>
          <ChevronRight size={12} />
          <span style={{ color: "var(--color-heading)", fontWeight: 500 }}>Privatperson</span>
        </nav>
      </div>

      {/* Hero */}
      <section style={{ background: "var(--color-primary)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.05, backgroundImage: "repeating-linear-gradient(-45deg, transparent, transparent 20px, rgba(255,255,255,0.4) 20px, rgba(255,255,255,0.4) 21px)" }} />
        <div className="container" style={{ padding: "clamp(48px, 8vw, 80px) 20px", textAlign: "center", position: "relative", zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span style={{ fontSize: 13, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--color-accent)", marginBottom: 12, display: "block" }}>Privatperson</span>
            <h1 style={{ fontSize: "clamp(32px, 5vw, 52px)", color: "white", marginBottom: 16 }}>
              Våra tjänster för dig som privatperson
            </h1>
            <p style={{ fontSize: 18, color: "rgba(255,255,255,0.8)", maxWidth: 560, margin: "0 auto", lineHeight: 1.6 }}>
              Lämna städningen till oss. Vi erbjuder professionella städtjänster med nöjd-kund-garanti, RUT-avdrag och samma städare varje gång.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service grid */}
      <section className="section">
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
              gap: 24,
            }}
          >
            {services.map((service, i) => (
              <motion.a
                key={service.title}
                href={service.href}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  background: "white",
                  border: "1px solid var(--color-border)",
                  borderRadius: 12,
                  overflow: "hidden",
                  textDecoration: "none",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-6px)";
                  e.currentTarget.style.boxShadow = "0 16px 48px rgba(0,114,185,0.1)";
                  e.currentTarget.style.borderColor = "var(--color-primary)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.borderColor = "var(--color-border)";
                }}
              >
                <div style={{ aspectRatio: "4/3", overflow: "hidden" }}>
                  <img
                    src={service.image}
                    alt={`${service.title} Stockholm — Timeout Service`}
                    style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.4s ease" }}
                    onMouseEnter={(e) => (e.target.style.transform = "scale(1.05)")}
                    onMouseLeave={(e) => (e.target.style.transform = "scale(1)")}
                  />
                </div>
                <div style={{ padding: 24, flex: 1, display: "flex", flexDirection: "column" }}>
                  <h2 style={{ fontSize: 22, marginBottom: 10, color: "var(--color-heading)" }}>{service.title}</h2>
                  <p style={{ fontSize: 15, color: "var(--color-muted)", lineHeight: 1.6, flex: 1, marginBottom: 16 }}>
                    {service.desc}
                  </p>
                  <span style={{ fontSize: 14, fontWeight: 600, color: "var(--color-primary)", display: "inline-flex", alignItems: "center", gap: 6 }}>
                    Läs mer <ArrowRight size={15} />
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--color-primary)", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, opacity: 0.05, backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 30px, rgba(255,255,255,0.5) 30px, rgba(255,255,255,0.5) 31px)" }} />
        <div className="container" style={{ padding: "72px 20px", textAlign: "center", position: "relative", zIndex: 1 }}>
          <h2 style={{ fontSize: "clamp(26px, 4vw, 38px)", color: "white", marginBottom: 14 }}>
            Vilken tjänst behöver du hjälp med?
          </h2>
          <p style={{ fontSize: 17, color: "rgba(255,255,255,0.8)", maxWidth: 480, margin: "0 auto 32px", lineHeight: 1.6 }}>
            Kontakta oss för en kostnadsfri offert eller boka direkt via telefon.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: 14, flexWrap: "wrap" }}>
            <a className="btn-accent" href="/boka">Boka städning <ArrowRight size={17} /></a>
            <a className="btn-secondary" href="tel:08-377176" style={{ color: "white", borderColor: "rgba(255,255,255,0.25)" }}>
              <Phone size={16} /> Ring 08-37 71 76
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
