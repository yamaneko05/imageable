import SignUpStepper from "@/components/features/auth/SignUpStepper";
import { LucideMail } from "lucide-react";

export default async function ConfirmYourEmailPage({
  searchParams,
}: {
  searchParams: Promise<{ email: string }>;
}) {
  const email = (await searchParams).email;

  return (
    <div className="px-3">
      <div className="mb-8 text-center text-2xl font-bold">新規登録</div>
      <SignUpStepper doing={1} />
      <div className="mb-8 flex justify-center">
        <LucideMail size={160} />
      </div>
      <div className="leading-8">
        ご入力いただいたメールアドレス({email})宛に認証メールを送信しました。
        <br />
        メールに記載されたURLをクリックして認証を完了してください。
      </div>
    </div>
  );
}
