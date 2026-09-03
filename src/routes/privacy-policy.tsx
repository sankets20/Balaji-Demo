import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { site } from "@/config/site";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Balaji Marketing Nagpur" },
      {
        name: "description",
        content:
          "Privacy policy of Balaji Marketing, a government authorised lottery distributor in Nagpur, Maharashtra.",
      },
      { property: "og:title", content: "Privacy Policy | Balaji Marketing" },
      { property: "og:description", content: "How Balaji Marketing handles customer information." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PrivacyPolicy,
});

function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="mx-auto max-w-3xl px-5 py-16">
        <h1 className="text-3xl font-bold sm:text-4xl">Privacy Policy</h1>
        <div className="mt-6 space-y-5 text-sm leading-relaxed text-muted-foreground">
          <p>
            This website is an informational landing page for {site.name}. We do not collect
            personal information through this website, and no accounts, payments or online
            transactions are processed here.
          </p>
          <p>
            When you contact us via WhatsApp, phone or email, we receive the details you choose to
            share. This information is used only to respond to your inquiry about lottery ticket
            availability and purchase assistance.
          </p>
          <p>
            We do not sell or share customer information with third parties for marketing purposes.
            Messaging services such as WhatsApp are governed by their own privacy policies.
          </p>
          <p>
            For any questions about this policy, contact us at{" "}
            <a href={`mailto:${site.email}`} className="font-medium text-foreground hover:text-accent">
              {site.email}
            </a>
            .
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
