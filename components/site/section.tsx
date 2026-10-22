import { cn } from "@/lib/utils";

/** A titled block of a page; `id` makes it linkable. */
export function Section({
  id,
  heading,
  children,
  className,
}: {
  id?: string;
  heading?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("scroll-mt-24 space-y-6", className)}>
      {heading && <h2 className="text-3xl font-bold text-center">{heading}</h2>}
      {children}
    </section>
  );
}
