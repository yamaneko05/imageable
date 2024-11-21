import { authService } from "../services/authService";
import { userService } from "../services/userService";

export async function getLoginUserId() {
  const loginUserAuthId = await authService.getLoginUserAuthId();

  const loginUser = await userService.getUserByAuthId(loginUserAuthId);

  return loginUser.id;
}
