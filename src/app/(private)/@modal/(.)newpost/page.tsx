import CreatePostForm from "@/components/features/post/CreatePostForm";
import { Modal } from "@/components/ui";
import { getLoginUserId } from "@/heplers/getLoginUserId";
import { profileService } from "@/services/profileService";

export default async function NewpostPage() {
  const loginUserId = await getLoginUserId();
  const profile = await profileService.getProfileByUserId(loginUserId);

  return (
    <Modal title="" variants={{ size: "lg" }}>
      <CreatePostForm image={profile.image} />
    </Modal>
  );
}
