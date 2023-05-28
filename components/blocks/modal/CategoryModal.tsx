"use client";
import Button from "@components/elements/button/Button";
import TextInput from "@components/elements/input/TextInput";
import React, { useState, useEffect } from "react";
import { GrClose } from "react-icons/gr";
import { AnimatePresence, motion } from "framer-motion";
import ToggleOptionsSwitch from "@components/elements/toggle/ToggleOptionsSwitch";

const CategoryModal = ({
  open,
  setOpen,
  categoryName,
  setCategoryName,
  categoryImage,
  setCategoryImage,
  onSave,
  categoryStatus = true,
  setCategoryStatus,
  activeDate,
  setActiveDate,
}: {
  open: boolean;
  setOpen: any;
  categoryName: string;
  setCategoryName: any;
  categoryImage: string;
  setCategoryImage: any;
  categoryStatus: boolean | "auto";
  setCategoryStatus: any;
  activeDate: {
    startDate: {
      day: number;
      month: number;
    };
    endDate: {
      day: number;
      month: number;
    };
  };
  setActiveDate: any;

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

  useEffect(() => {
    // Push a new history entry when the modal opens
    if (open) {
      window.history.pushState(null, "", window.location.pathname);
    }

    // Handle the back button press
    const handleBackButton = (event: PopStateEvent) => {
      if (open) {
        setOpen(false);
        event.preventDefault();
      }
    };

    window.addEventListener("popstate", handleBackButton);

    return () => {
      window.removeEventListener("popstate", handleBackButton);
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <>
          <div className="fixed inset-0 z-50">
            <motion.div
              className="overlay bg-black/40 inset-0 fixed"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={overlayVariants}
              onTouchStart={handleCloseModal}
              onClick={handleCloseModal}
              transition={{ duration: 0.2 }}
            ></motion.div>
          </div>

          <motion.div
            className="fixed bg-white shadow-xl md:rounded-l-3xl md:rounded-t-none rounded-t-3xl rounded-l-none md:h-full h-[75vh] md:w-[50vw] w-full bottom-0 md:top-0 right-0 md:left-auto overflow-y-scroll z-50"
            initial="initial"
            animate="animate"
            exit="exit"
            variants={modalVariants}
            transition={{ duration: 0.2 }}
          >
            <div className="flex justify-between items-center bg-white sticky top-0 left-0 px-5 py-3 z-10">
              <div className="text-3xl font-bold truncate">{categoryName}</div>
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
                    State={categoryName || ""}
                    setState={setCategoryName}
                    bg="white"
                  />
                  <TextInput
                    label="Category Image URL"
                    placeholder="Enter Category Image URL"
                    State={categoryImage || ""}
                    setState={setCategoryImage}
                    bg="white"
                  />

                  <br />
                  <div className="text-lg font-bold">Category Status</div>
                  <ToggleOptionsSwitch
                    options={[
                      { name: "Active", value: true },
                      { name: "Inactive", value: false },
                      { name: "Auto", value: "auto" },
                    ]}
                    State={categoryStatus}
                    setState={setCategoryStatus}
                  />

                  {categoryStatus === "auto" && (
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        {
                          label: "Start Date",
                          date: activeDate?.startDate,
                          setDate: (date: { month: number; day: number }) =>
                            setActiveDate((prev: any) => ({
                              ...prev,
                              startDate: date,
                            })),
                        },
                        {
                          label: "End Date",
                          date: activeDate?.endDate,
                          setDate: (date: { month: number; day: number }) =>
                            setActiveDate((prev: any) => ({
                              ...prev,
                              endDate: date,
                            })),
                        },
                      ].map((item, index) => (
                        <div key={index + item.label} className="mb-4">
                          <label className="block text-gray-700 text-sm font-bold mb-2">
                            {item.label}
                          </label>
                          <div className="flex gap-4">
                            <select
                              value={item.date?.month}
                              onChange={(e) =>
                                item.setDate({
                                  ...item.date,
                                  month: parseInt(e.target.value),
                                })
                              }
                              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            >
                              {Array.from({ length: 12 }, (_, i) => i + 1).map(
                                (month) => (
                                  <option key={month} value={month}>
                                    {month}
                                  </option>
                                )
                              )}
                            </select>
                            <select
                              value={item.date?.day}
                              onChange={(e) =>
                                item.setDate({
                                  ...item.date,
                                  day: parseInt(e.target.value),
                                })
                              }
                              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            >
                              {Array.from({ length: 31 }, (_, i) => i + 1).map(
                                (day) => (
                                  <option key={day} value={day}>
                                    {day}
                                  </option>
                                )
                              )}
                            </select>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
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
