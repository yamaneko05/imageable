import { Avatar } from "@/components/ui";
import { authService } from "@/services/authService";
import { profileService } from "@/services/profileService";
import { UserForProfilePage } from "@/types";
import UserCardActivities from "./UserCardActivities";
import { userService } from "@/services/userService";

export default async function UserCard({ user }: { user: UserForProfilePage }) {
  const loginUserAuthId = await authService.getLoginUserAuthId();
  const loginUser = await userService.getUserByAuthId(loginUserAuthId);

  const followedByLoginUser = await userService.firstIsFollowedBySecond(
    user.id,
    loginUser.id,
  );

  return (
    <div className="mb-4">
      <div className="mb-2 flex items-center gap-8">
        <Avatar
          src={await profileService.getImageUrl(user.profile!.image)}
          size={96}
        />
        <UserCardActivities
          user={user}
          loginUserAuthId={loginUserAuthId}
          followedByLoginUser={followedByLoginUser}
        />
      </div>
      <div className="mb-2 font-bold">{user.profile?.name}</div>
      <div className="text-sm">{user.profile?.description}</div>
    </div>
  );
}
