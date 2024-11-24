import { Avatar } from "@/components/ui";
import { UserFollowing } from "@/types";
import Link from "next/link";

export default function UserRow({ user }: { user: UserFollowing }) {
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
    </div>
  );
}
