"use client";

import { Avatar } from "@/components/ui";
import { PostWithRelations } from "@/types";
import dayjs from "@/utils/dayjs";
import PostCardActivities from "./PostCardActivities";
import Link from "next/link";
import Image from "next/image";
import { LucideDot } from "lucide-react";
import { getPublicUrl } from "@/heplers/getPublicUrl";
import { useState } from "react";
import PostDropdown from "./PostDropdown";
import Linkify from "linkify-react";
import { linkifyOptions } from "@/utils/linkify";

export default function PostCard({
  post,
  loginUserId,
  likedByLoginUser,
}: {
  post: PostWithRelations;
  loginUserId: string;
  likedByLoginUser: boolean;
}) {
  const [isDeleted, setIsDeleted] = useState(false);

  return !isDeleted ? (
    <div
      key={post.id}
      className="flex gap-3 border-b py-4 first:pt-0 last:border-none last:pb-0"
    >
      <div className="pt-2">
        <Link href={`/profile/${post.user.id}`}>
          <div className="h-11 w-11">
            <Avatar image={post.user.profile!.image} />
          </div>
        </Link>
      </div>
      <div className="flex-1">
        <div className="flex justify-between">
          <div className="flex items-end">
            <div className="font-bold tracking-wide">
              {post.user.profile?.name}
            </div>
            <LucideDot />
            <div className="text-sm text-zinc-500">
              {dayjs(post.createdAt).fromNow()}
            </div>
          </div>
          <PostDropdown
            postId={post.id}
            setIsDeleted={setIsDeleted}
            deleteable={post.userId === loginUserId}
          />
        </div>
        {post.media && (
          <div className="mt-1">
            <Link href={`/post/${post.id}/media`}>
              <Image
                src={getPublicUrl(post.media.media)}
                width={1080}
                height={1080}
                alt=""
                className="max-h-96 rounded-xl object-contain"
              />
            </Link>
          </div>
        )}
        <div className="mt-1">
          <Linkify options={linkifyOptions}>{post.description}</Linkify>
        </div>
        <div className="mt-2">
          <PostCardActivities post={post} likedByLoginUser={likedByLoginUser} />
        </div>
      </div>
    </div>
  ) : (
    <div className="border-b py-4 text-center text-sm last:border-none">
      この投稿は削除されました
    </div>
  );
}
