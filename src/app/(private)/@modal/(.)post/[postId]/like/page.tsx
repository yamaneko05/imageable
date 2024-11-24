import UserRow from "@/components/features/user/UserRow";
import { Modal } from "@/components/ui";
import { likeService } from "@/services/likeService";

export default async function PostPage({
  params,
}: {
  params: Promise<{ postId: string }>;
}) {
  const postId = (await params).postId;
  const likes = await likeService.getLikesByPostId(postId);

  return (
    <Modal title="いいねした人">
      <div className="space-y-2">
        {likes.map((like) => (
          <UserRow key={like.userId} user={like.user} />
        ))}
      </div>
    </Modal>
  );
}
