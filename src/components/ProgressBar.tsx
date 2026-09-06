import { cn } from "@/lib/utils";

export function ProgressBar({
  value,
  className,
  barClassName,
}: {
  value: number;
  className?: string;
  barClassName?: string;
}) {
  const v = Math.max(0, Math.min(100, value));
  return (
    <div className={cn("h-2 w-full overflow-hidden rounded-full bg-slate-100", className)}>
      <div
        className={cn("h-full rounded-full bg-gradient-to-r from-brand-500 to-accent-500 transition-all", barClassName)}
        style={{ width: `${v}%` }}
      />
    </div>
  );
}
