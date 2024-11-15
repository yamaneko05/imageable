import { Avatar } from "@/components/ui";
import { profileService } from "@/services/profileService";
import { PostWithRelation } from "@/types/post";
import dayjs from "@/utils/dayjs";
import PostCardActivities from "./PostCardActivities";

export default async function PostCard({
  post,
  likedByLoginUser,
}: {
  post: PostWithRelation;
  likedByLoginUser: boolean;
}) {
  return (
    <div key={post.id} className="flex gap-3 py-4">
      <div className="pt-2">
        <Avatar
          src={await profileService.getImageUrl(post.user.profile!.image)}
          size={42}
        />
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <div className="font-bold">{post.user.profile?.name}</div>
          <div className="text-sm text-zinc-500">
            ・ {dayjs(post.createdAt).fromNow()}
          </div>
        </div>
        <div className="mb-1">{post.description}</div>
        <PostCardActivities post={post} likedByLoginUser={likedByLoginUser} />
      </div>
    </div>
  );
}
