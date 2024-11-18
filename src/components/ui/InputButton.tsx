import { button } from "@/variants";
import { VariantProps } from "tailwind-variants";

export default function InputButton({
  children,
  attributes,
  variants,
  id,
}: {
  children: React.ReactNode;
  attributes: React.ComponentProps<"input">;
  variants?: VariantProps<typeof button>;
  id: string;
}) {
  return (
    <>
      <input {...attributes} id={id} hidden />
      <label htmlFor={id} className={button(variants)}>
        {children}
      </label>
    </>
  );
}
