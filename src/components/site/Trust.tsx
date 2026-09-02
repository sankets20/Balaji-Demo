import { BadgeCheck, MapPin, CalendarCheck, MessageSquare } from "lucide-react";

const items = [
  {
    icon: BadgeCheck,
    title: "Government Registered Distributor",
    body: "Operating as a registered lottery distribution business in compliance with applicable local guidelines.",
  },
  {
    icon: MapPin,
    title: "Serving Customers Across Nagpur",
    body: "Based in Nagpur, Maharashtra, assisting local customers with lottery-related queries.",
  },
  {
    icon: CalendarCheck,
    title: "Daily Lottery Ticket Availability",
    body: "Get in touch to learn about currently available lottery tickets and daily options.",
  },
  {
    icon: MessageSquare,
    title: "Quick WhatsApp Assistance",
    body: "Fast, friendly responses and purchase guidance directly through WhatsApp.",
  },
];

export function Trust() {
  return (
    <section className="bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow">Why choose us</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Trusted Lottery Distribution</h2>
          <p className="mt-4 text-muted-foreground">
            A professional, government-registered distributor committed to serving customers across
            Nagpur with transparency and care.
          </p>
        </div>

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, body }) => (
            <li key={title} className="card-surface p-6">
              <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent/12 text-accent">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-lg font-bold leading-snug">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
