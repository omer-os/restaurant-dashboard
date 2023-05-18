"use client";
import DialogBox from "@components/blocks/dialog/DialogBox";
import Avatar from "@components/elements/avatar/Avatar";
import { Button } from "@components/elements/button/Button";
import Divider from "@components/elements/divider/Divider";
import { EditableImage } from "@components/elements/editable/EditableImage";
import { db } from "@lib/firebase";
import React, { useEffect, useState } from "react";
import { GrEdit } from "react-icons/gr";
import { storage } from "@lib/firebase"; // Assuming you've properly initialized Firebase

import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

export default function RestaurantInfoComponent({
  restaurant,
  restaurantId,
}: {
  restaurant: Restaurant;
  restaurantId: string;
}) {
  const [Name, setName] = useState(restaurant.name);
  const [Description, setDescription] = useState(restaurant.description);
  const [Address, setAddress] = useState(restaurant.address);
  const [City, setCity] = useState(restaurant.city);
  const [Country, setCountry] = useState(restaurant.country);
  const [ZipCode, setZipCode] = useState(restaurant.zipCode);
  const [Website, setWebsite] = useState(restaurant.website);
  const [Phone, setPhone] = useState(restaurant.phone);
  const [Email, setEmail] = useState(restaurant.email);
  const [Image, setImage] = useState<File | null>(null);

  const [imageUrl, setimageUrl] = useState(restaurant.logo);

  async function saveChanges(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const restaurantRef = db.collection("restaurants").doc(restaurantId);

    if (Image) {
      const storageRef = ref(storage, `logos/${restaurantId}.png`);
      // @ts-ignore
      const uploadTask = uploadBytesResumable(storageRef, Image);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");

          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log("File available at", downloadURL);
            setimageUrl(downloadURL);
          });
        }
      );
    }

    await restaurantRef.update({
      name: Name,
      description: Description,
      address: Address,
      city: City,
      country: Country,
      zipCode: ZipCode,
      website: Website,
      phone: Phone,
      email: Email,
      updatedAt: new Date(),
      logo: imageUrl,
    });
  }

  return (
    <div >
      <form className="flex gap-5 md:flex-row flex-col" onSubmit={saveChanges}>
        <div className="p-4 bg-white shadow-lg flex-1 rounded border flex flex-col">
          <div className="flex justify-between items-end">
            <div className="relative rounded-full">
              <EditableImage
                ImageComponent={
                  <Avatar
                    size={"xl"}
                    className="hover:scale-105 transition-all hover:brightness-75"
                    src={imageUrl}
                    alt={Name}
                  />
                }
                State={Image as any}
                setState={setImage}
              />
              <div className="absolute bottom-2 right-3">
                <GrEdit size={12} />
              </div>
            </div>

            <DialogBox
              trigger={
                <Button type="button" intent={"borderedSecondary"} size={"sm"}>
                  edit profile
                </Button>
              }
            >
              <div>
                <div className="text-xl font-bold capitalize">
                  edit restaurant profile
                </div>

                <Divider className="mt-3" />

                <div className="flex gap-3 mt-4 flex-col">
                  {[
                    {
                      label: "name",
                      placeholder: "restaurant name",
                      value: Name,
                      setValue: setName,
                    },
                    {
                      label: "description",
                      placeholder: "restaurant description",
                      value: Description,
                      setValue: setDescription,
                    },
                    {
                      label: "address",
                      placeholder: "restaurant address",
                      value: Address,
                      setValue: setAddress,
                    },
                    {
                      label: "city",
                      placeholder: "restaurant city",
                      value: City,
                      setValue: setCity,
                    },
                    {
                      label: "country",
                      placeholder: "restaurant country",
                      value: Country,
                      setValue: setCountry,
                    },
                    {
                      label: "zip code",
                      placeholder: "restaurant zip code",
                      value: ZipCode,
                      setValue: setZipCode,
                    },
                    {
                      label: "website",
                      placeholder: "restaurant website",
                      value: Website,
                      setValue: setWebsite,
                    },
                  ].map((item, index) => (
                    <div key={index} className="flex gap-2 flex-col">
                      <label
                        htmlFor={item.label}
                        className="text-zinc-500 leading-3 text-sm"
                      >
                        {item.label}
                      </label>
                      <input
                        type="text"
                        className="border rounded py-2 px-3"
                        placeholder={item.placeholder}
                        name={item.label}
                        value={item.value}
                        onChange={(e) => item.setValue(e.target.value)}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </DialogBox>
          </div>

          <h1 className="md:text-2xl text-xl font-bold capitalize mt-2">
            {Name}
          </h1>
          <div className="md:text-base text-sm text-zinc-500">
            {Description}
          </div>

          <div className="mt-3 flex md:text-base text-sm flex-col">
            {[
              {
                label: "address",
                value: Address,
                setValue: setAddress,
              },
              {
                label: "city",
                value: City,
                setValue: setCity,
              },
              {
                label: "country",
                value: Country,
                setValue: setCountry,
              },
              {
                label: "zip code",
                value: ZipCode,
                setValue: setZipCode,
              },
              {
                label: "website",
                value: Website,
                setValue: setWebsite,
              },
            ].map((item, index) => (
              <div key={index} className="flex gap-2">
                <span className="font-bold capitalize">{item.label}:</span>
                <p className="text-zinc-500">{item.value}</p>
              </div>
            ))}
          </div>

          <Button type="submit" className="mt-4 text-sm" width={"max"}>
            save changes
          </Button>
        </div>
        <div className="p-4 bg-white shadow-lg flex-1 rounded border flex flex-col">
          <h1 className="md:text-2xl text-xl font-bold capitalize mt-2">
            Contact Information
          </h1>

          <div className="flex md:text-base text-sm flex-col mt-3 gap-3">
            {[
              {
                label: "phone",
                placeholder: "phone number",
                value: Phone,
                setValue: setPhone,
              },
              {
                label: "email",
                placeholder: "restaurant email",
                value: Email,
                setValue: setEmail,
              },
            ].map((item, index) => (
              <div key={index} className="flex gap-2 flex-col">
                <label
                  htmlFor={item.label}
                  className="text-zinc-500 leading-3 text-sm"
                >
                  Email address
                </label>
                <input
                  type="text"
                  className="border rounded py-2 px-3"
                  placeholder={item.placeholder}
                  name={item.label}
                  value={item.value}
                  onChange={(e) => item.setValue(e.target.value)}
                />
              </div>
            ))}

            <Button type="submit" className="mt-4 text-sm" width={"max"}>
              save changes
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
