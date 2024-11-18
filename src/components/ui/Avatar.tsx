import { avatarImage } from "@/variants";
import Image from "next/image";
import { VariantProps } from "tailwind-variants";

export default function Avatar({
  src,
  size,
  variants,
}: {
  src: string;
  size: number;
  variants?: VariantProps<typeof avatarImage>;
}) {
  return (
    <Image
      src={src}
      alt=""
      className={avatarImage(variants)}
      width={size}
      height={size}
    />
  );
}
