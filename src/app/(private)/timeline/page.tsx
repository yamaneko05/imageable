import PostCard from "@/components/features/post/PostCard";
import { PageHeading } from "@/components/ui";
import { getLoginUserId } from "@/helpers";
import { likeService } from "@/services/likeService";
import { postService } from "@/services/postService";

export default async function TimelinePage() {
  const posts = await postService.getPostsForTimelinePage();

  const loginUserId = await getLoginUserId();

  const likedByLoginUserPostIds =
    await likeService.getLikedPostIdsByUserId(loginUserId);

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
