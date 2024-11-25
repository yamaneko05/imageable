import CreatePostForm from "./_components/CreatePostForm";
import { Modal } from "@/components/ui";
import { getLoginUserId } from "@/heplers/getLoginUserId";
import getProfileImage from "./_services/getProfileImage";

export default async function NewpostPage() {
  const loginUserId = await getLoginUserId();
  const image = await getProfileImage(loginUserId);

  return (
    <Modal title="" variants={{ size: "lg" }}>
      <CreatePostForm image={image} />
    </Modal>
  );
}
