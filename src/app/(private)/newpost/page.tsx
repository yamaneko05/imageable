import CreatePostForm from "@/components/features/post/CreatePostForm";
import { PageHeading } from "@/components/ui";

export default function NewpostPage() {
  return (
    <>
      <PageHeading>投稿を作成</PageHeading>
      <div className="max-w-96">
        <CreatePostForm />
      </div>
    </>
  );
}
