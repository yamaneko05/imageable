import PostCard from "@/components/features/post/PostCard";
import UserCard from "@/components/features/user/UserCard";
import { authService } from "@/services/authService";
import { likeService } from "@/services/likeService";
import { userService } from "@/services/userService";

export default async function ProfilePage({
  params,
}: {
  params: Promise<{ userId: string }>;
}) {
  const { userId } = await params;

  const loginUserId = await authService.getLoginUserId();

  const user = await userService.getUserForProfilePage(userId);

  const likedByLoginUserPostIds =
    await likeService.getLikedPostIdsByUserId(loginUserId);

  return (
    <>
      <UserCard user={user} loginUserId={loginUserId} />
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
