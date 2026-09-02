import { ShieldCheck, Users } from "lucide-react";

export function About() {
  return (
    <section id="about" className="bg-navy py-20 text-navy-foreground sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="section-eyebrow">About us</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">About Balaji Marketing</h2>
          <p className="mt-5 leading-relaxed text-navy-foreground/80">
            Balaji Marketing is a lottery distribution business serving customers in Nagpur,
            Maharashtra since 2001. We assist customers through WhatsApp and phone for ticket
            availability, purchase guidance and general lottery-related inquiries.
          </p>
          <p className="mt-4 leading-relaxed text-navy-foreground/80">
            As a government registered distributor, we sell paper lottery tickets only, and all our
            sales are governed by the Lottery Act 1998 &amp; Rules 2010.
          </p>


          <div className="mt-8 flex flex-wrap gap-8">
            <div className="flex min-w-0 items-center gap-3">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-accent/15 text-accent">
                <ShieldCheck className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="min-w-0">
                <span className="block font-semibold">Registered</span>
                <span className="block text-sm text-navy-foreground/70">Government distributor</span>
              </span>
            </div>
            <div className="flex min-w-0 items-center gap-3">
              <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-accent/15 text-accent">
                <Users className="h-5 w-5" aria-hidden="true" />
              </span>
              <span className="min-w-0">
                <span className="block font-semibold">Customer First</span>
                <span className="block text-sm text-navy-foreground/70">WhatsApp & phone support</span>
              </span>
            </div>
          </div>
        </div>

        <blockquote className="rounded-2xl border border-navy-foreground/15 bg-navy-foreground/[0.06] p-8">
          <p className="font-display text-xl font-semibold leading-relaxed">
            “Our goal is to make lottery information accessible and purchases simple, while
            maintaining professionalism and trust in every customer interaction.”
          </p>
          <footer className="mt-5 text-sm text-accent">— Balaji Marketing Team</footer>
        </blockquote>
      </div>
    </section>
  );
}
