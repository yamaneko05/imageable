"use client";

import { createPostAction } from "@/actions/post";
import { Button, Textarea } from "@/components/ui";
import { useActionState } from "react";

export default function CreatePostForm() {
  const [_, dispatch, isPending] = useActionState(createPostAction, null);

  return (
    <>
      <form action={dispatch}>
        <div className="mb-8">
          <Textarea
            attributes={{
              name: "description",
              id: "description",
              placeholder: "いまどうしてる？",
              rows: 6,
            }}
          />
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
