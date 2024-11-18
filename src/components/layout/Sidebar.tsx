import Image from "next/image";
import Link from "next/link";
import Button from "../ui/Button";
import { signout } from "@/actions/auth";
import { profileService } from "@/services/profileService";
import { Avatar } from "../ui";
import { navItems } from "@/constants";

export default async function Sidebar() {
  const profile = await profileService.getLoginUserProfile();

  return (
    <div className="fixed bottom-0 top-0 w-64 border-e p-3">
      <div className="mb-8">
        <Link href="/">
          <Image
            src="https://placehold.jp/220x40.png"
            alt=""
            width={220}
            height={40}
          />
        </Link>
      </div>
      <div className="mb-8 space-y-2">
        {navItems.map((item) => (
          <Link
            key={navItems.indexOf(item)}
            href={item.path}
            className="block rounded-lg px-2 py-4 hover:bg-slate-50"
          >
            {item.lucide}
            {item.name}
          </Link>
        ))}
      </div>
      <div className="mb-6 flex items-center gap-3">
        <Avatar
          src={await profileService.getImageUrl(profile.image)}
          size={36}
        />
        <div className="font-bold">{profile.name}</div>
      </div>
      <form action={signout}>
        <Button variants={{ size: "sm", color: "secondary" }}>
          ログアウト
        </Button>
      </form>
    </div>
  );
}
