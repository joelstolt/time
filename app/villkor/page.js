import Header from "@/components/Header";
import Footer from "@/components/Footer";
export const metadata = {
  title: "Villkor | Timeout Service",
  description: "Allmänna villkor för Timeout Service AB. Bokningsvillkor, betalning, garanti och avbokning.",
};
export default function Villkor() {
  return (
    <>
      <Header />
      <section className="section">
        <div className="container" style={{ maxWidth: 750 }}>
          <h1 style={{ fontSize: "clamp(28px, 4vw, 40px)", marginBottom: 24 }}>Allmänna villkor</h1>

          <div style={{ fontSize: 16, color: "var(--color-body)", lineHeight: 1.8 }}>
            <h2 style={{ fontSize: 22, marginTop: 32, marginBottom: 12 }}>1. Allmänt</h2>
            <p>Dessa villkor gäller för alla tjänster som utförs av Timeout Service AB (nedan &ldquo;företaget&rdquo;). Genom att boka en tjänst godkänner du dessa villkor.</p>

            <h2 style={{ fontSize: 22, marginTop: 32, marginBottom: 12 }}>2. Bokning</h2>
            <p>Bokning sker via telefon, e-post eller webbformulär. Bokningen bekräftas av företaget och är bindande för båda parter.</p>

            <h2 style={{ fontSize: 22, marginTop: 32, marginBottom: 12 }}>3. Priser</h2>
            <p>Alla priser för privatpersoner anges efter RUT-avdrag (50%) om inte annat anges. Priser för företag anges exklusive moms. Exakt pris fastställs vid offert eller hembesök.</p>

            <h2 style={{ fontSize: 22, marginTop: 32, marginBottom: 12 }}>4. RUT-avdrag</h2>
            <p>Företaget administrerar RUT-avdrag åt privatpersoner utan extra kostnad. Kunden ansvarar för att ha rätt till avdraget. Om Skatteverket nekar utbetalning faktureras kunden mellanskillnaden.</p>

            <h2 style={{ fontSize: 22, marginTop: 32, marginBottom: 12 }}>5. Betalning</h2>
            <p>Faktura skickas via e-post (kostnadsfritt) eller post (35 kr administrationsavgift). Betalningsvillkor är 10 dagar för privatpersoner och 20 dagar för företag, om inte annat avtalats. Betalning kan även ske via Swish.</p>

            <h2 style={{ fontSize: 22, marginTop: 32, marginBottom: 12 }}>6. Avbokning</h2>
            <p><strong>Privatperson:</strong> Avbokning ska ske minst 48 timmar före avtalad tid. Senare avbokning eller utebliven närvaro debiteras fullt.</p>
            <p><strong>Företag:</strong> Avbokning ska ske minst 72 timmar före avtalad tid (helger exkluderade). Senare avbokning debiteras fullt.</p>

            <h2 style={{ fontSize: 22, marginTop: 32, marginBottom: 12 }}>7. Garanti</h2>
            <p>Hemstädning har nöjd-kund-garanti — brister åtgärdas kostnadsfritt om de rapporteras inom 48 timmar. Flyttstädning har 10 dagars garanti. Eventuella brister som noteras vid första besiktning åtgärdas omedelbart.</p>

            <h2 style={{ fontSize: 22, marginTop: 32, marginBottom: 12 }}>8. Ansvar och försäkring</h2>
            <p>Timeout Service AB är ansvarsförsäkrad upp till 10 miljoner kronor. Företaget ansvarar för skador som uppstått genom oaktsamhet. Företaget ansvarar inte för skador som uppstår på grund av bristande information från kunden eller tredje part.</p>

            <h2 style={{ fontSize: 22, marginTop: 32, marginBottom: 12 }}>9. Uppsägning (företagskunder)</h2>
            <p>Avtal för regelbunden städning har ingen bindningstid men 2 månaders uppsägningstid.</p>

            <h2 style={{ fontSize: 22, marginTop: 32, marginBottom: 12 }}>10. Kontakt</h2>
            <p>Timeout Service AB<br />Terrängvägen 43, 129 48 Hägersten<br />Telefon: 08-37 71 76<br />E-post: info@timeoutservice.se</p>

            <p style={{ marginTop: 32, fontSize: 14, color: "var(--color-muted)" }}>Senast uppdaterad: mars 2026</p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
