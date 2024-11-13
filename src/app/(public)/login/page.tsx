"use client";

import { signin } from "@/actions/auth/signin";
import { Alert, Button, Input, FormLabel } from "@/components/ui";
import Link from "next/link";

import { useActionState } from "react";

export default function LoginPage() {
  const [state, dispatch, isPending] = useActionState(signin, undefined);

  return (
    <div className="w-96 px-3">
      <div className="mb-8 text-center text-2xl font-bold">ログイン</div>
      {state?.error && (
        <Alert>
          <div className="mb-1 font-bold">ログインできませんでした</div>
          メールアドレスもしくはパスワードが異なります
          <br />
          {state.error.message}
        </Alert>
      )}
      <form className="mb-6">
        <div className="mb-6">
          <FormLabel attributes={{ htmlFor: "email" }}>
            メールアドレス
          </FormLabel>
          <Input attributes={{ type: "email", name: "email", id: "email" }} />
        </div>
        <div className="mb-8">
          <FormLabel attributes={{ htmlFor: "password" }}>パスワード</FormLabel>
          <Input
            attributes={{ type: "password", name: "password", id: "password" }}
          />
        </div>
        <Button
          attributes={{
            type: "submit",
            formAction: dispatch,
            disabled: isPending,
          }}
          variants={{ WidthFull: true }}
        >
          ログイン
        </Button>
      </form>
      <p>
        アカウントをお持ちでない方は
        <Link href="/signup" className="px-1 text-blue-500">
          新規登録
        </Link>
      </p>
    </div>
  );
}
