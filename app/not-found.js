import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, Home } from "lucide-react";

export default function NotFound() {
  return (
    <>
      <Header />
      <section style={{ padding: "clamp(80px, 15vw, 160px) 20px", textAlign: "center" }}>
        <div className="container" style={{ maxWidth: 600 }}>
          <div style={{ fontSize: 120, fontWeight: 800, color: "var(--color-primary-light)", lineHeight: 1, marginBottom: 16, fontFamily: "var(--font-body)" }}>
            404
          </div>
          <h1 style={{ fontSize: "clamp(28px, 4vw, 40px)", marginBottom: 16 }}>
            Sidan kunde inte hittas
          </h1>
          <p style={{ fontSize: 17, color: "var(--color-muted)", lineHeight: 1.6, marginBottom: 36, maxWidth: 440, margin: "0 auto 36px" }}>
            Sidan du letar efter finns inte eller har flyttats. Kolla att adressen är korrekt eller gå tillbaka till startsidan.
          </p>
          <div style={{ display: "flex", justifyContent: "center", gap: 14, flexWrap: "wrap" }}>
            <a href="/" className="btn-primary">
              Till startsidan <ArrowRight size={17} />
            </a>
            <a href="/kontakt" className="btn-secondary">
              Kontakta oss
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
