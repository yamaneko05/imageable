import EditProfileForm from "@/components/features/profile/EditProfileForm";
import { PageHeading } from "@/components/ui";
import { authService } from "@/services/authService";
import { PrismaClient } from "@prisma/client";
import { profileService } from "@/services/profileService";
import UploadImageForm from "@/components/features/profile/UploadImageButton";

export default async function ProfilePage() {
  const loginUserId = await authService.getLoginUserId();

  const prisma = new PrismaClient();

  const profile = await prisma.profile.findUnique({
    where: {
      userId: loginUserId,
    },
  });

  return (
    <>
      <PageHeading>プロフィールを編集</PageHeading>
      <div className="w-96">
        <UploadImageForm
          imageUrl={await profileService.getImageUrl(profile!.image)}
        />
        <EditProfileForm profile={profile!} />
      </div>
    </>
  );
}
