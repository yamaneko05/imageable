import Image from "next/image";
import Link from "next/link";
import Button from "../ui/Button";
import { signout } from "@/actions/auth";

const navItems = [
  {
    path: "/timeline",
    name: "タイムライン",
  },
  {
    path: "/profile",
    name: "プロフィール",
  },
  {
    path: "/newpost",
    name: "投稿を作成",
  },
];

export default function Sidebar() {
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
            {item.name}
          </Link>
        ))}
      </div>
      <form action={signout}>
        <Button variants={{ size: "sm", color: "secondary" }}>
          ログアウト
        </Button>
      </form>
    </div>
  );
}
