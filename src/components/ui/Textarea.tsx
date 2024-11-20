import { input } from "@/variants";
import { tv } from "tailwind-variants";

const textarea = tv({
  extend: input,
});

interface Props extends React.ComponentProps<"textarea"> {
  error?: boolean;
}

export default function Textarea({ error = false, ...attributes }: Props) {
  return <textarea {...attributes} className={textarea({ error })} />;
}
