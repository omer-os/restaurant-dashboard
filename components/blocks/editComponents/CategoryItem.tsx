"use client";
import Avatar from "@components/elements/avatar/Avatar";
import { Button } from "@components/elements/button/Button";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Divider from "@components/elements/divider/Divider";
const FormHandeler = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);

  const name = formData.get("name");
  const description = formData.get("description");
  const image = formData.get("image");
  console.log(name, description, image);
};

export default function CategoryItem() {
  const [Open, setOpen] = useState(false);

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
          <Avatar
            src="https://avatars.githubusercontent.com/u/66512898?s=40&v=4"
            alt="avatar"
            rounded={"md"}
            size={"sm"}
          />

          <div className="text-xl font-bold truncate max-w-[8em]">burgers</div>
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
          onSubmit={FormHandeler}
        >
          {[
            {
              type: "text",
              name: "name",
              placeholder: "name of the category",
            },
            {
              type: "text",
              name: "description",
              placeholder: "description of the category",
            },
            {
              type: "file",
              name: "image",
              placeholder: "image of the category",
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
              />
            </div>
          ))}

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
