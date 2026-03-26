"use client";

import { Phone, Mail, MapPin, Shield, BadgeCheck } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer style={{ background: "var(--color-primary)", color: "rgba(255,255,255,0.78)" }}>
      <div className="container" style={{ padding: "64px 20px 32px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 48,
            marginBottom: 48,
          }}
        >
          {/* Brand */}
          <div>
            <Image
              src="/timeout-logo-2.png"
              alt="Timeout Service AB"
              width={76}
              height={68}
              style={{ height: 68, width: "auto", marginBottom: 16, filter: "brightness(0) invert(1)" }}
            />
            <p style={{ fontSize: 14, lineHeight: 1.7, maxWidth: 300, marginBottom: 24 }}>
              Familjeägt städföretag i Stockholm med över 35 års erfarenhet. Vi utför våra tjänster i rätt tid, på rätt sätt och enligt överenskomna villkor.
            </p>
            <div style={{ display: "flex", gap: 12 }}>
              <div style={{ padding: "6px 12px", background: "rgba(255,255,255,0.08)", borderRadius: 6, fontSize: 12, display: "flex", alignItems: "center", gap: 6, color: "rgba(255,255,255,0.85)" }}>
                <Shield size={13} /> Försäkrad
              </div>
              <div style={{ padding: "6px 12px", background: "rgba(255,255,255,0.08)", borderRadius: 6, fontSize: 12, display: "flex", alignItems: "center", gap: 6, color: "rgba(255,255,255,0.85)" }}>
                <BadgeCheck size={13} /> RUT-avdrag
              </div>
            </div>
          </div>

          {/* Privatperson */}
          <div>
            <h3 style={{ fontSize: 14, fontWeight: 700, color: "white", fontFamily: "var(--font-body)", letterSpacing: "0.04em", textTransform: "uppercase", marginBottom: 20, lineHeight: 1 }}>
              Privatperson
            </h3>
            <a href="/hemstadning" className="footer-link">Hemstädning</a>
            <a href="/flyttstadning" className="footer-link">Flyttstädning</a>
            <a href="/storstadning" className="footer-link">Storstädning</a>
            <a href="/fonsterputs" className="footer-link">Fönsterputs</a>
            <a href="/visningsstadning" className="footer-link">Visningsstädning</a>
            <a href="/mattvatt" className="footer-link">Mattvätt</a>
          </div>

          {/* Företag */}
          <div>
            <h3 style={{ fontSize: 14, fontWeight: 700, color: "white", fontFamily: "var(--font-body)", letterSpacing: "0.04em", textTransform: "uppercase", marginBottom: 20, lineHeight: 1 }}>
              Företag
            </h3>
            <a href="/kontorstadning" className="footer-link">Kontorstädning</a>
            <a href="/fonsterputs-foretag" className="footer-link">Fönsterputs företag</a>
            <a href="/fonsterputs-butik" className="footer-link">Fönsterputs butik</a>
            <a href="/butiksservice" className="footer-link">Butiksservice</a>
            <a href="/golvvard" className="footer-link">Golvvård</a>
            <a href="/trappstadning" className="footer-link">Trappstädning</a>
          </div>

          {/* Contact */}
          <div>
            <h3 style={{ fontSize: 14, fontWeight: 700, color: "white", fontFamily: "var(--font-body)", letterSpacing: "0.04em", textTransform: "uppercase", marginBottom: 20, lineHeight: 1 }}>
              Kontakt
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <a href="tel:08-377176" className="footer-contact-link">
                <Phone size={15} /> 08-37 71 76
              </a>
              <a href="mailto:info@timeoutservice.se" className="footer-contact-link">
                <Mail size={15} /> info@timeoutservice.se
              </a>
              <div style={{ fontSize: 14, display: "flex", alignItems: "flex-start", gap: 8 }}>
                <MapPin size={15} style={{ flexShrink: 0, marginTop: 2 }} /> Terrängvägen 43, 129 48 Hägersten
              </div>
              <div style={{ fontSize: 13, color: "rgba(255,255,255,0.65)", marginTop: 4 }}>
                Mån–Fre 08:00–17:00
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.08)",
            paddingTop: 24,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 12,
            fontSize: 13,
          }}
        >
          <span>&copy; 2026 Timeout Service AB. Alla rättigheter förbehållna.</span>
          <div style={{ display: "flex", gap: 20 }}>
            <a href="/integritetspolicy" className="footer-link" style={{ padding: 0 }}>Integritetspolicy</a>
            <a href="/villkor" className="footer-link" style={{ padding: 0 }}>Villkor</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
