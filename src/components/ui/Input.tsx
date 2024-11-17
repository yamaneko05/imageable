import { input } from "@/variants/inputVariants";

export default function Input({
  attributes,
  error = false,
}: {
  attributes?: React.ComponentProps<"input">;
  error?: boolean;
}) {
  return <input {...attributes} className={input({ error })} />;
}
