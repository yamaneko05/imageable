"use client";

import { Profile } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import { Avatar } from "../ui";
import { useEffect, useState } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { LucideLogOut } from "lucide-react";
import { signout } from "@/actions/auth";

export default function NavBar({ profile }: { profile: Profile }) {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      setShow(false);
    } else {
      setShow(true);
    }

    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);

    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  const hadnleSignout = async () => {
    await signout();
  };

  return (
    <div
      className={`fixed top-0 flex h-14 w-full items-center justify-between border-b bg-white px-6 transition-transform sm:hidden ${show ? "" : "-translate-y-full"}`}
    >
      <Link href="/">
        <div className="h-[30px] w-[150px]">
          <Image src="/logo.png" alt="" width={180} height={36} />
        </div>
      </Link>
      <Menu>
        <MenuButton>
          <div className="h-10 w-10 hover:opacity-50">
            <Avatar image={profile.image} />
          </div>
        </MenuButton>
        <MenuItems anchor="bottom" className="w-64 rounded-lg border shadow-lg">
          <MenuItem>
            <Link
              href={`/profile/${profile.userId}`}
              className="flex w-full items-center gap-2 bg-white px-4 py-2 text-start font-bold hover:bg-slate-50"
            >
              プロフィール
            </Link>
          </MenuItem>
          <MenuItem>
            <button
              onClick={hadnleSignout}
              className="flex w-full items-center gap-2 bg-white px-4 py-2 text-start font-bold hover:bg-slate-50"
            >
              <LucideLogOut size={18} />
              ログアウト
            </button>
          </MenuItem>
        </MenuItems>
      </Menu>
    </div>
  );
}
