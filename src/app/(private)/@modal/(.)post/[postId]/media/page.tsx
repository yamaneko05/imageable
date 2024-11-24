import Image from "next/image";
import { Modal } from "@/components/ui";
import { getPublicUrl } from "@/heplers/getPublicUrl";
import { mediaService } from "@/services/mediaService";

export default async function ImagePage({
  params,
}: {
  params: Promise<{ postId: string }>;
}) {
  const postId = (await params).postId;

  const media = await mediaService.getMediaByPostId(postId);

  return (
    <Modal title="" variants={{ size: "xl" }}>
      <Image
        src={getPublicUrl(media.media)}
        width={1080}
        height={1080}
        alt=""
        className="max-h-[480px] object-contain"
      />
    </Modal>
  );
}