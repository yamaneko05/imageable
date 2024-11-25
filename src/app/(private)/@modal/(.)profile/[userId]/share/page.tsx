import getUserProfile from "./_services/getUserProfile";
import CopyProfileUrl from "./_components/CopyProfileUrl";
import { Avatar, Modal } from "@/components/ui";
import Image from "next/image";
import QRCode from "qrcode";

export default async function ImagePage({
  params,
}: {
  params: Promise<{ userId: string }>;
}) {
  const userId = (await params).userId;

  const user = await getUserProfile(userId);

  const url = `${process.env.APP_URL}/profile/${userId}`;

  const qrcode = await QRCode.toDataURL(url, {
    width: 240,
    margin: 0,
  });

  return (
    <Modal title="プロフィールをシェア">
      <div className="flex flex-col items-center gap-4">
        <Image src="/logo.png" alt="" width={180} height={36} />
        <Image src={qrcode} alt="" width={240} height={240} />
        <div className="flex items-center gap-3">
          <div className="h-14 w-14">
            <Avatar image={user.profile!.image} />
          </div>
          <div className="font-bold">{user.profile?.name}</div>
        </div>
      </div>
      <CopyProfileUrl url={url} />
    </Modal>
  );
}
