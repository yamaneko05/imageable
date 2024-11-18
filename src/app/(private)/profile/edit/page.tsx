import EditProfileForm from "@/components/features/profile/EditProfileForm";
import { PageHeading } from "@/components/ui";
import { profileService } from "@/services/profileService";
import UploadImageForm from "@/components/features/profile/UploadImageForm";

export default async function ProfilePage() {
  const profile = await profileService.getLoginUserProfile();

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
