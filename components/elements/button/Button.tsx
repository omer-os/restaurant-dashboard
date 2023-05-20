import { VariantProps, cva } from "class-variance-authority";

export const ButtonStyles = cva(
  "active:scale-95 flex items-center gap-2 transition-all",
  {
    variants: {
      bg: {
        primary: "bg-yellow-400 hover:bg-yellow-500",
        zinc: "bg-zinc-200 hover:bg-zinc-300",
        white: "bg-white hover:bg-gray-100",
        blue: "bg-blue-600/30 hover:bg-blue-500/60 border-2 border-blue-600",
        red: "bg-red-600 hover:bg-red-500 text-white",
      },

      rounded: {
        md: "rounded",
        full: "rounded-full",
      },

      IconButton: {
        true: "!p-3 flex items-center justify-center !gap-0",
        false: "",
      },

      padding: {
        sm: "px-2 py-1",
        md: "px-4 py-2",
        lg: "px-8 py-4",
        xl: "px-12 py-6",
      },

      width: {
        full: "w-full",
        max: "w-max",
      },

      textPosition: {
        left: "text-left",
        right: "text-right",
        center: "text-center",
      },
    },

    defaultVariants: {
      bg: "primary",
      padding: "md",
      rounded: "md",
      width: "max",
      IconButton: false,
    },
  }
);

interface ButtonProps extends VariantProps<typeof ButtonStyles> {
  children: React.ReactNode;

  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;

  onClick?: () => void;

  type?: "button" | "submit" | "reset";
  className?: string;
}

export default function Button({
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
  IconButton,
  ...props
}: ButtonProps) {
  const style = ButtonStyles({
    padding,
    className,
    bg,
    rounded,
    width,
    IconButton,
  });
  return (
    <button className={style} onClick={onClick} type={type} {...props}>
      {startIcon}
      <span>{children}</span>
      {endIcon}
    </button>
  );
}
