"use client";

import { attach, detach } from "@/actions/follow";
import { UserForProfilePage } from "@/types";
import { useState } from "react";
import { Button, LinkButton } from "@/components/ui";

export default function UserCardActivities({
  user,
  followedByLoginUser,
  loginUserAuthId,
}: {
  user: UserForProfilePage;
  followedByLoginUser: boolean;
  loginUserAuthId: string;
}) {
  const [followed, setfollowed] = useState(followedByLoginUser);
  const [followedByCount, setfollowedByCount] = useState(
    user._count.followedBy,
  );

  const handleClickFollow = async () => {
    if (followed) {
      setfollowedByCount((count) => count - 1);
      setfollowed(false);
      await detach(user.id);
    } else {
      setfollowedByCount((count) => count + 1);
      setfollowed(true);
      await attach(user.id);
    }
  };
  return (
    <div className="">
      <div className="mb-4 grid grid-cols-3">
        <div className="text-center">
          <div className="text-xl font-bold">{user._count.posts}</div>
          <div className="text-sm">投稿</div>
        </div>
        <div className="text-center">
          <div className="text-xl font-bold">{followedByCount}</div>
          <div className="text-sm">フォロワー</div>
        </div>
        <div className="text-center">
          <div className="text-xl font-bold">{user._count.following}</div>
          <div className="text-sm">フォロー中</div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4">
        {user.authId === loginUserAuthId ? (
          <LinkButton
            href="/profile/edit"
            variants={{ size: "sm", color: "secondary" }}
          >
            プロフィールを編集
          </LinkButton>
        ) : followed ? (
          <Button
            onClick={handleClickFollow}
            variants={{ size: "sm", color: "secondary" }}
          >
            フォロー中
          </Button>
        ) : (
          <Button
            onClick={handleClickFollow}
            variants={{ size: "sm", color: "primary" }}
          >
            フォロー
          </Button>
        )}
        <Button variants={{ size: "sm", color: "secondary" }}>
          プロフィールをシェア
        </Button>
      </div>
    </div>
  );
}
