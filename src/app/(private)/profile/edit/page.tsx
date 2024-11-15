import EditProfileForm from "@/components/features/profile/EditProfileForm";
import UploadImageButton from "@/components/features/profile/UploadImageButton";
import { PageHeading } from "@/components/ui";
import { authService } from "@/services/authService";
import { PrismaClient } from "@prisma/client";
import Image from "next/image";
import { profileService } from "@/services/profileService";

export default async function ProfilePage() {
  const prisma = new PrismaClient();

  const loginUserId = await authService.getLoginUserId();

  const profile = await prisma.profile.findUnique({
    where: {
      userId: loginUserId,
    },
  });

  return (
    <>
      <PageHeading>プロフィールを編集</PageHeading>
      <div className="w-96">
        <div className="mb-6 flex items-center justify-between rounded-xl bg-zinc-200 p-3">
          <Image
            src={await profileService.getImageUrl(profile!.image)}
            alt=""
            className="rounded-full"
            width={96}
            height={96}
          />
          <UploadImageButton />
        </div>
        <EditProfileForm profile={profile!} />
      </div>
    </>
  );
}
