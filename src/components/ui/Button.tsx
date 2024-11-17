import { button } from "@/variants/buttonVariants";
import { LucideLoader2 } from "lucide-react";
import { VariantProps } from "tailwind-variants";

export default function Button({
  children,
  attributes,
  variants,
  isPending = false,
}: {
  children: React.ReactNode;
  attributes?: React.ComponentProps<"button">;
  variants?: VariantProps<typeof button>;
  isPending?: boolean;
}) {
  return (
    <button className={button(variants)} {...attributes}>
      {children}
      {isPending && (
        <LucideLoader2
          size={20}
          strokeWidth={2}
          className="ms-1 inline-block animate-spin"
        />
      )}
    </button>
  );
}
