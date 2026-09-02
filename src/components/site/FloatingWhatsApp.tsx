import { site, whatsappUrl } from "../../config/site";
import { WhatsAppIcon } from "./WhatsAppIcon";
import "../../FloatingWhatsApp.css";

export function FloatingWhatsApp() {
  return (
    <a
      href={whatsappUrl(site.enquiryWhatsappMessage)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Balaji Marketing on WhatsApp"
      className="floating-whatsapp"
    >
      <WhatsAppIcon className="floating-whatsapp-icon" />

      <span className="floating-whatsapp-text">
        Chat on WhatsApp
      </span>
    </a>
  );
}
