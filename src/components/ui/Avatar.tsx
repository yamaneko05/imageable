import { getProfileImageUrl } from "@/heplers/getProfileImageUrl";
import { avatarImage } from "@/variants";
import Image from "next/image";
import { VariantProps } from "tailwind-variants";

export default function Avatar({
  image,
  variants,
}: {
  image: string | null;
  variants?: VariantProps<typeof avatarImage>;
}) {
  const profileImageUrl = getProfileImageUrl(image);

  return (
    <Image
      src={profileImageUrl}
      alt=""
      width={240}
      height={240}
      className={avatarImage(variants)}
    />
  );
}
