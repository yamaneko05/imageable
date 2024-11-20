import { button } from "@/variants";
import { LucideLoader2 } from "lucide-react";
import { VariantProps } from "tailwind-variants";

export default function InputButton({
  children,
  attributes,
  variants,
  id,
  isPending,
}: {
  children: React.ReactNode;
  attributes: React.ComponentProps<"input">;
  variants?: VariantProps<typeof button>;
  id: string;
  isPending?: boolean;
}) {
  return (
    <>
      <input {...attributes} id={id} hidden />
      <label htmlFor={id} className={button(variants)}>
        {children}
        {isPending && (
          <LucideLoader2
            size={20}
            strokeWidth={2}
            className="ms-1 inline-block animate-spin"
          />
        )}
      </label>
    </>
  );
}
