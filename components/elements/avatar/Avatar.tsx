import { VariantProps, cva } from "class-variance-authority";
import Image from "next/image";
import React from "react";

const style = cva(`relative overflow-hidden`, {
  variants: {
    size: {
      sm: `h-8 w-8`,
      md: `h-12 w-12`,
      lg: `h-16 w-16`,
      xl: `h-20 w-20`,
    },

    rounded: {
      full: `rounded-full`,
      md: `rounded-md`,
    },
  },

  defaultVariants: {
    size: `md`,
    rounded: `full`,
  },
});

interface Props extends VariantProps<typeof style> {
  src: string;
  alt: string;
  className?: string;
}

export default function Avatar({
  rounded,
  src,
  alt,
  size,
  className,
  ...props
}: Props) {
  return (
    <div
      className={style({
        size,
        rounded,
      })}
    >
      <Image
        src={src || "https://placehold.co/100x100"}
        className={"w-full h-full object-cover" + className}
        fill
        alt={alt || "Avatar"}
      />
    </div>
  );
}
