import { Modal } from "@/components/ui";
import { userService } from "@/services/userService";
import { FollowedUser } from "@/components/features/user/FollowedUser";

export default async function ImagePage({
  params,
}: {
  params: Promise<{ userId: string }>;
}) {
  const userId = (await params).userId;
  const users = await userService.getUserFollowing(userId);

  return (
    <Modal title="フォロー中">
      <div className="space-y-2">
        {users.map((user) => (
          <FollowedUser key={user.id} user={user} />
        ))}
      </div>
    </Modal>
  );
}
