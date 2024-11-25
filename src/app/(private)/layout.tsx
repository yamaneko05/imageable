import Sidebar from "@/components/layout/Sidebar";
import Bottombar from "@/components/layout/BottomBar";
import NavBar from "@/components/layout/NavBar";
import { getLoginUserId } from "@/heplers/getLoginUserId";
import { getNavItems } from "@/heplers/getNavItems";
import getProfile from "@/services/getProfile";

export default async function PrivateLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  const loginUserId = await getLoginUserId();
  const profile = await getProfile(loginUserId);

  const navItems = getNavItems(loginUserId);

  return (
    <>
      <div className="mx-auto max-w-[768px]">
        <NavBar profile={profile} />
        <Sidebar profile={profile} navItems={navItems} />
        <div className="py-14 sm:py-0 sm:ps-56">
          <div className="p-3">{children}</div>
        </div>
        <Bottombar navItems={navItems} />
      </div>
      {modal}
    </>
  );
}
