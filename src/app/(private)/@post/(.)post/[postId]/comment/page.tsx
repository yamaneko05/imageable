import CommentCard from "@/components/features/comment/CommentCard";
import CreateCommentForm from "@/components/features/comment/CreateCommentForm";
import { Modal } from "@/components/ui";
import { commentService } from "@/services/commentService";

export default async function PostPage({
  params,
}: {
  params: Promise<{ postId: string }>;
}) {
  const postId = (await params).postId;
  const comments = await commentService.getCommentsByPostId(postId);

  return (
    <Modal title="コメント" variants={{ size: "lg" }}>
      {comments.map((comment) => (
        <CommentCard key={comment.id} comment={comment} />
      ))}
      <div className="mt-4">
        <CreateCommentForm postId={postId} />
      </div>
    </Modal>
  );
}
