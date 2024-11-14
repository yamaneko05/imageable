import { LucideAlertCircle, LucideCheckCircle2 } from "lucide-react";
import { tv, VariantProps } from "tailwind-variants";

const alert = tv({
  base: "mb-6 flex gap-2 rounded-lg p-3",
  variants: {
    color: {
      danger: "bg-red-200",
      success: "bg-green-200",
    },
  },
  defaultVariants: {
    color: "success",
  },
});

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
