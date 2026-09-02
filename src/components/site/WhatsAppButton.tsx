import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "../../config/site";
import { cn } from "../../lib/utils";

type Props = {
  label: string;
  message?: string;
  variant?: "gold" | "navy" | "outline";
  className?: string;
  size?: "md" | "lg";
  onClick?: () => void;
};

const variants = {
  gold: "bg-accent text-accent-foreground hover:brightness-105 shadow-gold",
  navy: "bg-primary text-primary-foreground hover:bg-primary/90",
  outline: "border border-border bg-card text-foreground hover:bg-secondary",
};

export function WhatsAppButton({
  label,
  message,
  variant = "gold",
  className,
  size = "md",
  onClick,
}: Props) {
  return (
    <a
      href={whatsappUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className={cn(
        " flex items-center justify-center gap-2 rounded-full text-center font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        size === "lg" ? "px-6 py-3.5 text-base sm:px-7" : "px-5 py-2.5 text-sm",
        variants[variant],
        className,
      )}
    >
      <MessageCircle className="h-4 w-4 shrink-0" aria-hidden="true" />
      <span>{label}</span>
    </a>
  );
}
