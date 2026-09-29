import { Link } from "@tanstack/react-router";
import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export const buttonStyles = {
  primary: "inline-flex min-h-11 items-center justify-center gap-2 rounded-sm bg-primary px-5 py-3 text-sm font-bold text-primary-foreground transition hover:-translate-y-0.5 hover:bg-primary/90",
  light: "inline-flex min-h-11 items-center justify-center gap-2 rounded-sm bg-background px-5 py-3 text-sm font-bold text-foreground transition hover:-translate-y-0.5 hover:bg-background/90",
  outline: "inline-flex min-h-11 items-center justify-center gap-2 rounded-sm border border-border bg-transparent px-5 py-3 text-sm font-bold text-foreground transition hover:bg-muted",
  gold: "inline-flex min-h-11 items-center justify-center gap-2 rounded-sm bg-gold px-5 py-3 text-sm font-bold text-navy transition hover:-translate-y-0.5 hover:bg-gold/90",
  icon: "inline-flex size-11 items-center justify-center rounded-full border border-border bg-background text-foreground transition hover:bg-primary hover:text-primary-foreground",
};

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & { variant?: keyof typeof buttonStyles };
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant = "primary", ...props }, ref) => (
  <button ref={ref} className={cn(buttonStyles[variant], className)} {...props} />
));
Button.displayName = "Button";

export function ButtonLink({ to, children, variant = "primary", className }: { to: string; children: ReactNode; variant?: keyof typeof buttonStyles; className?: string }) {
  return <Link to={to} className={cn(buttonStyles[variant], className)}>{children}</Link>;
}
