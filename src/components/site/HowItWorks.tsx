import { WhatsAppButton } from "./WhatsAppButton";

const steps = [
  {
    title: "Choose Your Lottery",
    body: "Browse the lottery options and decide which ticket you’re interested in.",
  },
  {
    title: "Contact Us on WhatsApp",
    body: "Tap the WhatsApp button to start a conversation and confirm availability.",
  },
  {
    title: "Get Ticket Purchase Assistance",
    body: "Our team will guide you through the next steps to complete your request.",
  },
];

export function HowItWorks() {
  return (
    <section className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow">Simple process</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">How It Works</h2>
          <p className="mt-4 text-muted-foreground">
            Getting started is easy. Just follow these three simple steps.
          </p>
        </div>

        <ol className="mt-12 grid gap-5 md:grid-cols-3">
          {steps.map((s, i) => (
            <li key={s.title} className="card-surface p-6">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-primary font-display text-sm font-bold text-primary-foreground">
                {i + 1}
              </span>
              <h3 className="mt-5 text-lg font-bold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </li>
          ))}
        </ol>

            <div className="hero-actions">
          <WhatsAppButton
            label="Start on Whatsapp"
            size="lg"
            className="hero-whatsapp"
          />
        </div>
      </div>
    </section>
  );
}
