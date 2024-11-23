import { Modal } from "@/components/ui";
import { userService } from "@/services/userService";
import { FollowingUser } from "@/components/features/user/FollowingUser";

export default async function ImagePage({
  params,
}: {
  params: Promise<{ userId: string }>;
}) {
  const userId = (await params).userId;
  const users = await userService.getUserFollowing(userId);

  return (
    <Modal>
      <div className="w-72">
        <div className="space-y-1">
          {users.map((user) => (
            <FollowingUser key={userId} user={user} />
          ))}
        </div>
      </div>
    </Modal>
  );
}
