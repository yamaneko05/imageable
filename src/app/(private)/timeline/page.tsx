import PostCard from "@/components/features/post/PostCard";
import { getLoginUserId } from "@/heplers/getLoginUserId";
import getLikesPostId from "@/services/getLikesPostId";
import getPosts from "./_services/getPosts";

export default async function TimelinePage() {
  const posts = await getPosts();

  const loginUserId = await getLoginUserId();

  const likedByLoginUserPostIds = await getLikesPostId(loginUserId);

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
