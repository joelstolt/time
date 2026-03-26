import Header from "@/components/Header";
import Footer from "@/components/Footer";
export const metadata = {
  title: "Integritetspolicy | Timeout Service",
  description: "Integritetspolicy för Timeout Service AB. Hur vi hanterar dina personuppgifter.",
};
export default function Integritetspolicy() {
  return (
    <>
      <Header />
      <section className="section">
        <div className="container" style={{ maxWidth: 750 }}>
          <h1 style={{ fontSize: "clamp(28px, 4vw, 40px)", marginBottom: 24 }}>Integritetspolicy</h1>

          <div style={{ fontSize: 16, color: "var(--color-body)", lineHeight: 1.8 }}>
            <h2 style={{ fontSize: 22, marginTop: 32, marginBottom: 12 }}>1. Inledning</h2>
            <p>Timeout Service AB (org.nr: 556XXX-XXXX) värnar om din personliga integritet. Denna policy beskriver hur vi samlar in, använder och skyddar dina personuppgifter i enlighet med EU:s dataskyddsförordning (GDPR).</p>

            <h2 style={{ fontSize: 22, marginTop: 32, marginBottom: 12 }}>2. Personuppgiftsansvarig</h2>
            <p>Timeout Service AB<br />Terrängvägen 43<br />129 48 Hägersten<br />E-post: info@timeoutservice.se<br />Telefon: 08-37 71 76</p>

            <h2 style={{ fontSize: 22, marginTop: 32, marginBottom: 12 }}>3. Vilka uppgifter vi samlar in</h2>
            <p>Vi samlar in följande personuppgifter när du kontaktar oss eller bokar en tjänst:</p>
            <ul style={{ paddingLeft: 24, marginTop: 8 }}>
              <li>Namn</li>
              <li>E-postadress</li>
              <li>Telefonnummer</li>
              <li>Adress</li>
              <li>Uppgifter om den tjänst du efterfrågar</li>
            </ul>

            <h2 style={{ fontSize: 22, marginTop: 32, marginBottom: 12 }}>4. Hur vi använder dina uppgifter</h2>
            <p>Vi använder dina personuppgifter för att:</p>
            <ul style={{ paddingLeft: 24, marginTop: 8 }}>
              <li>Hantera och utföra beställda tjänster</li>
              <li>Kommunicera med dig angående din bokning</li>
              <li>Skicka fakturor och hantera betalningar</li>
              <li>Administrera RUT-avdrag via Skatteverket</li>
              <li>Uppfylla rättsliga skyldigheter (bokföring, skattelagstiftning)</li>
            </ul>

            <h2 style={{ fontSize: 22, marginTop: 32, marginBottom: 12 }}>5. Rättslig grund</h2>
            <p>Vi behandlar dina personuppgifter baserat på: avtal (för att fullgöra våra åtaganden gentemot dig), rättslig förpliktelse (bokföring, skatteredovisning) och berättigat intresse (kundservice, förbättring av tjänster).</p>

            <h2 style={{ fontSize: 22, marginTop: 32, marginBottom: 12 }}>6. Hur länge vi sparar dina uppgifter</h2>
            <p>Vi sparar dina personuppgifter så länge det är nödvändigt för att uppfylla de ändamål de samlades in för. Bokföringsmaterial sparas i 7 år enligt bokföringslagen.</p>

            <h2 style={{ fontSize: 22, marginTop: 32, marginBottom: 12 }}>7. Dina rättigheter</h2>
            <p>Du har rätt att:</p>
            <ul style={{ paddingLeft: 24, marginTop: 8 }}>
              <li>Begära tillgång till dina personuppgifter</li>
              <li>Begära rättelse av felaktiga uppgifter</li>
              <li>Begära radering av dina uppgifter</li>
              <li>Invända mot behandling</li>
              <li>Begära begränsning av behandling</li>
              <li>Lämna klagomål till Integritetsskyddsmyndigheten (IMY)</li>
            </ul>

            <h2 style={{ fontSize: 22, marginTop: 32, marginBottom: 12 }}>8. Kontakta oss</h2>
            <p>Om du har frågor om vår hantering av personuppgifter, kontakta oss på info@timeoutservice.se eller ring 08-37 71 76.</p>

            <p style={{ marginTop: 32, fontSize: 14, color: "var(--color-muted)" }}>Senast uppdaterad: mars 2026</p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
