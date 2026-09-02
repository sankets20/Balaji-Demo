import { ShieldCheck, Phone } from "lucide-react";
import { site, telUrl } from "../../config/site";
import { WhatsAppButton } from "./WhatsAppButton";
import heroTickets from "../../assets/hero-tickets.jpg";
import { Logo } from "./Logo";
import "../../Hero.css";

export function Hero() {
  return (
    <section id="home" className="hero-section">
      {/* Lottery ticket background */}
      <div
        aria-hidden="true"
        className="hero-background"
        style={{ backgroundImage: `url(${heroTickets})` }}
      />

      {/* Center readability overlay */}
      <div
        aria-hidden="true"
        className="hero-center-overlay"
      />

      {/* Bottom/top gradient overlay */}
      <div
        aria-hidden="true"
        className="hero-gradient-overlay"
      />

      {/* Content */}
      <div className="hero-content">
        <Logo className="hero-logo" />

        <span className="hero-badge">
          <ShieldCheck
            className="hero-badge-icon"
            aria-hidden="true"
          />
          Government Registered Distributor · Since {site.since}
        </span>

        <h1 className="hero-title">
          {site.name}
        </h1>

        <p className="hero-tagline">
          {site.tagline}
        </p>

        <p className="hero-description">
          We only sell paper lottery tickets. Connect with us for today’s
          ticket availability and purchase assistance.
        </p>

        <div className="hero-actions">
          <WhatsAppButton
            label="Buy Lottery Ticket on WhatsApp"
            size="lg"
            className="hero-whatsapp"
          />

          <a
            href={telUrl()}
            className="hero-call-button"
          >
            <Phone
              className="hero-phone-icon"
              aria-hidden="true"
            />
            Call {site.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
