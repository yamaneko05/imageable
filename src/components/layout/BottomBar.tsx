import Link from "next/link";
import { navItems } from "@/constants";

export default async function Bottombar() {
  return (
    <div className="fixed bottom-0 flex w-full items-center justify-center gap-4 border-t bg-white py-1 sm:hidden">
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
