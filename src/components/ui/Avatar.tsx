import Image from "next/image";

export default function Avatar({ src, size }: { src: string; size: number }) {
  return (
    <Image
      src={src}
      alt=""
      className="rounded-full"
      width={size}
      height={size}
    />
  );
}
