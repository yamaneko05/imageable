import { tv } from "tailwind-variants";

const input = tv({
  base: "block w-full rounded border px-3 py-2 focus:outline-blue-300",
});

export default function Input({
  attributes,
}: {
  attributes?: React.ComponentProps<"input">;
}) {
  return <input {...attributes} className={input()} />;
}
