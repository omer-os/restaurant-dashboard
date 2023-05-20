import { HiOutlineMail } from "react-icons/hi";
import { BsTelephone } from "react-icons/bs";
import { RiSettings4Line } from "react-icons/ri";
import { TfiWorld } from "react-icons/tfi";
import { Restaurant } from "@prisma/client";
import DialogBox from "@components/blocks/dialog/DialogBox";
import { prisma } from "../../../prisma/prismaClient";

import { handleUpdateRestaurantInfo } from "../../../prisma/prismaFunctions";

export default function HomeRestaurantInfo({
  restaurant,
}: {
  restaurant: Restaurant;
}) {
  const ResInfoList = [
    {
      label: "Restaurant Name",
      placeholder: "Restaurant Name",
      value: restaurant.name,
      name: "name",
    },
    {
      label: "Restaurant Description",
      placeholder: "Restaurant Description",
      value: restaurant.description,
      name: "description",
    },
    {
      label: "Restaurant Email",
      placeholder: "Restaurant Email",
      value: restaurant.email,
      name: "email",
    },
    {
      label: "Restaurant Address",
      placeholder: "Restaurant Address",
      value: restaurant.address,
      name: "address",
    },
    {
      label: "Restaurant City",
      placeholder: "Restaurant City",
      value: restaurant.city,
      name: "city",
    },
    {
      label: "Restaurant Country",
      placeholder: "Restaurant Country",
      value: restaurant.country,
      name: "country",
    },
    {
      label: "Restaurant Zip Code",
      placeholder: "Restaurant Zip Code",
      value: restaurant.zipCode,
      name: "zipCode",
    },
    {
      label: "Restaurant Phone",
      placeholder: "Restaurant Phone",
      value: restaurant.phone,
      name: "phone",
    },
    {
      label: "Restaurant Website",
      placeholder: "Restaurant Website",
      value: restaurant.website,
      name: "website",
    },
    {
      label: "Restaurant Logo",
      placeholder: "Restaurant Logo",
      value: restaurant.logo,
      name: "logo",
    },
  ];

  return (
    <div>
      <div className="flex p-5 rounded bg-white flex-col">
        <div className="flex md:flex-row flex-col relative gap-4 ">
          <div className="md:w-32 w-full h-32 rounded">
            <img
              src={restaurant.logo || "https://placehold.co/200x200"}
              alt="restaurant logo"
              className="w-full h-full rounded object-contain"
            />
          </div>

          <div className="flex flex-col ">
            <div className="text-2xl font-bold">{restaurant.name}</div>

            <div className="text-zinc-400 md:mt-0 mt-2">
              {restaurant.description}
            </div>

            <div className="text-zinc-400 flex gap-2 flex-col text-sm md:mt-auto mt-4 ">
              <div className="flex mt-5 sm:flex-row flex-wrap">
                {[
                  {
                    icon: <HiOutlineMail className="mt-1" />,
                    text: restaurant.email,
                  },
                  {
                    icon: <BsTelephone className="mt-1" />,
                    text: restaurant.phone,
                  },
                  {
                    icon: <TfiWorld className="mt-1" />,
                    text: restaurant.website,
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-1">
                    {item.icon}
                    {item.text}
                  </div>
                ))}
              </div>

              <div className="flex flex-col">
                {[
                  {
                    name: "address",
                    value: restaurant.address,
                  },
                  {
                    name: "city",
                    value: restaurant.city,
                  },
                  {
                    name: "country",
                    value: restaurant.country,
                  },
                  {
                    name: "zipCode",
                    value: restaurant.zipCode,
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-1">
                    {item.name}: {item.value}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <DialogBox
          triggerButton={
            <button
              type="button"
              className=" hover:bg-black/80 p-2 bg-black text-white rounded w-max mt-3 flex gap-2 items-center text-sm"
            >
              <RiSettings4Line />
              Edit Restaurant Info
            </button>
          }
          title={
            <p className="text-2xl font-bold">Edit Restaurant Information</p>
          }
        >
          <div>
            <form
              action={handleUpdateRestaurantInfo}
              className="rounded-xl flex flex-col"
            >
              {ResInfoList.map((item, index) => (
                <div key={index} className="flex flex-col gap-1 mt-3">
                  <label className="text-sm text-gray-600">{item.label}</label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder={item.placeholder}
                    name={item.name}
                    defaultValue={item.value || ""}
                  />
                </div>
              ))}
              <input type="hidden" name="id" value={restaurant.id} />

              <button
                type="submit"
                className="bg-black mt-4 hover:bg-black/70 text-white font-bold py-2 px-4 rounded"
              >
                Save Changes
              </button>
            </form>
          </div>
        </DialogBox>
      </div>
    </div>
  );
}
