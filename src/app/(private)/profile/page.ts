import { authService } from "@/services/authService";
import { redirect } from "next/navigation";

export default async function Page() {
  const loginUserId = await authService.getLoginUserId();

  redirect(`/profile/${loginUserId}`);
}
