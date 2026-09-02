import { useState } from "react";
import { Menu, X } from "lucide-react";
import { WhatsAppButton } from "./WhatsAppButton";
import { Logo } from "./Logo";
import "../../Header.css";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#lottery", label: "Lottery" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="header-container">
        {/* Logo */}
        <a
          href="#home"
          aria-label="Balaji Marketing home"
          className="header-logo"
          onClick={closeMenu}
        >
          <Logo className="h-12 w-auto" />
        </a>

        {/* Desktop Navigation */}
        <nav
          className="desktop-navigation"
          aria-label="Main navigation"
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-base font-medium text-muted-foreground transition-colors duration-200 hover:text-foreground"
            >
              {link.label}
            </a>
          ))}

          <WhatsAppButton
            label="Buy Ticket"
            className="ml-2"
          />
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="mobile-menu-button"
        >
          {open ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {open && (
        <nav
          className="mobile-navigation"
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="rounded-lg px-3 py-3 text-base font-medium text-foreground transition-colors hover:bg-secondary"
              >
                {link.label}
              </a>
            ))}

            <WhatsAppButton
              label="Buy Lottery Ticket on WhatsApp"
              className="mt-3 w-full"
              onClick={closeMenu}
            />
          </div>
        </nav>
      )}
    </header>
  );
}
