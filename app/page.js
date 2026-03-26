import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Services from "@/components/Services";
import BusinessServices from "@/components/BusinessServices";
import WhyUs from "@/components/WhyUs";
import PriceCalculator from "@/components/PriceCalculator";
import AboutSection from "@/components/AboutSection";
import Testimonials from "@/components/Testimonials";
import CTABanner from "@/components/CTABanner";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <TrustBar />
      <Services />
      <BusinessServices />
      <WhyUs />
      <PriceCalculator />
      <AboutSection />
      <Testimonials />
      <CTABanner />
      <FAQ />
      <Footer />
    </>
  );
}
