import { input } from "@/variants";
import { tv } from "tailwind-variants";

const textarea = tv({
  extend: input,
});

export default function Input({
  attributes,
}: {
  attributes?: React.ComponentProps<"textarea">;
}) {
  return <textarea {...attributes} className={textarea()} />;
}
