import { storageService } from "./storageService";

export const profileService = {
  getImageUrl: async (image: string | null) => {
    if (image) {
      const publicUrl = await storageService.getPublicUrl(image);
      return publicUrl;
    }
    return "https://placehold.jp/96x96.png";
  },
};
