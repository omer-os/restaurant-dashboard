"use client";
import React, { useEffect, useState } from "react";
import CategoryItem from "./CategoryItem";
import DialogBox from "../dialog/DialogBox";
import { Button } from "@components/elements/button/Button";
import { getAuth } from "firebase/auth";
import app, { db, storage } from "@lib/firebase";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { getDownloadURL, ref } from "firebase/storage";

export default function MenusList({
  allMenus,
  restaurantId,
}: {
  allMenus: Menu[];
  restaurantId: string;
}) {
  const auth = getAuth(app);

  const [Menus, setMenus] = useState<Menu[]>(allMenus);

  const newMenuHandeler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const description = formData.get("description") as string;
    const imageFile = e.currentTarget.image.files[0] as File;

    const menuCollectionRef = collection(
      db,
      "restaurants",
      restaurantId,
      "menus"
    );

    const menuDocRef = await addDoc(menuCollectionRef, {
      name,
      description,
      image: "",
    });

    const storageRef = storage.ref(`menus/${menuDocRef.id}`);
    const uploadTask = storageRef.put(imageFile);

    uploadTask.then(async (snapshot) => {
      const downloadURL = await getDownloadURL(snapshot.ref);
      await updateDoc(menuDocRef, {
        image: downloadURL,
      });
      setMenus((prev) => [
        ...prev,
        {
          id: menuDocRef.id,
          name,
          description,
          image: downloadURL,
          createdAt: new Date(),
          restaurantId,
          updatedAt: new Date(),
        },
      ]);
    });
  };

  return (
    <div>
      <h1 className="md:text-2xl text-lg sticky sm:top-14 top-14 sm:p-4 p-2 bg-white z-10 left-0 shadow-lg flex items-center font-bold">
        Menu Categories:
      </h1>
      <div className="flex mt-4 flex-col gap-3">
        {Menus.map((menu) => (
          <CategoryItem key={menu.id} menu={menu} restaurantId={restaurantId} />
        ))}
      </div>

      <div className="mt-2">
        <DialogBox trigger={<Button type="button">set new category</Button>}>
          <div className="flex flex-col">
            <h1 className="text-xl font-bold">Add new category</h1>
            <form
              onSubmit={newMenuHandeler}
              className="flex flex-col gap-3 mt-3"
            >
              {[
                {
                  label: "name",
                  placeholder: "category name",
                  type: "text",
                },
                {
                  label: "description",
                  placeholder: "category description",
                  type: "text",
                },
                {
                  label: "image",
                  placeholder: "category image",
                  type: "file",
                },
              ].map((item, index) => (
                <div key={index} className="flex flex-col gap-2">
                  <label
                    htmlFor={item.label}
                    className="text-zinc-500 leading-3 text-sm"
                  >
                    {item.label}
                  </label>
                  <input
                    type={item.type}
                    className="border rounded py-2 px-3"
                    placeholder={item.placeholder}
                    name={item.label}
                    accept="image/jpeg, jpg"
                  />
                </div>
              ))}

              <Button type="submit">add category</Button>
            </form>
          </div>
        </DialogBox>
      </div>
    </div>
  );
}
