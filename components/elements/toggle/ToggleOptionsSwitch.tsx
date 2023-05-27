"use client";
import { AnimatePresence, motion } from "framer-motion";

export default function ToggleOptionsSwitch({
  State,
  setState,
  options,
}: {
  State: any;
  setState: any;
  options: {
    name: string;
    value: any;
  }[];
}) {
  return (
    <div className="flex bg-gray-100 gap-1 rounded-xl ">
      <AnimatePresence>
        {options.map((option, index) => (
          <div
            key={index}
            onClick={() => setState(option.value)}
            className={`flex items-center p-3 justify-center rounded-xl cursor-pointer flex-1 relative transition-all ${
              State === option.value ? "text-white" : ""
            }`}
          >
            {State === option.value && (
              <motion.div
                className={`absolute inset-0 rounded-xl bg-gray-700 shadow-md z-10`}
                layoutId={`toggle`}
              />
            )}

            <span className="z-10 relative">{option.name}</span>
          </div>
        ))}
      </AnimatePresence>
    </div>
  );
}
