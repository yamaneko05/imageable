import { LucideBookUser, LucideHouse, LucidePlusSquare } from "lucide-react";

export const navItems = [
  {
    path: "/timeline",
    name: "タイムライン",
    lucide: <LucideHouse className="me-3 inline-block" />,
  },
  {
    path: "/profile",
    name: "プロフィール",
    lucide: <LucideBookUser className="me-3 inline-block" />,
  },
  {
    path: "/newpost",
    name: "投稿を作成",
    lucide: <LucidePlusSquare className="me-3 inline-block" />,
  },
];
