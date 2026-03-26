import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PersonalContent from "@/components/PersonalContent";
export const metadata = {
  title: "Personal | Timeout Service — Vår viktigaste resurs",
  description: "Personalen är vår viktigaste resurs. Bakgrundskontrollerad, utbildad och engagerad personal med tystnadsplikt. Timeout Service AB.",
};
export default function Personal() {
  const schemas = [
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Hem", item: "https://timeoutservice.se" },
      { "@type": "ListItem", position: 2, name: "Om oss", item: "https://timeoutservice.se/om-oss" },
      { "@type": "ListItem", position: 3, name: "Personal", item: "https://timeoutservice.se/personal" },
    ]},
  ];
  return (<>{schemas.map((s,i)=><script key={i} type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(s)}}/>)}<Header /><PersonalContent /><Footer /></>);
}
