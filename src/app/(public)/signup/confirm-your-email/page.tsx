import { LucideMail } from "lucide-react";

export default function ConfirmYourEmailPage() {
  return (
    <div className="px-3">
      <div className="mb-8 flex justify-center">
        <LucideMail size={160} />
      </div>
      <div className="leading-8">
        ご入力いただいたメールアドレス宛に認証メールを送信しました。
        <br />
        メールに記載されたURLをクリックして認証を完了してください。
      </div>
    </div>
  );
}
