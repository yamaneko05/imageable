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

export const input = tv({
  base: "block w-full rounded border px-3 py-2 focus:outline-blue-300",
  variants: {
    error: {
      true: "border-red-500",
    },
  },
});

export const stepperIcon = tv({
  base: "mb-1 grid h-10 w-10 place-items-center rounded-full bg-slate-100",
  variants: {
    doing: {
      true: "bg-indigo-500 text-white",
    },
  },
});

export const stepperText = tv({
  base: "font-bold",
  variants: {
    doing: {
      true: "text-indigo-500",
    },
  },
});
