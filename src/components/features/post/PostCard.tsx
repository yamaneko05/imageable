import { Avatar } from "@/components/ui";
import { profileService } from "@/services/profileService";
import { PostWithRelations } from "@/types";
import dayjs from "@/utils/dayjs";
import PostCardActivities from "./PostCardActivities";
import Link from "next/link";
import Image from "next/image";
import { storageService } from "@/services/storageService";
import { LucideDot } from "lucide-react";

export default async function PostCard({
  post,
  likedByLoginUser,
}: {
  post: PostWithRelations;
  likedByLoginUser: boolean;
}) {
  return (
    <div key={post.id} className="flex gap-3 py-4">
      <div className="pt-2">
        <Link href={`/profile/${post.user.id}`}>
          <div className="h-12 w-12">
            <Avatar
              src={await profileService.getImageUrl(post.user.profile!.image)}
            />
          </div>
        </Link>
      </div>
      <div className="flex-1">
        <div className="flex items-center">
          <div className="font-bold">{post.user.profile?.name}</div>
          <LucideDot />
          <div className="text-sm text-zinc-500">
            {dayjs(post.createdAt).fromNow()}
          </div>
        </div>
        {post.media && (
          <div className="py-1">
            <Image
              src={await storageService.getPublicUrl(post.media.media)}
              width={1080}
              height={1080}
              alt=""
              className="rounded-xl"
            />
          </div>
        )}
        <div className="mb-1">{post.description}</div>
        <PostCardActivities post={post} likedByLoginUser={likedByLoginUser} />
      </div>
    </div>
  );
}
