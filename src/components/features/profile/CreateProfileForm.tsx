"use client";

import { Button, FormField, FormLabel, Input, Textarea } from "@/components/ui";
import { useActionState } from "react";
import { create } from "@/actions/profile";

export default function CreateProfileForm() {
  const [state, dispatch, isPending] = useActionState(create, undefined);

  return (
    <>
      <form action={dispatch}>
        <div className="mb-6">
          <FormLabel attributes={{ htmlFor: "name" }}>ユーザー名</FormLabel>
          <Input type="text" name="name" id="name" />
        </div>
        <div className="mb-8">
          <FormField
            id="description"
            label="プロフィール文"
            errors={state?.validationError?.description}
          >
            <Textarea
              name="description"
              id="description"
              placeholder="いまどうしてる？"
              rows={6}
              defaultValue={state?.old?.description}
              error={state?.validationError?.description !== undefined}
            />
          </FormField>
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
