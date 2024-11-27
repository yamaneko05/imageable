"use client";

import { likeAction, unlikeAction } from "@/actions/like";
import { PostWithRelations } from "@/types";
import { LucideHeart, LucideMessageCircle } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function PostCardActivities({
  post,
  likedByLoginUser,
}: {
  post: PostWithRelations;
  likedByLoginUser: boolean;
}) {
  const [liked, setLiked] = useState(likedByLoginUser);
  const [likedUserCount, setLikedUserCount] = useState(post._count.likedUsers);

  const handleClickHeart = async () => {
    if (liked) {
      setLikedUserCount((count) => count - 1);
      setLiked(false);
      await unlikeAction(post.id);
    } else {
      setLikedUserCount((count) => count + 1);
      setLiked(true);
      await likeAction(post.id);
    }
  };

  return (
    <div className="flex gap-4">
      <Link href={`/post/${post.id}/comment`}>
        <div className="flex items-center gap-2">
          <LucideMessageCircle size={20} />
          <div className="p-1 font-bold">{post._count.comments}</div>
        </div>
      </Link>
      <div className="flex items-center gap-2">
        <LucideHeart
          size={20}
          color={liked ? "red" : undefined}
          fill={liked ? "red" : "none"}
          onClick={handleClickHeart}
          cursor="pointer"
          className="active:animate-bounce"
        />
        <Link href={`/post/${post.id}/like`} className="p-1 font-bold">
          {likedUserCount}
        </Link>
      </div>
    </div>
  );
}
