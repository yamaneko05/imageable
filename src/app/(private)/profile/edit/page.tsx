import EditProfileForm from "@/components/features/profile/EditProfileForm";
import { PageHeading } from "@/components/ui";
import { profileService } from "@/services/profileService";
import UploadImageForm from "@/components/features/profile/UploadImageForm";
import { getLoginUserId } from "@/helpers";

export default async function ProfilePage() {
  const loginUserId = await getLoginUserId();
  const profile = await profileService.getProfileByUserId(loginUserId);

  return (
    <>
      <PageHeading>プロフィールを編集</PageHeading>
      <div className="max-w-96">
        <UploadImageForm
          imageUrl={await profileService.getImageUrl(profile!.image)}
        />
        <EditProfileForm profile={profile!} />
      </div>
    </>
  );
}
