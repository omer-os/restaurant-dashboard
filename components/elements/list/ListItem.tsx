import React from "react";
import { cva, type VariantProps } from "class-variance-authority";

const listItem = cva("w-full transition-all rounded flex items-center gap-4", {
  variants: {
    intent: {
      primary: "bg-black text-white active:opacity-80",
      secondary: "bg-white text-black active:text-white active:bg-black",
      ghost: "bg-zinc-200 hover:bg-zinc-300",
      borderedSecondary:
        "border border-black active:bg-black active:text-white",
      borderedPrimary:
        "border border-white bg-black active:text-white text-white",
      white: "bg-white text-black active:bg-black active:text-white",
    },
    pressable: {
      true: "active:scale-95",
      fasle: "",
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
  },
  defaultVariants: {
    intent: "primary",
    size: "md",
    pressable: true,
  },
});

export interface ListItemProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof listItem> {
  starticon?: React.ReactNode;
  endicon?: React.ReactNode;
}

export const ListItem: React.FC<ListItemProps> = ({
  className,
  intent,
  size,
  rounded,
  pressable,
  ...props
}) => (
  <div
    className={listItem({
      intent,
      size,
      rounded,
      pressable,
      className,
    })}
    {...props}
  >
    {props.starticon}
    {props.children}
    {props.endicon}
  </div>
);
