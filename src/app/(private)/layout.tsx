import Sidebar from "@/components/layout/Sidebar";
import { profileService } from "@/services/profileService";
import { authService } from "@/services/authService";
import { userService } from "@/services/userService";
import Bottombar from "@/components/layout/BottomBar";

export default async function PrivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const loginUserAuthId = await authService.getLoginUserAuthId();
  const loginUser = await userService.getUserByAuthId(loginUserAuthId);
  const profile = await profileService.getProfileByUserId(loginUser.id);

  return (
    <div className="mx-auto max-w-[768px]">
      <Sidebar loginUser={loginUser} profile={profile} />
      <Bottombar />
      <div className="p-3 sm:ms-56">{children}</div>
    </div>
  );
}
