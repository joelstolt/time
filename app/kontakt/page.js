import Header from "@/components/Header";
import Footer from "@/components/Footer";
import KontaktContent from "@/components/KontaktContent";
export const metadata = {
  title: "Kontakta oss - Städfirma i Stockholm",
  alternates: { canonical: "/kontakt" },
  description: "Kontakta Timeout Service AB. Ring 08-37 71 76 eller maila info@timeoutservice.se. Terrängvägen 43, Hägersten. Mån-Fre 08-17.",
};
export default function Kontakt() {
  return (<><Header /><KontaktContent /><Footer /></>);
}
