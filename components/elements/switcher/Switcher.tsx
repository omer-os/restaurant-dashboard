import { motion } from "framer-motion";

type props = {
  State: boolean;
  setState: (state: boolean) => void;

  openIcon?: React.ReactNode;
  closeIcon?: React.ReactNode;
};

export default function Switcher({
  State,
  setState,
  openIcon,
  closeIcon,
}: props) {
  return (
    <div
      onClick={() => setState(!State)}
      className={`p-1 group rounded-full w-14 flex items-center
${State ? "justify-start" : "justify-end"}
${State ? "bg-blue-600" : "bg-zinc-400 "}
      `}
    >
      <motion.div
        className={`
      w-6 h-6 rounded-full bg-white
      group-active:w-9 transition-[width] shadow-sm flex items-center justify-center`}
        layout
      >
        {State ? openIcon : closeIcon} {/* Render icon based on State */}
      </motion.div>
    </div>
  );
}
