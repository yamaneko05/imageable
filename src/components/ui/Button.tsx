import { button } from "@/variants";
import { LucideLoader2 } from "lucide-react";
import { VariantProps } from "tailwind-variants";

interface Props extends React.ComponentProps<"button"> {
  children: React.ReactNode;
  variants?: VariantProps<typeof button>;
  isPending?: boolean;
}

export default function Button({
  children,
  variants,
  isPending = false,
  ...attributes
}: Props) {
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
