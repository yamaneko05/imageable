import { button } from "@/variants";
import Link, { LinkProps } from "next/link";
import { tv, VariantProps } from "tailwind-variants";

const linkButton = tv({
  extend: button,
  base: "inline-block text-center",
});

export default function LinkButton({
  children,
  attributes,
  variants,
}: {
  children: React.ReactNode;
  attributes: LinkProps;
  variants?: VariantProps<typeof linkButton>;
}) {
  return (
    <Link className={linkButton(variants)} {...attributes}>
      {children}
    </Link>
  );
}
