import EditProfileForm from "./_components/EditProfileForm";
import { PageHeading } from "@/components/ui";
import UploadImageForm from "@/components/features/profile/UploadImageForm";
import { getLoginUserId } from "@/heplers/getLoginUserId";
import getProfile from "@/services/getProfile";

export default async function ProfilePage() {
  const loginUserId = await getLoginUserId();
  const profile = await getProfile(loginUserId);

  return (
    <>
      <PageHeading>プロフィールを編集</PageHeading>
      <div className="max-w-96">
        <UploadImageForm image={profile!.image} />
        <EditProfileForm profile={profile!} />
      </div>
    </>
  );
}
