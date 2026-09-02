import { Building2, FileText, Scale, BadgeCheck } from "lucide-react";
import { site } from "../../config/site";

const facts = [
  {
    icon: FileText,
    title: "Paper Lottery Tickets",
    body: "We only sell Paper Lottery Tickets.",
  },
  {
    icon: Scale,
    title: "Governed by Applicable Rules",
    body: "All our sales are governed by Lottery Act 1998 & Rules 2010.",
  },
  {
    icon: BadgeCheck,
    title: `Since ${site.since}`,
    body: `${site.name} — In Business Since ${site.since}.`,
  },
];

export function BusinessInfo() {
  return (
    <section className="bg-background pb-20 sm:pb-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="card-surface flex flex-col gap-4 p-8 sm:p-10">
          <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary text-primary-foreground">
            <Building2 className="h-5 w-5" aria-hidden="true" />
          </span>
          <h2 className="text-2xl font-bold sm:text-3xl">
            {site.name} — In Business Since {site.since}
          </h2>
          <p className="max-w-3xl leading-relaxed text-muted-foreground">
            Balaji Marketing has been serving customers in Nagpur since {site.since} and specializes
            in the distribution of paper lottery tickets.
          </p>
        </div>

        <ul className="mt-5 grid gap-5 md:grid-cols-3">
          {facts.map(({ icon: Icon, title, body }) => (
            <li key={title} className="rounded-2xl border border-border bg-surface p-6">
              <span className="grid h-10 w-10 place-items-center rounded-lg bg-card text-accent">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 text-base font-bold">{title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
