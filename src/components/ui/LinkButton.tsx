import { button } from "@/variants";
import Link, { LinkProps } from "next/link";
import { tv, VariantProps } from "tailwind-variants";

const linkButton = tv({
  extend: button,
  base: "inline-block text-center",
});

interface Props extends LinkProps {
  children: React.ReactNode;
  variants?: VariantProps<typeof linkButton>;
}

export default function LinkButton({
  children,
  variants,
  ...attributes
}: Props) {
  return (
    <Link className={linkButton(variants)} {...attributes}>
      {children}
    </Link>
  );
}
