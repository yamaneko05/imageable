"use client";

import { Profile } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import { Avatar } from "../ui";
import { useEffect, useState } from "react";

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

  return (
    <div
      className={`fixed top-0 flex h-14 w-full items-center justify-between border-b bg-white px-6 transition-transform sm:hidden ${show ? "" : "-translate-y-full"}`}
    >
      <Link href="/">
        <div className="h-[30px] w-[150px]">
          <Image src="/logo.png" alt="" width={180} height={36} />
        </div>
      </Link>
      <Link href={`/profile/${profile.userId}`} className="h-12 w-12">
        <Avatar image={profile.image} />
      </Link>
    </div>
  );
}
