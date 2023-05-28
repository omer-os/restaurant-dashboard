"use client";
import Button from "@components/elements/button/Button";
import TextInput from "@components/elements/input/TextInput";
import React, { useState, useEffect, useContext } from "react";
import { GrClose } from "react-icons/gr";
import { AnimatePresence, motion } from "framer-motion";
import { MenuitemContext } from "../table/menus/MenuContext";
import ToggleOptionsSwitch from "@components/elements/toggle/ToggleOptionsSwitch";

const MenuItemModal = ({ open, setOpen }: { open: boolean; setOpen: any }) => {
  const { selectedMenuItem, setSelectedMenuItem, setMenuItems, menuItems } =
    useContext(MenuitemContext);

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

  const [Name, setName] = useState<string>(selectedMenuItem?.name);
  const [Description, setDescription] = useState<string>(
    selectedMenuItem?.description || ""
  );
  const [Image, setImage] = useState<string>(selectedMenuItem?.image_url || "");
  const [BasePrice, setBasePrice] = useState<number>(
    selectedMenuItem?.basePrice
  );
  const [Variants, setVariants] = useState<{ name: string; price: number }[]>(
    selectedMenuItem?.variants || []
  );
  const [Extras, setExtras] = useState<
    { name: string; additionalCost: number }[]
  >(selectedMenuItem?.extras || []);
  const [Status, setStatus] = useState<boolean | "auto" | "basedOnCategory">(
    selectedMenuItem?.status || "basedOnCategory"
  );
  const [ActiveDate, setActiveDate] = useState<{
    startDate: { month: number; day: number };
    endDate: { month: number; day: number };
  }>(
    selectedMenuItem?.activeDate || {
      startDate: { month: 1, day: 1 },
      endDate: { month: 12, day: 31 },
    }
  );

  useEffect(() => {
    setName(selectedMenuItem?.name || "");
    setDescription(selectedMenuItem?.description || "");
    setImage(selectedMenuItem?.image_url || "");
    setBasePrice(selectedMenuItem?.basePrice || 0);
    setVariants(selectedMenuItem?.variants || []);
    setExtras(selectedMenuItem?.extras || []);
    setStatus(selectedMenuItem?.status || false);
    setActiveDate(
      selectedMenuItem?.activeDate || {
        startDate: { month: 1, day: 1 },
        endDate: { month: 12, day: 31 },
      }
    );
  }, [selectedMenuItem]);

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
            onTouchStart={handleCloseModal}
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
              <div className="text-3xl font-bold">{selectedMenuItem.name}</div>
              <Button IconButton={true} bg="white" onClick={handleCloseModal}>
                <GrClose />
              </Button>
            </div>
            <div className="px-5 py-3 flex flex-col justify-between relative">
              <div>
                <div className="w-full rounded h-[15em] bg-zinc-300 mx-auto" />
                <div className="flex flex-col space-y-3 mt-3">
                  <TextInput
                    label="Menu Item Name"
                    placeholder="Enter Menu Item Name"
                    State={Name}
                    setState={setName}
                    bg="white"
                  />
                  <TextInput
                    label="Menu Item Description"
                    placeholder="Enter Menu Item Description"
                    State={Description}
                    setState={setDescription}
                    bg="white"
                  />

                  <TextInput
                    label="Base Price"
                    placeholder="Enter Base Price"
                    State={BasePrice.toString()}
                    setState={setBasePrice}
                    bg="white"
                  />
                  {/* Add components for Variants and Extras here */}
                  <div className="text-lg font-bold">Menu Item Status</div>
                  <div className="w-full overflow-x-scroll">
                    <ToggleOptionsSwitch
                      options={[
                        { name: "Based on category", value: "basedOnCategory" },
                        { name: "Active", value: true },
                        { name: "Auto", value: "auto" },
                        { name: "Inactive", value: false },
                      ]}
                      State={Status}
                      setState={setStatus}
                    />

                    {Status === "auto" && (
                      <div className="grid grid-cols-2 gap-4">
                        {[
                          {
                            label: "Start Date",
                            date: ActiveDate?.startDate,
                            setDate: (date: { month: number; day: number }) =>
                              setActiveDate((prev: any) => ({
                                ...prev,
                                startDate: date,
                              })),
                          },
                          {
                            label: "End Date",
                            date: ActiveDate?.endDate,
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
                                {Array.from(
                                  { length: 12 },
                                  (_, i) => i + 1
                                ).map((month) => (
                                  <option key={month} value={month}>
                                    {month}
                                  </option>
                                ))}
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
                                {Array.from(
                                  { length: 31 },
                                  (_, i) => i + 1
                                ).map((day) => (
                                  <option key={day} value={day}>
                                    {day}
                                  </option>
                                ))}
                              </select>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <Button
                width="full"
                className="justify-center mt-5 mb-6"
                onClick={() => {
                  setSelectedMenuItem({
                    ...selectedMenuItem,
                    name: Name,
                    description: Description,
                    image_url: Image,
                    basePrice: BasePrice,
                    variants: Variants,
                    extras: Extras,
                    status: Status,
                    activeDate: ActiveDate,
                  });
                  setMenuItems(
                    menuItems.map((item) => {
                      if (item.id === selectedMenuItem.id) {
                        return {
                          ...item,
                          name: Name,
                          description: Description,
                          image_url: Image,
                          basePrice: BasePrice,
                          variants: Variants,
                          extras: Extras,
                          status: Status,
                          activeDate: ActiveDate,
                        };
                      }
                      return item;
                    })
                  );

                  handleCloseModal();
                }}
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

export default MenuItemModal;
