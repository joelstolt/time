import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SakerhetContent from "@/components/SakerhetContent";
export const metadata = {
  title: "Säkerhet | Timeout Service — Trygg städning i Stockholm",
  description: "Vi tar säkerhet på stort allvar. Strikta rutiner, bakgrundskontroller, tystnadsplikt och ansvarsförsäkring. Timeout Service AB.",
};
export default function Sakerhet() {
  const schemas = [
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Hem", item: "https://timeoutservice.se" },
      { "@type": "ListItem", position: 2, name: "Om oss", item: "https://timeoutservice.se/om-oss" },
      { "@type": "ListItem", position: 3, name: "Säkerhet", item: "https://timeoutservice.se/sakerhet" },
    ]},
  ];
  return (<>{schemas.map((s,i)=><script key={i} type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(s)}}/>)}<Header /><SakerhetContent /><Footer /></>);
}
