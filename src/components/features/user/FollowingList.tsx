import { UserFollowing } from "@/types";
import { useEffect, useState } from "react";
import { FollowItem } from "./FollowItem";
import { getUserFollowing } from "@/actions/user";

export default function FollowingList({ userId }: { userId: string }) {
  const [followings, setFollowings] = useState<UserFollowing[]>([]);

  useEffect(() => {
    const fetchUserFollowings = async () => {
      const userFollowings = await getUserFollowing(userId);
      setFollowings(userFollowings);
    };
    fetchUserFollowings();
  }, []);

  return (
    <div className="space-y-1">
      {followings.map((user) => (
        <FollowItem key={userId} user={user} />
      ))}
    </div>
  );
}
