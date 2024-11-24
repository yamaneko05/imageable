import { tv } from "tailwind-variants";

export const button = tv({
  base: "inline-block font-bold text-white disabled:opacity-50",
  variants: {
    color: {
      primary: "bg-blue-500 hover:bg-blue-700",
      success: "bg-green-500 hover:bg-green-700",
      secondary: "bg-slate-500 hover:bg-slate-700",
      smoke: "bg-slate-50 text-black hover:bg-slate-300",
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
  base: "mt-16 max-w-full rounded-lg bg-white p-4 shadow backdrop:bg-black backdrop:bg-opacity-50",
  variants: {
    size: {
      sm: "w-72",
      md: "w-96",
      lg: "w-[480px]",
      xl: "w-[720px]",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export const alert = tv({
  base: "mb-4 flex gap-2 rounded-lg p-3",
  variants: {
    color: {
      danger: "bg-red-200",
      success: "bg-green-200",
      smoke: "bg-slate-200",
    },
  },
  defaultVariants: {
    color: "success",
  },
});
