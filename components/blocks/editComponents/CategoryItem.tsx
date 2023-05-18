"use client";
import Avatar from "@components/elements/avatar/Avatar";
import { Button } from "@components/elements/button/Button";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Divider from "@components/elements/divider/Divider";
import { doc, updateDoc } from "firebase/firestore";
import { db, storage } from "@lib/firebase";
import { getDownloadURL, getStorage, ref } from "firebase/storage";

export default function CategoryItem({
  menu,
  restaurantId,
}: {
  menu: Menu;
  restaurantId: string;
}) {
  const [Open, setOpen] = useState(false);
  const [Name, setName] = useState(menu.name);
  const [Description, setDescription] = useState(menu.description);
  const [Image, setImage] = useState<string | any>(menu.image);

  const ref: any = useRef();
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, Open]);

  return (
    <div
      ref={ref}
      className="flex group flex-col shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] bg-white p-3 sm:p-5 "
    >
      <div className="flex justify-between items-center">
        <div className="flex gap-3">
          <Avatar src={menu.image} alt="avatar" rounded={"md"} size={"sm"} />

          <div className="text-xl font-bold truncate max-w-[8em]">
            {menu.name}
          </div>
        </div>

        <div className="flex items-center gap-5">
          <button
            onClick={() => setOpen(!Open)}
            className="text-zinc-500 text-lg underline hover:underline"
          >
            edit
          </button>

          <Button>delete</Button>
        </div>
      </div>

      <motion.div
        initial={{
          height: 0,
          opacity: 0,
        }}
        animate={{
          height: Open ? "auto" : 0,
          opacity: Open ? 1 : 0,
        }}
        className="overflow-hidden"
      >
        <form
          className="flex mt-5 flex-col sm:gap-2 gap-3"
          onSubmit={(e) => {
            e.preventDefault();
            setOpen(false);

            // update the image in the storage
            const storageRef = storage.ref(`menus/${menu.id}`);
            const uploadTask = storageRef.put(Image);

            const menuRef = doc(
              db as any,
              "restaurants",
              restaurantId,
              "menus",
              menu.id as string
            );

            uploadTask.then(async (snapshot) => {
              const downloadURL = await getDownloadURL(snapshot.ref);
              await updateDoc(menuRef, {
                image: downloadURL,
              });
            });
          }}
        >
          {[
            {
              type: "text",
              name: "name",
              placeholder: "name of the category",
              Value: Name,
              setValue: setName,
            },
            {
              type: "text",
              name: "description",
              placeholder: "description of the category",
              Value: Description,
              setValue: setDescription,
            },
          ].map((i, index) => (
            <div key={index} className="flex sm:flex-row flex-col sm:gap-2">
              <div className="w-1/4 capitalize text-lg font-bold">
                {i.name}:
              </div>

              <input
                type={i.type}
                name={i.name}
                className="border rounded w-full text-lg p-2"
                placeholder={i.placeholder}
                accept="image/*"
                value={i.Value as any}
                onChange={(e) => i.setValue(e.target.value as any)}
              />
            </div>
          ))}

          <div className="flex sm:flex-row flex-col sm:gap-2">
            <div className="w-1/4 capitalize text-lg font-bold">image:</div>
            <input
              type="file"
              name="image"
              className="border rounded w-full text-lg p-2"
              accept="image/*"
              onChange={(e) => setImage(e.target?.files?[0] : Image)}
            />
          </div>

          <Divider />

          <div className="flex sm:w-max gap-2">
            <Link href={"/"}>
              <Button type="button" intent={"borderedSecondary"}>
                see items
              </Button>
            </Link>
            <Button
              className="flex-1"
              type="submit"
              onClick={() => setOpen(false)}
            >
              Done
            </Button>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
