import LinkButton from "@/components/ui/LinkButton";
import { LucideCheckCircle2 } from "lucide-react";

export default function CompletedPage() {
  return (
    <div className="px-3">
      <div className="mb-8 flex justify-center">
        <LucideCheckCircle2 size={160} />
      </div>
      <div className="mb-6 leading-8">
        imageable新規登録が完了しました。
        <br />
        投稿にいいね、コメントしてみましょう。
      </div>
      <LinkButton
        attributes={{ href: "/timeline" }}
        variants={{ WidthFull: true }}
      >
        タイムラインへ
      </LinkButton>
    </div>
  );
}
