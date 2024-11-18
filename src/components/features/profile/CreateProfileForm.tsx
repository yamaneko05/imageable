"use client";

import { Button, FormLabel, Input, Textarea } from "@/components/ui";
import { useActionState } from "react";
import { create } from "@/actions/profile";

export default function CreateProfileForm() {
  const [_state, dispatch, isPending] = useActionState(create, undefined);

  return (
    <>
      <form action={dispatch}>
        <div className="mb-6">
          <FormLabel attributes={{ htmlFor: "name" }}>ユーザー名</FormLabel>
          <Input type="text" name="name" id="name" />
        </div>
        <div className="mb-8">
          <FormLabel attributes={{ htmlFor: "description" }}>
            プロフィール文
          </FormLabel>
          <Textarea
            attributes={{
              name: "description",
              id: "description",
              rows: 6,
            }}
          />
        </div>
        <Button
          type="submit"
          disabled={isPending}
          variants={{ WidthFull: true, color: "success" }}
        >
          アイコンの設定へ
        </Button>
      </form>
    </>
  );
}
