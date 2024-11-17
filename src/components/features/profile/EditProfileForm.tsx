"use client";

import { Profile } from "@prisma/client";
import { Alert, Button, FormLabel, Input, Textarea } from "@/components/ui";
import { useActionState } from "react";
import { update } from "@/actions/profile";

export default function EditProfileForm({ profile }: { profile: Profile }) {
  const [state, dispatch, isPending] = useActionState(update, undefined);

  return (
    <>
      {state?.success && <Alert>保存しました</Alert>}
      <form action={dispatch}>
        <div className="mb-6">
          <FormLabel attributes={{ htmlFor: "name" }}>ユーザー名</FormLabel>
          <Input
            type="text"
            name="name"
            id="name"
            defaultValue={profile.name}
          />
        </div>
        <div className="mb-8">
          <FormLabel attributes={{ htmlFor: "description" }}>
            プロフィール文
          </FormLabel>
          <Textarea
            attributes={{
              name: "description",
              id: "description",
              defaultValue: profile.description!,
              rows: 6,
            }}
          />
        </div>
        <Button
          type="submit"
          disabled={isPending}
          variants={{ WidthFull: true }}
        >
          保存
        </Button>
      </form>
    </>
  );
}
