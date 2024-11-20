import Sidebar from "@/components/layout/Sidebar";
import { profileService } from "@/services/profileService";
import { authService } from "@/services/authService";
import { userService } from "@/services/userService";
import Bottombar from "@/components/layout/BottomBar";
import NavBar from "@/components/layout/NavBar";

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
      <NavBar loginUser={loginUser} profile={profile} />
      <Sidebar loginUser={loginUser} profile={profile} />
      <div className="py-14 sm:py-4 sm:ps-60">
        <div className="px-3 py-4">{children}</div>
      </div>
      <Bottombar />
    </div>
  );
}
