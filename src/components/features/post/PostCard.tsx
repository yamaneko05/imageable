import { Avatar } from "@/components/ui";
import { profileService } from "@/services/profileService";
import { PostWithRelation } from "@/types/post";

export default async function PostCard({ post }: { post: PostWithRelation }) {
  return (
    <div key={post.id} className="flex gap-3 py-4">
      <div className="pt-2">
        <Avatar
          src={await profileService.getImageUrl(post.user.profile!.image)}
          size={42}
        />
      </div>
      <div className="">
        <div className="font-bold">{post.user.profile?.name}</div>
        <div className="">{post.description}</div>
        <div className="text-sm">{post.createdAt.toISOString()}</div>
      </div>
    </div>
  );
}
