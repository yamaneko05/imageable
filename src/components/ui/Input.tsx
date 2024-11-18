import { input } from "@/variants";

interface Props extends React.ComponentProps<"input"> {
  error?: boolean;
}

export default function Input({ error = false, ...attributes }: Props) {
  return <input {...attributes} className={input({ error })} />;
}
