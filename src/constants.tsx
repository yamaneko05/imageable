import { LucideBookUser, LucideHouse, LucidePlusSquare } from "lucide-react";

export const navItems = [
  {
    path: "/timeline",
    name: "タイムライン",
    lucide: <LucideHouse size={22} className="inline-block sm:me-3" />,
  },
  {
    path: "/profile",
    name: "プロフィール",
    lucide: <LucideBookUser size={22} className="inline-block sm:me-3" />,
  },
  {
    path: "/newpost",
    name: "投稿を作成",
    lucide: <LucidePlusSquare size={22} className="inline-block sm:me-3" />,
  },
];
