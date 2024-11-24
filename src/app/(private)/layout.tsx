import Sidebar from "@/components/layout/Sidebar";
import { profileService } from "@/services/profileService";
import Bottombar from "@/components/layout/BottomBar";
import NavBar from "@/components/layout/NavBar";
import { getLoginUserId } from "@/heplers/getLoginUserId";

export default async function PrivateLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  const loginUserId = await getLoginUserId();
  const profile = await profileService.getProfileByUserId(loginUserId);

  return (
    <>
      <div className="mx-auto max-w-[768px]">
        <NavBar profile={profile} />
        <Sidebar profile={profile} />
        <div className="py-14 sm:py-0 sm:ps-56">
          <div className="p-3">{children}</div>
        </div>
        <Bottombar />
      </div>
      {modal}
    </>
  );
}
