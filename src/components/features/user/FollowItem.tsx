import { attach, detach } from "@/actions/follow";
import { Avatar, Button } from "@/components/ui";
import { profileServiceBrowser } from "@/services/profileServiceBrowser";
import { UserFollowing } from "@/types";
import Link from "next/link";
import { useEffect, useState } from "react";

export function FollowItem({ user }: { user: UserFollowing }) {
  const [src, setSrc] = useState<string | null>(null);

  const [followed, setfollowed] = useState(true);

  const handleAttachFollow = async () => {
    setfollowed(true);
    await attach(user.id);
  };

  const handleDetachFollow = async () => {
    setfollowed(false);
    await detach(user.id);
  };

  useEffect(() => {
    const getImageUrl = async () => {
      const imageUrl = await profileServiceBrowser.getImageUrl(
        user.profile!.image,
      );
      setSrc(imageUrl);
    };
    getImageUrl();
  }, []);

  return src ? (
    <div className="flex items-center justify-between">
      <div className="items-cetner flex gap-2">
        <Link href={`/profile/${user.id}`}>
          <Avatar src={src} />
        </Link>
        <div className="font-bold">{user.profile?.name}</div>
      </div>
      {followed ? (
        <Button
          onClick={handleDetachFollow}
          variants={{ size: "sm", color: "secondary" }}
        >
          フォロー中
        </Button>
      ) : (
        <Button
          onClick={handleAttachFollow}
          variants={{ size: "sm", color: "primary" }}
        >
          フォロー
        </Button>
      )}
    </div>
  ) : null;
}
