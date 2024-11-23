import { tv } from "tailwind-variants";

export const button = tv({
  base: "inline-block font-bold text-white disabled:opacity-50",
  variants: {
    color: {
      primary: "bg-blue-500 hover:bg-blue-700",
      success: "bg-green-500 hover:bg-green-700",
      secondary: "bg-slate-500 hover:bg-slate-700",
    },
    variant: {
      outline: "border-2 bg-transparent",
      ghost: "bg-transparent text-black hover:bg-slate-50",
    },
    size: {
      sm: "rounded-lg px-3 py-1 text-sm",
      md: "rounded-lg px-6 py-2",
      lg: "rounded-xl px-9 py-3",
    },
    WidthFull: {
      true: "w-full",
    },
  },
  compoundVariants: [
    {
      color: "primary",
      outline: true,
      class: "border-blue-500 text-blue-500",
    },
  ],
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

export const avatarImage = tv({
  base: "rounded-full",
  variants: {
    border: {
      true: "border border-black",
    },
  },
});

export const modal = tv({
  base: "max-w-full rounded-lg bg-white px-6 py-5 shadow backdrop:bg-black backdrop:bg-opacity-50",
  variants: {
    size: {
      sm: "w-72",
      md: "w-96",
      lg: "w-[640px]",
      xl: "w-[960px]",
    },
  },
  defaultVariants: {
    size: "md",
  },
});
