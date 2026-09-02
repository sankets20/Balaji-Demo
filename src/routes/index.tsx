import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Trust } from "@/components/site/Trust";
import { BusinessInfo } from "@/components/site/BusinessInfo";
import { LotterySection } from "@/components/site/LotterySection";
import { HowItWorks } from "@/components/site/HowItWorks";
import { About } from "@/components/site/About";
import { Contact } from "@/components/site/Contact";
import { LegalNotice } from "@/components/site/LegalNotice";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import "../styles.css";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Balaji Marketing | Lottery Distributor in Nagpur" },
      {
        name: "description",
        content:
          "Balaji Marketing is a government registered paper lottery ticket distributor in Nagpur since 2001. Check ticket availability on WhatsApp or call +91-7559-397-393.",
      },
      { property: "og:title", content: "Balaji Marketing | Lottery Distributor in Nagpur" },
      {
        property: "og:description",
        content:
          "Government registered paper lottery ticket distributor in Nagpur since 2001. Connect on WhatsApp for ticket availability and purchase assistance.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background">
      <Header />
      <main>
        <Hero />
        <Trust />
        <BusinessInfo />
        <LotterySection />
        <HowItWorks />
        <About />
        <Contact />
        <LegalNotice />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
