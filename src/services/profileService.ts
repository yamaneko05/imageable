import { PrismaClient } from "@prisma/client";
import { storageService } from "./storageService";

export const profileService = {
  getImageUrl: async (image: string | null) => {
    if (image) {
      const publicUrl = await storageService.getPublicUrl(image);
      return publicUrl;
    }
    return "/user-round.png";
  },
  getProfileByUserId: async (userId: string) => {
    const prisma = new PrismaClient();

    const profile = await prisma.profile.findFirstOrThrow({
      where: {
        user: {
          id: userId,
        },
      },
    });

    return profile;
  },
};
