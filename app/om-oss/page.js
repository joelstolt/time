import Header from "@/components/Header";
import Footer from "@/components/Footer";
import OmOssContent from "@/components/OmOssContent";
export const metadata = {
  title: "Om oss - Städfirma i Stockholm med 35 års erfarenhet",
  alternates: { canonical: "/om-oss" },
  description: "Lär känna Timeout Service AB. Familjeägt städföretag i Stockholm med 35 års erfarenhet. Personal, säkerhet och miljöpolicy.",
};
export default function OmOss() {
  const schemas = [
    { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
      { "@type": "ListItem", position: 1, name: "Hem", item: "https://www.timeoutservice.se" },
      { "@type": "ListItem", position: 2, name: "Om oss", item: "https://www.timeoutservice.se/om-oss" },
    ]},
  ];
  return (<>{schemas.map((s,i)=><script key={i} type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(s)}}/>)}<Header /><OmOssContent /><Footer /></>);
}
