import { getPublicUrl } from "./getPublicUrl";

export function getProfileImageUrl(image: string | null) {
  return image ? getPublicUrl(image) : "/user-round.png";
}
