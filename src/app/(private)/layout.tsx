import Sidebar from "@/components/layout/Sidebar";
import { profileService } from "@/services/profileService";
import Bottombar from "@/components/layout/BottomBar";
import NavBar from "@/components/layout/NavBar";
import { getLoginUserId } from "@/heplers/getLoginUserId";

export default async function PrivateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const loginUserId = await getLoginUserId();
  const profile = await profileService.getProfileByUserId(loginUserId);

  return (
    <div className="mx-auto max-w-[768px]">
      <NavBar profile={profile} />
      <Sidebar profile={profile} />
      <div className="py-14 sm:py-4 sm:ps-60">
        <div className="px-3 py-4">{children}</div>
      </div>
      <Bottombar />
    </div>
  );
}
