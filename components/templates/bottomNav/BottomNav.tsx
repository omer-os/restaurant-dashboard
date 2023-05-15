"use client";

import { AiFillHome } from "react-icons/ai";
import { usePathname, useSelectedLayoutSegment } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
interface Props {
  items: {
    name: string;
    icon: React.ReactNode;
    link: string;
  }[];
}

export default function BottomNav(props: Props) {
  const pathname = usePathname();

  return (
    <div className="fixed bottom-0 flex left-0 right-0">
      {props.items.map((item, index) => (
        <Link
          href={item.link}
          key={index}
          className={`h-16 hover:bg-zinc-200 text-black flex-1 bg-white flex justify-center items-center
            ${
              pathname === item.link && "text-blue-600"
            } transition-all relative`}
        >
          {pathname === item.link && (
            <motion.div
              layoutId="ihriypgefriy"
              className="absolute z-10 top-0 h-1 w-full left-0 bg-blue-600"
            />
          )}
          {item.icon}
        </Link>
      ))}
    </div>
  );
}
