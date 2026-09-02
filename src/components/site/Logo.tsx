import logoAsset from "../../assets/logo.png";
import { cn } from "../../lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <img
      src={logoAsset}
      alt="Balaji Marketing logo"
      className={cn("h-10 w-auto object-contain sm:h-12", className)}
    />
  );
}