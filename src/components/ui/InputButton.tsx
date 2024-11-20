import { button } from "@/variants";
import { LucideLoader2 } from "lucide-react";
import { VariantProps } from "tailwind-variants";

interface Props extends React.ComponentProps<"input"> {
  children: React.ReactNode;
  variants?: VariantProps<typeof button>;
  id: string;
  isPending?: boolean;
}

export default function InputButton({
  children,
  variants,
  id,
  isPending,
  ...attributes
}: Props) {
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
