import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MiljopolicyContent from "@/components/MiljopolicyContent";
export const metadata = {
  title: "Miljöpolicy | Timeout Service — Hållbar städning i Stockholm",
  description: "Vår miljöpolicy: Svanenmärkta produkter, miljövänliga metoder, minimal resursanvändning. Vi gör vårt bästa för miljön. Timeout Service AB.",
};
export default function Miljopolicy() {
  const schemas = [
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Hem", item: "https://timeoutservice.se" },
      { "@type": "ListItem", position: 2, name: "Om oss", item: "https://timeoutservice.se/om-oss" },
      { "@type": "ListItem", position: 3, name: "Miljöpolicy", item: "https://timeoutservice.se/miljopolicy" },
    ]},
  ];
  return (<>{schemas.map((s,i)=><script key={i} type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(s)}}/>)}<Header /><MiljopolicyContent /><Footer /></>);
}
