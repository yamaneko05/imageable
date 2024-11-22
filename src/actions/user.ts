"use server";

import { userService } from "@/services/userService";

export async function getUserFollowing(userId: string) {
  const users = await userService.getUserFollowing(userId);

  return users;
}
export async function getUserFollowedBy(userId: string) {
  const users = await userService.getUserFollowedBy(userId);

  return users;
}
