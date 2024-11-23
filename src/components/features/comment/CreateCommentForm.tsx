"use client";

import { createCommentAction } from "@/actions/comment";
import { Button, Input } from "@/components/ui";
import { useState } from "react";

export default function CreateCommentForm({ postId }: { postId: string }) {
  const [comment, setComment] = useState<string>("");
  const [isPending, setIsPending] = useState(false);

  const dispatch = async () => {
    setIsPending(true);
    await createCommentAction(postId, comment);
    setIsPending(false);
    setComment("");
  };

  return (
    <>
      <Input
        value={comment}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          setComment(event.target.value)
        }
      />
      <div className="mt-2 flex flex-row-reverse">
        <Button
          isPending={isPending}
          variants={{ size: "sm" }}
          onClick={dispatch}
        >
          コメント
        </Button>
      </div>
    </>
  );
}
