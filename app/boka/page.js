import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BookingForm from "@/components/BookingForm";

export const metadata = {
  title: "Boka städning",
  alternates: { canonical: "/boka" },
  description: "Boka städning i Stockholm. Fyll i dina uppgifter så kontaktar vi dig. Hemstädning, flyttstädning, fönsterputs och mer.",
};

export default function Boka() {
  return (
    <>
      <Header />
      <BookingForm />
      <Footer />
    </>
  );
}
