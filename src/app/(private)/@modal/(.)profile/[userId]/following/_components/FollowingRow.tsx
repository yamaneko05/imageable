"use client";

import { followAction, unfollowAction } from "@/actions/follow";
import { Follower } from "../../followed/_services/getFollowers";
import { Avatar, Button } from "@/components/ui";
import Link from "next/link";
import { useState } from "react";

export function FollowingRow({ user }: { user: Follower }) {
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
      <div className="flex items-center gap-3">
        <Link href={`/profile/${user.id}`}>
          <div className="h-10 w-10">
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
