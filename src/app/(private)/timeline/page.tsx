import PostCard from "@/components/features/post/PostCard";
import { PageHeading } from "@/components/ui";
import { authService } from "@/services/authService";
import { likeService } from "@/services/likeService";
import { postService } from "@/services/postService";
import { userService } from "@/services/userService";

export default async function TimelinePage() {
  const posts = await postService.getPostsForTimelinePage();

  const loginUserAuthId = await authService.getLoginUserAuthId();
  const loginUser = await userService.getUserByAuthId(loginUserAuthId);

  const likedByLoginUserPostIds = await likeService.getLikedPostIdsByUserId(
    loginUser.id,
  );

  return (
    <>
      <PageHeading>タイムライン</PageHeading>
      <div className="">
        {posts.map((post) => (
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
