import { cva, type VariantProps } from "class-variance-authority";

const InputStyles = cva(`rounded`, {
  variants: {
    bg: {
      zinc: "bg-zinc-200 placeholder:text-zinc-500",
      bordered: "bg-white placeholder:text-zinc-500 border border-zinc-200",
    },
    color: {
      zinc: "text-zinc-400",
      black: "text-black",
    },
  },
  defaultVariants: {
    bg: "zinc",
    color: "zinc",
  },
});

interface Props extends VariantProps<typeof InputStyles> {
  State: string;
  setState: (value: string) => void;
  placeholder: string;
  starticon?: React.ReactNode;
  endicon?: React.ReactNode;
}

export default function Input({
  State,
  setState,
  placeholder,
  starticon,
  endicon,
  bg,
  ...props
}: Props) {
  return (
    <div
      className={
        InputStyles({
          bg,
        }) + " relative "
      }
    >
      <span className="absolute top-3.5 left-3.5">{starticon}</span>
      <input
        type="text"
        value={State}
        onChange={(e) => setState(e.target.value)}
        placeholder={placeholder}
        className={`w-full bg-transparent rounded px-4 py-3
        
        ${starticon ? "pl-10" : ""}
        ${endicon ? "pr-10" : ""}
        `}
      />
      <span className="absolute top-2.5 left-2.5">{endicon}</span>
    </div>
  );
}
