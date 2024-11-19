import { storageServiceBrowser } from "./storageServiceBrowser";

export const profileServiceBrowser = {
  getImageUrl: async (image: string | null) => {
    if (image) {
      const publicUrl = await storageServiceBrowser.getPublicUrl(image);
      return publicUrl;
    }
    return "/user-round.png";
  },
};
