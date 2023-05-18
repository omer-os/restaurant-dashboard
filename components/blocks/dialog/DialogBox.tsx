"use client";
import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { IoClose } from "react-icons/io5";

interface DialogProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
}

const DialogBox: React.FC<DialogProps> = ({ trigger, children }) => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <div>{trigger}</div>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="bg-black/40 fixed inset-0 z-50" />
      <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none z-50">
        {children}
        <Dialog.Close asChild>
          <button
            className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[20px] right-[20px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
            aria-label="Close"
          >
            <IoClose size={25} />
          </button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);

export default DialogBox;
