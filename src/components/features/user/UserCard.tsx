import { Avatar } from "@/components/ui";
import { authService } from "@/services/authService";
import { profileService } from "@/services/profileService";
import { UserForProfilePage } from "@/types";
import UserCardActivities from "./UserCardActivities";
import { userService } from "@/services/userService";
import { getLoginUserId } from "@/helpers";

export default async function UserCard({ user }: { user: UserForProfilePage }) {
  const loginUserId = await getLoginUserId();

  const followedByLoginUser = await userService.firstIsFollowedBySecond(
    user.id,
    loginUserId,
  );

  return (
    <div className="mb-4">
      <div className="mb-2 flex flex-col items-center gap-4 sm:flex-row sm:gap-8">
        <div className="h-24 w-24 sm:h-32 sm:w-32">
          <Avatar src={await profileService.getImageUrl(user.profile!.image)} />
        </div>
        <UserCardActivities
          user={user}
          loginUserId={loginUserId}
          followedByLoginUser={followedByLoginUser}
        />
      </div>
      <div className="text-lg font-bold">{user.profile?.name}</div>
      <div className="text-sm">{user.profile?.description}</div>
    </div>
  );
}
