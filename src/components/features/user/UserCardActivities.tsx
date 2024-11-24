"use client";

import { followAction, unfollowAction } from "@/actions/follow";
import { UserForProfilePage } from "@/types";
import { useState } from "react";
import { Button, LinkButton } from "@/components/ui";
import Link from "next/link";

export default function UserCardActivities({
  user,
  followedByLoginUser,
  loginUserId,
}: {
  user: UserForProfilePage;
  followedByLoginUser: boolean;
  loginUserId: string;
}) {
  const [followed, setfollowed] = useState(followedByLoginUser);
  const [followedByCount, setfollowedByCount] = useState(
    user._count.followedBy,
  );

  const handleFollow = async () => {
    setfollowed(true);
    setfollowedByCount((prev) => prev + 1);
    await followAction(user.id);
  };

  const handleUnfollow = async () => {
    setfollowed(false);
    setfollowedByCount((prev) => prev - 1);
    await unfollowAction(user.id);
  };

  return (
    <div className="">
      <div className="mb-4 grid grid-cols-3">
        <div className="text-center">
          <div className="text-xl font-bold">{user._count.posts}</div>
          <div className="text-sm">投稿</div>
        </div>
        <div className="text-center">
          <Link href={`/profile/${user.id}/followed`}>
            <div className="text-xl font-bold">{followedByCount}</div>
            <div className="text-sm">フォロワー</div>
          </Link>
        </div>
        <div className="text-center">
          <Link href={`/profile/${user.id}/following`}>
            <div className="text-xl font-bold">{user._count.following}</div>
            <div className="text-sm">フォロー中</div>
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {user.id === loginUserId ? (
          <LinkButton
            href="/profile/edit"
            variants={{ size: "sm", color: "success" }}
          >
            プロフィールを編集
          </LinkButton>
        ) : followed ? (
          <Button
            onClick={handleUnfollow}
            variants={{ size: "sm", color: "secondary" }}
          >
            フォロー中
          </Button>
        ) : (
          <Button
            onClick={handleFollow}
            variants={{ size: "sm", color: "primary" }}
          >
            フォロー
          </Button>
        )}
        <LinkButton
          href={`/profile/${user.id}/share`}
          variants={{ size: "sm", color: "secondary" }}
        >
          プロフィールをシェア
        </LinkButton>
      </div>
    </div>
  );
}
