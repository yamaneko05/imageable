import { getLoginUserId } from "@/helpers";
import { redirect } from "next/navigation";

export default async function Page() {
  const loginUserId = await getLoginUserId();

  redirect(`/profile/${loginUserId}`);
}
