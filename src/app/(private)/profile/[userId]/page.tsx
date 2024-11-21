import PostCard from "@/components/features/post/PostCard";
import UserCard from "@/components/features/user/UserCard";
import { getLoginUserId } from "@/heplers/getLoginUserId";
import { likeService } from "@/services/likeService";
import { userService } from "@/services/userService";

export default async function ProfilePage({
  params,
}: {
  params: Promise<{ userId: string }>;
}) {
  const { userId } = await params;

  const user = await userService.getUserForProfilePage(userId);

  const loginUserId = await getLoginUserId();

  const likedByLoginUserPostIds =
    await likeService.getLikedPostIdsByUserId(loginUserId);

  return (
    <>
      <UserCard user={user} />
      <div className="">
        {user.posts.map((post) => (
          <PostCard
            key={post.id}
            post={post}
            likedByLoginUser={likedByLoginUserPostIds.includes(post.id)}
          />
        ))}
      </div>
    </>
  );
}
