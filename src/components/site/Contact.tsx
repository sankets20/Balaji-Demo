import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { site, telUrl, whatsappUrl } from "../../config/site";
import "../../Contact.css";

const cards = [
  {
    icon: Phone,
    label: "Call or WhatsApp",
    value: site.phone,
    href: telUrl(),
    hint: "Tap to call from your phone",
  },
  {
    icon: Mail,
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    hint: "We reply during business hours",
  },
  {
    icon: MapPin,
    label: "Visit Us",
    value: `${site.address.line1}, ${site.address.line2}`,
    href: `https://maps.google.com/?q=${encodeURIComponent(
      `${site.name}, ${site.address.line1}, ${site.address.line2}`
    )}`,
    hint: "Open in maps",
  },
];

export function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">

        {/* Heading */}
        <div className="contact-heading">
          <p className="section-eyebrow">
            Get in touch
          </p>

          <h2 className="contact-title">
            Contact Balaji Marketing
          </h2>

          <p className="contact-description">
            Questions about lottery ticket availability or details?
            Call us, message us on WhatsApp, or visit our office
            in Sitabuldi, Nagpur.
          </p>
        </div>


        {/* Contact Cards */}
        <ul className="contact-cards">
          {cards.map(
            ({ icon: Icon, label, value, href, hint }) => (
              <li
                key={label}
                className="contact-card"
              >
                <span className="contact-icon">
                  <Icon
                    className="contact-icon-svg"
                    aria-hidden="true"
                  />
                </span>

                <p className="contact-card-label">
                  {label}
                </p>

                <a
                  href={href}
                  target={
                    label === "Visit Us"
                      ? "_blank"
                      : undefined
                  }
                  rel={
                    label === "Visit Us"
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="contact-card-value"
                >
                  {value}
                </a>

                <p className="contact-card-hint">
                  {hint}
                </p>
              </li>
            )
          )}
        </ul>


        {/* WhatsApp CTA */}
        <div className="contact-cta">

          <h3 className="contact-cta-title">
            Need help with today’s tickets?
          </h3>

          <p className="contact-cta-description">
            Our team responds quickly on WhatsApp with today’s
            available paper lottery tickets and purchase guidance.
          </p>

          <div className="contact-cta-actions">

            <a
              href={whatsappUrl(site.enquiryWhatsappMessage)}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-whatsapp-button"
            >
              <MessageCircle
                className="contact-button-icon"
                aria-hidden="true"
              />

              Chat With Us on WhatsApp
            </a>

            <a
              href={telUrl()}
              className="contact-call-button"
            >
              <Phone
                className="contact-button-icon"
                aria-hidden="true"
              />

              Call Us
            </a>

          </div>
        </div>

      </div>
    </section>
  );
}
