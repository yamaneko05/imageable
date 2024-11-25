import { Modal } from "@/components/ui";
import getFollowings from "./_services/getFollowings";
import { FollowingRow } from "./_components/FollowingRow";

export default async function ImagePage({
  params,
}: {
  params: Promise<{ userId: string }>;
}) {
  const userId = (await params).userId;
  const users = await getFollowings(userId);

  return (
    <Modal title="フォロー中">
      <div className="space-y-2">
        {users.map((user) => (
          <FollowingRow key={user.id} user={user} />
        ))}
      </div>
    </Modal>
  );
}
