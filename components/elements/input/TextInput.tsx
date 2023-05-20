import { cva, VariantProps } from "class-variance-authority";
import { FiSearch, FiX } from "react-icons/fi";

const inputStyles = cva(`rounded`, {
  variants: {
    bg: {
      zincFilled: `bg-zinc-200 `,
      white: `bg-white border border-zinc-300`,
    },

    padding: {
      sm: `p-2`,
      md: `px-4 py-2`,
    },
    width: {
      max: `w-max`,
      full: `w-full`,
    },
  },

  defaultVariants: {
    bg: `zincFilled`,
    padding: `md`,
    width: `full`,
  },
});

interface TextInputProps extends VariantProps<typeof inputStyles> {
  placeholder?: string;
  label?: string;
  State: string;
  setState: any;

  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;

  className?: string;
}

export default function TextInput({
  bg,
  placeholder,
  State,
  setState,
  className,
  padding,
  endIcon,
  startIcon,
  label,
  width,
}: TextInputProps) {
  const styles = inputStyles({ bg, className, padding, width });
  return (
    <div className="relative flex flex-col fill-current gap-1">
      <div className="text-sm text-zinc-500">{label}</div>

      <div className="absolute top-0 left-0 flex items-center h-full ml-2">
        {startIcon}
      </div>
      <input
        type="text"
        placeholder={placeholder}
        value={State}
        onChange={(e) => setState(e.target.value)}
        className={
          styles + ` ${startIcon ? `pl-8` : ``} ${endIcon ? `pr-8` : ``}`
        }
      />

      <div className="absolute top-0 right-0 flex items-center h-full mr-2">
        {endIcon}
      </div>
    </div>
  );
}
