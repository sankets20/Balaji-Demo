import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { site } from "@/config/site";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions | Balaji Marketing Nagpur" },
      {
        name: "description",
        content:
          "Terms and conditions for using the Balaji Marketing informational website for lottery distribution in Nagpur.",
      },
      { property: "og:title", content: "Terms & Conditions | Balaji Marketing" },
      { property: "og:description", content: "Terms of use for the Balaji Marketing website." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Terms,
});

function Terms() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="mx-auto max-w-3xl px-5 py-16">
        <h1 className="text-3xl font-bold sm:text-4xl">Terms &amp; Conditions</h1>
        <div className="mt-6 space-y-5 text-sm leading-relaxed text-muted-foreground">
          <p>
            This website provides general information about {site.name}, a lottery distribution
            business based in Nagpur, Maharashtra. No tickets are sold, reserved or paid for on this
            website.
          </p>
          <p>
            Lottery listings shown on this website are sample/demo content. Actual availability,
            schedules and details are confirmed only through direct contact on WhatsApp or phone.
          </p>
          <p>
            Lottery ticket sales are subject to applicable laws, rules and regulations. Visitors are
            responsible for verifying eligibility and applicable restrictions before purchasing.
          </p>
          <p>
            We make no guarantee of winnings or outcomes of any kind. Information on this website may
            change without notice.
          </p>
          <p className="text-xs">
            This is placeholder content and should be reviewed before publication.
          </p>
        </div>
        <Link to="/" className="mt-10 inline-block text-sm font-semibold hover:text-accent">
          ← Back to home
        </Link>
      </main>
      <Footer />
    </div>
  );
}
