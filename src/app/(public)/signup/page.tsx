"use client";

import { signup } from "@/actions/auth/signup";
import { Alert, Button, Input, FormLabel } from "@/components/ui";
import Link from "next/link";
import { useActionState } from "react";

export default function SignUpPage() {
  const [state, dispatch, isPending] = useActionState(signup, undefined);

  return (
    <div className="w-96 px-3">
      <div className="mb-8 text-center text-2xl font-bold">新規登録</div>
      {state?.error && (
        <Alert variants={{ color: "danger" }}>{state.error.message}</Alert>
      )}
      <form className="mb-6">
        <div className="mb-6">
          <FormLabel attributes={{ htmlFor: "email" }}>
            メールアドレス
          </FormLabel>
          <Input attributes={{ type: "email", name: "email", id: "email" }} />
        </div>
        <div className="mb-6">
          <FormLabel attributes={{ htmlFor: "password" }}>パスワード</FormLabel>
          <Input
            attributes={{ type: "password", name: "password", id: "password" }}
          />
        </div>
        <div className="mb-8">
          <FormLabel attributes={{ htmlFor: "password_confirm" }}>
            パスワード（再入力）
          </FormLabel>
          <Input
            attributes={{
              type: "password",
              name: "password_confirm",
              id: "password_confirm",
            }}
          />
        </div>
        <Button
          attributes={{
            type: "submit",
            formAction: dispatch,
            disabled: isPending,
          }}
          variants={{ color: "success", WidthFull: true }}
        >
          新規登録
        </Button>
      </form>
      <p>
        アカウントを既にお持ちの方は
        <Link href="/login" className="px-1 text-blue-500">
          ログイン
        </Link>
      </p>
    </div>
  );
}
