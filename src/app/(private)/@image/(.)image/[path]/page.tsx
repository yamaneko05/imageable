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
    <Modal>
      <div className="w-[560px]">
        <Image src={getPublicUrl(path)} width={1080} height={1080} alt="" />
      </div>
    </Modal>
  );
}
