import { Modal } from "@/components/ui";
import getFollowers from "./_services/getFollowers";
import UserRow from "@/components/features/user/UserRow";

export default async function ImagePage({
  params,
}: {
  params: Promise<{ userId: string }>;
}) {
  const userId = (await params).userId;
  const users = await getFollowers(userId);

  return (
    <Modal title="フォロワー">
      <div className="space-y-1">
        {users.map((user) => (
          <UserRow key={userId} user={user} />
        ))}
      </div>
    </Modal>
  );
}
