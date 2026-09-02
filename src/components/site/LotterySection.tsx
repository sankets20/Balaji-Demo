import { Ticket } from "lucide-react";
import { WhatsAppButton } from "./WhatsAppButton";

const cards = [
  {
    name: "Daily Lottery",
    schedule: "Daily draws",
    note: "Ticket details available on WhatsApp",
  },
  {
    name: "Weekly Special",
    schedule: "Weekly draws",
    note: "Check schedules on WhatsApp",
  },
  {
    name: "Festival Bumper",
    schedule: "Seasonal availability",
    note: "Limited tickets — inquire on WhatsApp",
  },
];

export function LotterySection() {
  return (
    <section id="lottery" className="bg-surface py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow">Current options</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Today’s Lottery</h2>
          <p className="mt-4 text-muted-foreground">
            Sample lottery listings shown below. Contact us on WhatsApp for accurate, up-to-date
            ticket availability and details.
          </p>
        </div>

        <ul className="mt-12 grid gap-5 md:grid-cols-3">
          {cards.map((c) => (
            <li key={c.name} className="card-surface flex flex-col p-6">
              <div className="flex items-start justify-between gap-3">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-accent/12 text-accent">
                  <Ticket className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="shrink-0 rounded-full bg-secondary px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                  Demo
                </span>
              </div>
              <h3 className="mt-5 text-xl font-bold">{c.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{c.schedule}</p>
              <p className="mt-4 text-sm text-foreground/80">{c.note}</p>
              <WhatsAppButton
                variant="navy"
                label="Check Availability on WhatsApp"
                message={`Hello Balaji Marketing, I would like to purchase a lottery ticket. Please share today's available lottery tickets and details. (Interested in: ${c.name})`}
                className="mt-6 w-full"
              />
            </li>
          ))}
        </ul>

        <p className="mx-auto mt-8 max-w-2xl text-center text-xs leading-relaxed text-muted-foreground">
          The lottery listings above are placeholder/demo content for demonstration purposes. Actual
          availability and ticket details will be confirmed on WhatsApp.
        </p>
      </div>
    </section>
  );
}
