import { getLoginUserId } from "@/services/authService";
import { redirect } from "next/navigation";

export default async function Page() {
  const loginUserId = await getLoginUserId();

  redirect(`/profile/${loginUserId}`);
}
