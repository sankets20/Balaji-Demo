import { Info } from "lucide-react";
import { site } from "../../config/site";

export function LegalNotice() {
  return (
    <aside
      aria-label="Legal notice"
      className="border-y border-border bg-secondary/70 py-6"
    >
      <div className="mx-auto flex max-w-4xl items-start gap-3 px-5">
        <Info className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
        <p className="text-sm leading-relaxed text-muted-foreground">
          <span className="font-semibold text-foreground">Notice:</span> {site.legalNotice}
        </p>
      </div>
    </aside>
  );
}
