import { NavItem } from "@/types";
import Link from "next/link";

export default async function Bottombar({ navItems }: { navItems: NavItem[] }) {
  return (
    <div className="fixed bottom-0 flex h-14 w-full items-center justify-center gap-4 border-t bg-white sm:hidden">
      {navItems.map((item) => (
        <Link
          key={navItems.indexOf(item)}
          href={item.path}
          className="rounded-lg px-6 py-2 hover:bg-slate-50"
        >
          {item.lucide}
        </Link>
      ))}
    </div>
  );
}
