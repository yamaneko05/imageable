import PostCard from "@/components/features/post/PostCard";
import { getLoginUserId } from "@/heplers/getLoginUserId";
import { likeService } from "@/services/likeService";
import { postService } from "@/services/postService";

export default async function TimelinePage() {
  const posts = await postService.getPostsForTimelinePage();

  const loginUserId = await getLoginUserId();

  const likedByLoginUserPostIds =
    await likeService.getLikedPostIdsByUserId(loginUserId);

  return (
    <>
      <div className="">
        {posts.map((post) => (
          <PostCard
            key={post.id}
            post={post}
            loginUserId={loginUserId}
            likedByLoginUser={likedByLoginUserPostIds.includes(post.id)}
          />
        ))}
      </div>
    </>
  );
}
