import UserCard from "./_components/UserCard";
import { Suspense } from "react";
import UserPostLoading from "./_components/UserPostLoading";
import UserPost from "./_components/UserPost";
import getUserProfile from "./_services/getUserProfile";

export default async function ProfilePage({
  params,
}: {
  params: Promise<{ userId: string }>;
}) {
  const { userId } = await params;

  const user = await getUserProfile(userId);

  return (
    <>
      <UserCard user={user} />
      <Suspense fallback={<UserPostLoading />}>
        <UserPost userId={userId} />
      </Suspense>
    </>
  );
}
