import { tv } from "tailwind-variants";

export const input = tv({
  base: "block w-full rounded border px-3 py-2 focus:outline-blue-300",
  variants: {
    error: {
      true: "border-red-500",
    },
  },
});
