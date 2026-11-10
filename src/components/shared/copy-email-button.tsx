"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";
import { buttonClasses } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CopyEmailButtonProps {
  email: string;
  labels: { copy: string; copied: string; error: string };
  className?: string;
}

/** Copies the address to the clipboard. Useful when no mail client is configured. */
export function CopyEmailButton({ email, labels, className }: CopyEmailButtonProps) {
  const [state, setState] = useState<"idle" | "copied" | "error">("idle");

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setState("copied");
    } catch {
      setState("error");
    }
    window.setTimeout(() => setState("idle"), 2500);
  }

  return (
    <button type="button" onClick={copy} className={cn(buttonClasses("secondary", "lg"), className)}>
      {state === "copied" ? (
        <Check aria-hidden="true" className="size-4 text-brand-600" />
      ) : (
        <Copy aria-hidden="true" className="size-4" />
      )}
      <span aria-live="polite">
        {state === "copied" ? labels.copied : state === "error" ? labels.error : labels.copy}
      </span>
    </button>
  );
}
