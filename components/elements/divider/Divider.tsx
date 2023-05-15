import React from "react";

export default function Divider({ className }: { className?: string }) {
  return (
    <div
      className={"w-full h-[0.08em] bg-zinc-300 rounded-full " + className}
    ></div>
  );
}
