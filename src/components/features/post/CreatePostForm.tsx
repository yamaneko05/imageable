"use client";

import { createPostAction } from "@/actions/post/createPostAction";
import { Button, Textarea } from "@/components/ui";
import { useActionState } from "react";

export default function CreatePostForm() {
  const [_, dispatch, isPending] = useActionState(createPostAction, null);

  return (
    <>
      <form>
        <div className="mb-8">
          <Textarea
            attributes={{
              name: "description",
              id: "description",
              rows: 6,
            }}
          />
        </div>
        <Button
          attributes={{
            type: "submit",
            formAction: dispatch,
            disabled: isPending,
          }}
          variants={{ WidthFull: true, color: "success" }}
        >
          投稿
        </Button>
      </form>
    </>
  );
}
