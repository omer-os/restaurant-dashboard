"use client";
import Button from "@components/elements/button/Button";
import TextInput from "@components/elements/input/TextInput";
import React, { useState, useEffect } from "react";
import { GrClose } from "react-icons/gr";
import { AnimatePresence, motion } from "framer-motion";

const CategoryModal = ({
  open,
  setOpen,
  categoryName,
  setCategoryName,
  categoryDescription,
  setCategoryDescription,
  categoryImage,
  setCategoryImage,
  onSave,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  categoryName: string;
  setCategoryName: React.Dispatch<React.SetStateAction<string>>;
  categoryDescription: string;
  setCategoryDescription: React.Dispatch<React.SetStateAction<string>>;
  categoryImage: string;
  setCategoryImage: React.Dispatch<React.SetStateAction<string>>;
  onSave: () => void;
}) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const handleCloseModal = () => {
    setOpen(false);
  };

  useEffect(() => {
    setIsSmallScreen(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleResize = () => {
    setIsSmallScreen(window.innerWidth <= 768);
  };

  const modalVariants = isSmallScreen
    ? {
        initial: { x: "0", y: "100%" },
        animate: { x: 0, y: 0 },
        exit: { x: "0", y: "100%" },
      }
    : {
        initial: { x: "100%", y: "0" },
        animate: { x: 0, y: 0 },
        exit: { x: "100%", y: "0" },
      };

  const overlayVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const handleSave = () => {
    onSave();
    setOpen(false);
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="overlay bg-black/40 inset-0 fixed z-50"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={overlayVariants}
            onClick={handleCloseModal}
            transition={{ duration: 0.2 }}
          ></motion.div>

          <motion.div
            className="fixed bg-white shadow-xl md:rounded-l-3xl md:rounded-t-none rounded-t-3xl rounded-l-none md:h-full h-[75vh] md:w-[50vw] w-full bottom-0 md:top-0 right-0 md:left-auto overflow-y-scroll z-50"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={modalVariants}
            transition={{ duration: 0.2 }}
          >
            <div className="flex justify-between items-center bg-white sticky top-0 left-0 px-5 py-3 z-10">
              <div className="text-3xl font-bold">{categoryName}</div>
              <Button IconButton={true} bg="white" onClick={handleCloseModal}>
                <GrClose />
              </Button>
            </div>
            <div className="px-5 py-3 flex flex-col justify-between relative">
              <div>
                <div className="w-full rounded h-[15em] bg-zinc-300 mx-auto" />
                <div className="flex flex-col space-y-3 mt-3">
                  <TextInput
                    label="Category Name"
                    placeholder="Enter Category Name"
                    State={categoryName}
                    setState={setCategoryName}
                    bg="white"
                  />
                  <TextInput
                    label="Category Description"
                    placeholder="Enter Category Description"
                    State={categoryDescription}
                    setState={setCategoryDescription}
                    bg="white"
                  />
                  <TextInput
                    label="Category Image URL"
                    placeholder="Enter Category Image URL"
                    State={categoryImage}
                    setState={setCategoryImage}
                    bg="white"
                  />
                </div>
              </div>
              <Button
                width="full"
                className="justify-center mt-5 mb-6"
                onClick={handleSave}
              >
                Save
              </Button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CategoryModal;