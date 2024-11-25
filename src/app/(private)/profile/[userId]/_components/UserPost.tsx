import PostCard from "@/components/features/post/PostCard";
import { getLoginUserId } from "@/heplers/getLoginUserId";
import getUserPost from "../_services/getUserPost";
import getLikesPostId from "@/services/getLikesPostId";

export default async function UserPost({ userId }: { userId: string }) {
  const posts = await getUserPost(userId);

  const loginUserId = await getLoginUserId();

  const likedByLoginUserPostIds = await getLikesPostId(loginUserId);

  return (
    <div className="">
      {posts.map((post) => (
        <PostCard
          loginUserId={loginUserId}
          key={post.id}
          post={post}
          likedByLoginUser={likedByLoginUserPostIds.includes(post.id)}
        />
      ))}
    </div>
  );
}
