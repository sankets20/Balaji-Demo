import { Phone, Mail, MapPin, ShieldCheck } from "lucide-react";
import { site, telUrl } from "../../config/site";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="bg-footer text-footer-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:grid-cols-2 lg:grid-cols-4">

        {/* Brand */}
        <div>
          <span className="inline-flex rounded-xl bg-white px-3 py-2">
            <Logo className="h-9 sm:h-10" />
          </span>

          <p className="mt-4 text-sm leading-relaxed text-footer-foreground/70">
            Government Authorised Lottery Distributor in Nagpur.
            <br />
            In Business Since {site.since}.
          </p>
        </div>

        {/* Quick Links */}
        <nav aria-label="Footer">
          <p className="text-xs font-bold uppercase tracking-[0.16em]">
            Quick Links
          </p>

          <ul className="mt-4 space-y-2.5 text-sm text-footer-foreground/75">
            <li>
              <a href="#home" className="hover:text-accent">
                Home
              </a>
            </li>

            <li>
              <a href="#about" className="hover:text-accent">
                About
              </a>
            </li>

            <li>
              <a href="#contact" className="hover:text-accent">
                Contact
              </a>
            </li>

            <li>
              <a href="/privacy-policy" className="hover:text-accent">
                Privacy Policy
              </a>
            </li>

            <li>
              <a href="/terms" className="hover:text-accent">
                Terms &amp; Conditions
              </a>
            </li>
          </ul>
        </nav>

        {/* Contact */}
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em]">
            Contact
          </p>

          <ul className="mt-4 space-y-3 text-sm text-footer-foreground/75">

            {/* Phone */}
            <li className="flex items-start gap-2.5">
              <Phone
                className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                aria-hidden="true"
              />

              <a
                href={telUrl()}
                className="hover:text-accent"
              >
                {site.phone}
              </a>
            </li>

            {/* Email */}
            <li className="flex items-start gap-2.5">
              <Mail
                className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                aria-hidden="true"
              />

              <a
                href={`mailto:${site.email}`}
                className="break-all hover:text-accent"
              >
                {site.email}
              </a>
            </li>

            {/* Address */}
            <li className="flex items-start gap-2.5">
              <MapPin
                className="mt-0.5 h-4 w-4 shrink-0 text-accent"
                aria-hidden="true"
              />

              <span>
                {site.address.line1}, {site.address.line2}
              </span>
            </li>

          </ul>
        </div>

        {/* Legal Notice */}
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em]">
            Legal Notice
          </p>

          <p className="mt-4 flex gap-2.5 text-sm leading-relaxed text-footer-foreground/70">
            <ShieldCheck
              className="mt-0.5 h-4 w-4 shrink-0 text-accent"
              aria-hidden="true"
            />

            <span>
              {site.legalNotice}
            </span>
          </p>
        </div>

      </div>

      {/* Copyright */}
      <div className="border-t border-footer-foreground/12">
        <div className="mx-auto max-w-6xl space-y-2 px-5 py-7 text-center text-xs text-footer-foreground/60">

          <p>
            © 2026 {site.name}. All Rights Reserved.
          </p>

          <p>
            Lottery ticket sales are subject to applicable laws, rules and
            regulations. Please verify eligibility and applicable restrictions
            before purchasing.
          </p>

        </div>
      </div>
    </footer>
  );
}