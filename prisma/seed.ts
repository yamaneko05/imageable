import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      authId: "c924b9c4-9a71-4d54-a614-a02c3f0b83c1",
      profile: {
        create: {
          name: "yamaneko",
          description: "こんにちは",
        },
      },
      posts: {
        create: {
          description: "テスト投稿",
        },
      },
    },
  });
}

main();
