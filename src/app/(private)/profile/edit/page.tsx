import EditProfileForm from "@/components/features/profile/EditProfileForm";
import { PageHeading } from "@/components/ui";
import { profileService } from "@/services/profileService";
import UploadImageForm from "@/components/features/profile/UploadImageForm";
import { authService } from "@/services/authService";
import { userService } from "@/services/userService";

export default async function ProfilePage() {
  const loginUserAuthId = await authService.getLoginUserAuthId();
  const loginUser = await userService.getUserByAuthId(loginUserAuthId);
  const profile = await profileService.getProfileByUserId(loginUser.id);

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
