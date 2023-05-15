import { cva, VariantProps } from "class-variance-authority";

import { ImSpinner2 } from "react-icons/im";
import { FaSpinner } from "react-icons/fa";

const SpinnerStyle = cva("spinner", {
  variants: {
    size: {
      sm: "w-6 h-6",
      md: "w-8 h-8",
      lg: "w-10 h-10",
      xl: "w-12 h-12",
    },
    color: {
      black: "text-black",
      white: "text-white",
      zinc: "text-zinc-400",
    },
  },

  defaultVariants: {
    size: "md",
    color: "black",
  },
});

interface Props extends VariantProps<typeof SpinnerStyle> {
  variant?: "dots" | "line";
}

export default function LoadingSpinner(props: Props) {
  const { size, color, variant = "line" } = props;
  return (
    <div
      className={`
        ${SpinnerStyle({ size, color })}
        animate-spin
    `}
    >
      {variant === "line" ? (
        <ImSpinner2 className="w-full h-full" />
      ) : (
        <FaSpinner className="w-full h-full" />
      )}
    </div>
  );
}
