import { button } from "@/variants/buttonVariants";
import { VariantProps } from "tailwind-variants";

export default function InputButton({
  children,
  attributes,
  variants,
}: {
  children: React.ReactNode;
  attributes: React.ComponentProps<"input">;
  variants?: VariantProps<typeof button>;
}) {
  const id = crypto.randomUUID();

  return (
    <>
      <input {...attributes} id={id} hidden />
      <label htmlFor={id} className={button(variants)}>
        {children}
      </label>
    </>
  );
}
