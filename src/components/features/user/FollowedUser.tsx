"use client";

import { followAction, unfollowAction } from "@/actions/follow";
import { Avatar, Button } from "@/components/ui";
import { UserFollowing } from "@/types";
import Link from "next/link";
import { useState } from "react";

export function FollowedUser({ user }: { user: UserFollowing }) {
  const [followed, setfollowed] = useState(true);

  const handleFollow = async () => {
    setfollowed(true);
    await followAction(user.id);
  };

  const handleUnfollow = async () => {
    setfollowed(false);
    await unfollowAction(user.id);
  };

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Link href={`/profile/${user.id}`}>
          <div className="h-12 w-12">
            <Avatar image={user.profile!.image} />
          </div>
        </Link>
        <div className="font-bold">{user.profile?.name}</div>
      </div>
      {followed ? (
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
    </div>
  );
}
