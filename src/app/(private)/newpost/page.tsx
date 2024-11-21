import CreatePostForm from "@/components/features/post/CreatePostForm";
import { getLoginUserId } from "@/heplers/getLoginUserId";
import { profileService } from "@/services/profileService";

export default async function NewpostPage() {
  const loginUserId = await getLoginUserId();
  const profile = await profileService.getProfileByUserId(loginUserId);

  return (
    <>
      <div className="max-w-96">
        <CreatePostForm image={profile.image} />
      </div>
    </>
  );
}
