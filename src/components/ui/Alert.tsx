import { alert } from "@/variants";
import { LucideAlertCircle, LucideCheckCircle2 } from "lucide-react";
import { VariantProps } from "tailwind-variants";

export default function Alert({
  children,
  variants,
}: {
  children: React.ReactNode;
  variants?: VariantProps<typeof alert>;
}) {
  return (
    <div className={alert(variants)}>
      {variants?.color === "danger" ? (
        <LucideAlertCircle className="translate-y-0.5 text-red-500" />
      ) : (
        <LucideCheckCircle2 className="translate-y-0.5 text-green-500" />
      )}
      <div className="">{children}</div>
    </div>
  );
}
