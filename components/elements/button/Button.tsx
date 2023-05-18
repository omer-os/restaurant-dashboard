import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import LoadingSpinner from "../loading/LoadingSpinner";

const button = cva(
  "button transition-all active:scale-95 rounded flex items-center justify-center gap-2",
  {
    variants: {
      intent: {
        primary: "bg-black text-white active:opacity-80",
        secondary: "bg-white text-black active:text-white active:bg-black",
        ghost: "bg-zinc-200 hover:bg-zinc-300",
        borderedSecondary:
          "border border-black active:bg-black active:text-white hover:bg-black/10",
        borderedPrimary:
          "border border-white bg-black active:text-white text-white ",
      },
      size: {
        sm: "text-sm py-1 px-2",
        md: "text-base py-2 px-4",
        lg: "text-lg py-3 px-6",
        xl: "text-xl py-4 px-8",
      },

      rounded: {
        full: "rounded-full",
      },

      width: {
        full: "w-full",
        max: "w-max",
      },
    },
    defaultVariants: {
      intent: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {
  starticon?: React.ReactNode;
  endicon?: React.ReactNode;

  iconButton?: boolean;
  loading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  className,
  intent,
  size,
  rounded,
  width,
  iconButton,
  ...props
}) => (
  <button
    className={
      button({
        intent,
        size,
        rounded,
        width,
        className,
      }) + `${iconButton ? " py-3 px-3" : ""}`
    }
    {...props}
  >
    {props.starticon}
    {props.children}
    {props.endicon}

    {props.loading && <LoadingSpinner />}
  </button>
);
