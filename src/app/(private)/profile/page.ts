import { authService } from "@/services/authService";
import { userService } from "@/services/userService";
import { redirect } from "next/navigation";

export default async function Page() {
  const loginUserAuthId = await authService.getLoginUserAuthId();
  const loginUser = await userService.getUserByAuthId(loginUserAuthId);

  redirect(`/profile/${loginUser.id}`);
}
