import { Modal } from "@/components/ui";
import { userService } from "@/services/userService";
import UserRow from "@/components/features/user/UserRow";

export default async function ImagePage({
  params,
}: {
  params: Promise<{ userId: string }>;
}) {
  const userId = (await params).userId;
  const users = await userService.getUserFollowing(userId);

  return (
    <Modal title="フォロー中">
      <div className="space-y-1">
        {users.map((user) => (
          <UserRow key={userId} user={user} />
        ))}
      </div>
    </Modal>
  );
}
