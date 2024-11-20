"use client";

import { createPostAction } from "@/actions/post";
import { Button, FormField, Textarea } from "@/components/ui";
import { useActionState } from "react";

export default function CreatePostForm() {
  const [state, dispatch, isPending] = useActionState(createPostAction, null);

  return (
    <>
      <form action={dispatch}>
        <div className="mb-8">
          <FormField
            id="description"
            label="本文"
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
          投稿
        </Button>
      </form>
    </>
  );
}
