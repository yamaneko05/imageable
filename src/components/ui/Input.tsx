import { input } from "@/variants/inputVariants";

export default function Input({
  attributes,
}: {
  attributes?: React.ComponentProps<"input">;
}) {
  return <input {...attributes} className={input()} />;
}
