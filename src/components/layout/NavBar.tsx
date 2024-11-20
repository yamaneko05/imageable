"use client";

import { Profile, User } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import { Avatar } from "../ui";
import { useEffect, useState } from "react";
import { profileServiceBrowser } from "@/services/profileServiceBrowser";

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

  const [imageUrl, setImageUrl] = useState<string>();

  useEffect(() => {
    const getImageUrl = async () => {
      const newImageUrl = await profileServiceBrowser.getImageUrl(
        profile.image,
      );
      setImageUrl(newImageUrl);
    };

    getImageUrl();
  }, []);

  return (
    <div
      className={`fixed top-0 flex h-14 w-full items-center justify-between border-b bg-white px-6 transition-transform sm:hidden ${show ? "" : "-translate-y-full"}`}
    >
      <Link href="/">
        <Image src="/logo.png" alt="" width={150} height={30} />
      </Link>
      {imageUrl && (
        <Link href={`/profile/${profile.userId}`} className="h-12 w-12">
          <Avatar src={imageUrl} />
        </Link>
      )}
    </div>
  );
}
