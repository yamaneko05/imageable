"use client";

import { attach, detach } from "@/actions/like";
import { PostWithRelation } from "@/types/post";
import { LucideHeart, LucideMessageCircle } from "lucide-react";
import { useState } from "react";

export default function PostCardActivities({
  post,
  likedByLoginUser,
}: {
  post: PostWithRelation;
  likedByLoginUser: boolean;
}) {
  const [liked, setLiked] = useState(likedByLoginUser);
  const [likedUserCount, setLikedUserCount] = useState(post._count.likedUsers);

  const handleClickHeart = async () => {
    if (liked) {
      setLikedUserCount((count) => count - 1);
      setLiked(false);
      await detach(post.id);
    } else {
      setLikedUserCount((count) => count + 1);
      setLiked(true);
      await attach(post.id);
    }
  };

  return (
    <div className="flex gap-3">
      <div className="flex items-center gap-1">
        <LucideMessageCircle size={20} />
        {post._count.comments}
      </div>
      <div className="flex items-center gap-1">
        <LucideHeart
          size={20}
          color={liked ? "red" : undefined}
          fill={liked ? "red" : "none"}
          onClick={handleClickHeart}
          cursor="pointer"
        />
        {likedUserCount}
      </div>
    </div>
  );
}
