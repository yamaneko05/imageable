import { Avatar, Button, LinkButton } from "@/components/ui";
import { authService } from "@/services/authService";
import { profileService } from "@/services/profileService";
import { UserForProfilePage } from "@/types";

export default async function UserCard({ user }: { user: UserForProfilePage }) {
  const loginUserAuthId = await authService.getLoginUserAuthId();

  return (
    <div className="mb-4">
      <div className="mb-2 flex items-center gap-8">
        <Avatar
          src={await profileService.getImageUrl(user.profile!.image)}
          size={96}
        />
        <div className="">
          <div className="mb-4 grid grid-cols-3">
            <div className="text-center">
              <div className="text-xl font-bold">{user._count.posts}</div>
              <div className="text-sm">投稿</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold">{user._count.followedBy}</div>
              <div className="text-sm">フォロワー</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold">{user._count.following}</div>
              <div className="text-sm">フォロー中</div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {user.authId === loginUserAuthId ? (
              <LinkButton
                attributes={{ href: "/profile/edit" }}
                variants={{ size: "sm", color: "secondary" }}
              >
                プロフィールを編集
              </LinkButton>
            ) : (
              <Button variants={{ size: "sm", color: "secondary" }}>
                フォロー
              </Button>
            )}
            <Button variants={{ size: "sm", color: "secondary" }}>
              プロフィールをシェア
            </Button>
          </div>
        </div>
      </div>
      <div className="mb-2 text-xl font-bold">{user.profile?.name}</div>
      <div className="">{user.profile?.description}</div>
    </div>
  );
}
