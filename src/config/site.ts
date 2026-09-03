/**
 * Central business configuration.
 * Update these values to change contact details across the whole site.
 */
export const site = {
  name: "Balaji Marketing",
  tagline: "Serving Customers Across Maharashtra",
  since: "2001",
  email: "Balajimarketing62@gmail.com",
  /** Display phone number */
  phone: "+91-7722-099-288 ",
  /** Digits only, with country code, used for wa.me links */
  whatsappNumber: "917722099288",
  address: {
  line1: "Block No. 11, Ghatate Chamber, Panchsheel Square",
  line2: "Ramdas Peth, Nagpur, Maharashtra 440012",
},
  legalNotice:
    "We only sell Paper Lottery Tickets. All our sales are governed by Lottery Act 1998 & Rules 2010.",
  defaultWhatsappMessage:
    "Hello Balaji Marketing, I would like to purchase a lottery ticket. Please share today's available lottery tickets and details.",
  enquiryWhatsappMessage:
    "Hello Balaji Marketing, I would like to know about today's available lottery tickets.",
} as const;

export function whatsappUrl(message: string = site.defaultWhatsappMessage) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function telUrl() {
  return `tel:${site.phone.replace(/[^\d+]/g, "")}`;
}
