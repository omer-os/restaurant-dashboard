"use client";
import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@components/elements/button/Button";

interface DeleteDialogProps {
  open: boolean;
  setOpen: any;
  children: React.ReactNode;
}

export default function DialogBox({
  open,
  setOpen,
  children,
}: DeleteDialogProps) {

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [open]);



  return (
    <AnimatePresence>
      {open && (
        <div className="fixed p-4 flex items-center justify-center inset-0 z-50">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed z-[998] bg-black/40 inset-0"
            onClick={() => {
              setOpen(false);
            }}
          />

          <motion.div
            className="z-[999]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {children}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
