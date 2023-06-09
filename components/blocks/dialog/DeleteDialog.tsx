"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "@components/elements/button/Button";

interface DeleteDialogProps {
  open: boolean;
  setOpen: any;
  onDelete: any;
  title: string;
  description: string;
}

export default function DeleteDialog({
  open,
  setOpen,
  onDelete,
  title,
  description,
}: DeleteDialogProps) {
  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-50">
          <div className="fixed flex items-center justify-center left-0 right-0 top-0 bottom-0">
            <>
              <motion.div
                className="overlay bg-black/40 inset-0 fixed z-10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setOpen(false)}
                transition={{ duration: 0.2 }}
              ></motion.div>
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="bg-white z-20 relative sm:p-8 p-5 rounded shadow-xl max-w-md mx-auto"
              >
                <h2 className="text-2xl font-bold mb-4">{title}</h2>
                <p className="mb-8">{description}</p>
                <div className="flex justify-end space-x-4">
                  <Button
                    bg="red"
                    onClick={() => {
                      onDelete();

                      setOpen(false);
                    }}
                  >
                    Delete
                  </Button>
                  <Button bg={"blue"} onClick={() => setOpen(false)}>
                    Cancel
                  </Button>
                </div>
              </motion.div>
            </>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
