"use client";

import { attach, detach } from "@/actions/follow";
import { UserForProfilePage } from "@/types";
import { useState } from "react";
import { Button, LinkButton } from "@/components/ui";
import { useDialog } from "@/hooks/useDialog";
import Dialog from "@/components/ui/Dialog";
import FollowingList from "./FollowingList";

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

  const handleAttachFollow = async () => {
    setfollowed(true);
    setfollowedByCount((prev) => prev + 1);
    await attach(user.id);
  };

  const handleDetachFollow = async () => {
    setfollowed(false);
    setfollowedByCount((prev) => prev - 1);
    await detach(user.id);
  };

  const followingDialog = useDialog();

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
          <button onClick={followingDialog.handleOpen}>
            <div className="text-xl font-bold">{user._count.following}</div>
            <div className="text-sm">フォロー中</div>
          </button>
        </div>
        <Dialog
          isOpen={followingDialog.isOpen}
          handleClose={followingDialog.handleClose}
          title="フォロー中"
        >
          <FollowingList userId={user.id} />
        </Dialog>
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
            onClick={handleDetachFollow}
            variants={{ size: "sm", color: "secondary" }}
          >
            フォロー中
          </Button>
        ) : (
          <Button
            onClick={handleAttachFollow}
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
