import Image from "next/image";
import Link from "next/link";
import { signout } from "@/actions/auth";
import { profileService } from "@/services/profileService";
import { Avatar, Button } from "@/components/ui";
import { navItems } from "@/constants";
import { Profile, User } from "@prisma/client";

export default async function Sidebar({ profile }: { profile: Profile }) {
  return (
    <div className="fixed bottom-0 top-0 hidden w-56 border-e px-3 py-6 sm:block">
      <div className="mb-8">
        <Link href="/">
          <Image src="/logo.png" alt="" width={180} height={36} />
        </Link>
      </div>
      <div className="mb-8 space-y-1">
        {navItems.map((item) => (
          <Link
            key={navItems.indexOf(item)}
            href={item.path}
            className="block rounded-lg p-3 hover:bg-slate-50"
          >
            {item.lucide}
            {item.name}
          </Link>
        ))}
      </div>
      <Link
        href={`/profile/${profile.userId}`}
        className="mb-6 flex items-center gap-3 rounded-lg bg-slate-50 p-2"
      >
        <div className="h-10 w-10">
          <Avatar src={await profileService.getImageUrl(profile.image)} />
        </div>
        <div className="font-bold">{profile.name}</div>
      </Link>
      <form action={signout}>
        <Button variants={{ size: "sm", color: "secondary" }}>
          ログアウト
        </Button>
      </form>
    </div>
  );
}
