import React from "react";
import { ButtonStyles } from "../button/Button";
import { VariantProps } from "class-variance-authority";
import Link from "next/link";

interface LinkProps extends VariantProps<typeof ButtonStyles> {
  children: React.ReactNode;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  href: string;
}

export default function LinkButton({
  children,
  startIcon,
  endIcon,
  onClick,
  type = "button",
  padding,
  bg,
  className,
  rounded,
  width,
  href,
}: LinkProps) {
  const style = ButtonStyles({
    padding,
    className,
    bg,
    rounded,
    width,
  });
  return (
    <Link onClick={onClick} className={style} href={href}>
      {startIcon}
      <span>{children}</span>
      {endIcon}
    </Link>
  );
}
