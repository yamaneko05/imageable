import { UserFollowing } from "@/types";
import { useEffect, useState } from "react";
import { FollowingUser } from "./FollowingUser";
import { getUserFollowedBy } from "@/actions/user";

export default function FollowedByList({ userId }: { userId: string }) {
  const [followings, setFollowings] = useState<UserFollowing[]>([]);

  useEffect(() => {
    const fetchUserFollowings = async () => {
      const userFollowings = await getUserFollowedBy(userId);
      setFollowings(userFollowings);
    };
    fetchUserFollowings();
  }, [userId]);

  return (
    <div className="space-y-1">
      {followings.map((user) => (
        <FollowingUser key={userId} user={user} />
      ))}
    </div>
  );
}
