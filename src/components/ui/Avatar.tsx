import { avatarImage } from "@/variants";
import Image from "next/image";
import { VariantProps } from "tailwind-variants";

export default function Avatar({
  src,
  variants,
}: {
  src: string;
  variants?: VariantProps<typeof avatarImage>;
}) {
  return (
    <Image
      src={src}
      alt=""
      width={240}
      height={240}
      className={avatarImage(variants)}
    />
  );
}
