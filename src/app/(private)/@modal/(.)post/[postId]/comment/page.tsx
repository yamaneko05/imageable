import CommentCard from "./_components/CommentCard";
import CreateCommentForm from "./_components/CreateCommentForm";
import { Modal } from "@/components/ui";
import getComments from "./_services/getComments";

export default async function PostPage({
  params,
}: {
  params: Promise<{ postId: string }>;
}) {
  const postId = (await params).postId;
  const comments = await getComments(postId);

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
