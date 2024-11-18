import { PrismaClient } from "@prisma/client";
import { authService } from "./authService";
import { storageService } from "./storageService";

export const profileService = {
  getImageUrl: async (image: string | null) => {
    if (image) {
      const publicUrl = await storageService.getPublicUrl(image);
      return publicUrl;
    }
    return "/user-round.png";
  },
  getLoginUserProfile: async () => {
    const loginUserAuthId = await authService.getLoginUserAuthId();

    const prisma = new PrismaClient();

    const profile = await prisma.profile.findFirstOrThrow({
      where: {
        user: {
          authId: loginUserAuthId,
        },
      },
    });

    return profile;
  },
};
