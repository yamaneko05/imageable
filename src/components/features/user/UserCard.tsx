import { Avatar } from "@/components/ui";
import { UserForProfilePage } from "@/types";
import UserCardActivities from "./UserCardActivities";
import { userService } from "@/services/userService";
import { getLoginUserId } from "@/heplers/getLoginUserId";

export default async function UserCard({ user }: { user: UserForProfilePage }) {
  const loginUserId = await getLoginUserId();

  const followedByLoginUser = await userService.firstIsFollowedBySecond(
    user.id,
    loginUserId,
  );

  return (
    <div className="mb-4">
      <div className="mb-2">
        <div className="mb-2 flex items-center gap-4">
          <div className="h-24 w-24 sm:h-32 sm:w-32">
            <Avatar image={user.profile!.image} />
          </div>
          <UserCardActivities
            user={user}
            loginUserId={loginUserId}
            followedByLoginUser={followedByLoginUser}
          />
        </div>
        <div className="mb-1 text-lg font-bold">{user.profile?.name}</div>
        <div className="">{user.profile?.description}</div>
      </div>
    </div>
  );
}
