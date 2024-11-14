import { Button, LinkButton } from "@/components/ui";
import { getLoginUserId } from "@/services/authService";
import { profileService } from "@/services/profileService";
import { PrismaClient } from "@prisma/client";
import Image from "next/image";

export default async function ProfilePage({
  params,
}: {
  params: Promise<{ userId: string }>;
}) {
  const prisma = new PrismaClient();
  const { userId } = await params;

  const loginUserId = await getLoginUserId();

  const user = await prisma.user.findUnique({
    where: {
      id: userId,
    },
    include: {
      profile: true,
      posts: true,
      _count: {
        select: {
          followedBy: true,
          following: true,
          posts: true,
        },
      },
    },
  });

  return (
    <>
      <div className="mb-4">
        <div className="mb-2 flex items-center gap-8">
          <Image
            src={await profileService.getImageUrl(user!.profile!.image)}
            alt=""
            className="rounded-full"
            width={96}
            height={96}
          />
          <div className="">
            <div className="mb-4 grid grid-cols-3">
              <div className="text-center">
                <div className="text-xl font-bold">{user!._count.posts}</div>
                <div className="text-sm">投稿</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold">
                  {user!._count.followedBy}
                </div>
                <div className="text-sm">フォロワー</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-bold">
                  {user!._count.following}
                </div>
                <div className="text-sm">フォロー中</div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {user!.id === loginUserId ? (
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
        <div className="mb-2 text-xl font-bold">{user!.profile?.name}</div>
        <div className="">{user!.profile?.description}</div>
      </div>
      <div className="space-y-2">
        {user!.posts.map((post) => (
          <div key={post.id} className="">
            <div className="font-bold">{post.description}</div>
            <div className="">{post.createdAt.toISOString()}</div>
          </div>
        ))}
      </div>
    </>
  );
}
