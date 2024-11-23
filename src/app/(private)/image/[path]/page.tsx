import Image from "next/image";
import { getPublicUrl } from "@/heplers/getPublicUrl";

export default async function ImagePage({
  params,
}: {
  params: Promise<{ path: string }>;
}) {
  const path = (await params).path;

  return <Image src={getPublicUrl(path)} width={1080} height={1080} alt="" />;
}
