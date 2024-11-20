import { LucideBookUser, LucideHouse, LucidePlusSquare } from "lucide-react";

export const navItems = [
  {
    path: "/timeline",
    name: "タイムライン",
    lucide: <LucideHouse className="inline-block sm:me-3" />,
  },
  {
    path: "/profile",
    name: "プロフィール",
    lucide: <LucideBookUser className="inline-block sm:me-3" />,
  },
  {
    path: "/newpost",
    name: "投稿を作成",
    lucide: <LucidePlusSquare className="inline-block sm:me-3" />,
  },
];
