import Image from "next/image";
import { Modal } from "@/components/ui";
import { getPublicUrl } from "@/heplers/getPublicUrl";

export default async function ImagePage({
  params,
}: {
  params: Promise<{ path: string }>;
}) {
  const path = (await params).path;

  return (
    <Modal title="" variants={{ size: "xl" }}>
      <Image
        src={getPublicUrl(path)}
        width={1080}
        height={1080}
        alt=""
        className="max-h-[480px] object-contain"
      />
    </Modal>
  );
}
