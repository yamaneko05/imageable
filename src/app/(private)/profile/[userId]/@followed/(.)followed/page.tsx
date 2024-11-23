import { Modal } from "@/components/ui";
import { userService } from "@/services/userService";
import { FollowedUser } from "@/components/features/user/FollowedUser";

export default async function ImagePage({
  params,
}: {
  params: Promise<{ userId: string }>;
}) {
  const userId = (await params).userId;
  const users = await userService.getUserFollowedBy(userId);

  return (
    <Modal>
      <div className="w-72">
        <div className="space-y-1">
          {users.map((user) => (
            <FollowedUser key={userId} user={user} />
          ))}
        </div>
      </div>
    </Modal>
  );
}
