import { tv } from "tailwind-variants";

export const button = tv({
  base: "font-bold text-white disabled:opacity-50",
  variants: {
    color: {
      primary: "bg-blue-500 hover:bg-blue-700",
      success: "bg-green-500 hover:bg-green-700",
      secondary: "bg-slate-500 hover:bg-slate-700",
    },
    size: {
      sm: "rounded px-3 py-1 text-sm",
      md: "rounded-lg px-6 py-2",
      lg: "rounded-xl px-9 py-3",
    },
    WidthFull: {
      true: "w-full",
    },
  },
  defaultVariants: {
    color: "primary",
    size: "md",
    WidthFull: false,
  },
});
