import { Avatar } from "@/components/ui";
import Link from "next/link";
import { Comment } from "../_services/getComments";

export default function CommentCard({ comment }: { comment: Comment }) {
  return (
    <div key={comment.id} className="flex gap-3 py-2 first:pt-0 last:pb-0">
      <div className="pt-2">
        <Link href={`/profile/${comment.user.id}`}>
          <div className="h-10 w-10">
            <Avatar image={comment.user.profile!.image} />
          </div>
        </Link>
      </div>
      <div className="flex-1">
        <div className="font-bold">{comment.user.profile?.name}</div>
        <div className="mb-1">{comment.comment}</div>
      </div>
    </div>
  );
}
