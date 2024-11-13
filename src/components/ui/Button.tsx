import { button } from "@/variants/buttonVariants";
import { VariantProps } from "tailwind-variants";

export default function Button({
  children,
  attributes,
  variants,
}: {
  children: React.ReactNode;
  attributes?: React.ComponentProps<"button">;
  variants?: VariantProps<typeof button>;
}) {
  return (
    <button className={button(variants)} {...attributes}>
      {children}
    </button>
  );
}
