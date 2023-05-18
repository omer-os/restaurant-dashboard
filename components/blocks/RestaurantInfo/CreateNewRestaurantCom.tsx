"use client";
import { Button } from "@components/elements/button/Button";
import app, { db } from "@lib/firebase";
import { getAuth } from "firebase/auth";
import React, { useState } from "react";

export default function NewRestaurantComponent() {
  const [name, setname] = useState("");
  const [description, setdescription] = useState("");
  const [address, setaddress] = useState("");
  const [city, setcity] = useState("");
  const [country, setcountry] = useState("");
  const [zipCode, setzipCode] = useState("");
  const [website, setwebsite] = useState("");
  const [phone, setphone] = useState("");
  const [email, setemail] = useState("");
  const [logo, setlogo] = useState("");

  async function createRestaurant(event: React.FormEvent<HTMLFormElement>) {
    const auth = getAuth(app);
    event.preventDefault();
    const restaurantRef = db.collection("restaurants");
    const usersCol = db.collection("users");

    const newRestaurant = {
      name,
      description,
      address,
      city,
      country,
      zipCode,
      website,
      phone,
      email,
      createdAt: new Date(),
      logo,
      ownerId: auth.currentUser?.uid,
    };

    await restaurantRef.add(newRestaurant);

    const newRestaurantId = restaurantRef.id;
    await usersCol.doc(auth.currentUser?.uid).set({
      restaurantId: newRestaurantId,
      email: auth.currentUser?.email,
      name: auth.currentUser?.displayName,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }

  return (
    <div>
      <form
        className="flex flex-col w-full gap-3 shadow-lg p-4 rounded bg-white"
        onSubmit={createRestaurant}
      >
        <div className="text-2xl font-bold">
          <h1>Create New Restaurant</h1>
        </div>
        {[
          {
            type: "text",
            value: name,
            setValue: setname,
            placeholder: "Name",
          },
          {
            type: "text",
            value: description,
            setValue: setdescription,
            placeholder: "Description",
          },
          {
            type: "text",
            value: address,
            setValue: setaddress,
            placeholder: "Address",
          },
          {
            type: "text",
            value: city,
            setValue: setcity,
            placeholder: "City",
          },
          {
            type: "text",
            value: country,
            setValue: setcountry,
            placeholder: "Country",
          },
          {
            type: "text",
            value: zipCode,
            setValue: setzipCode,
            placeholder: "Zip Code",
          },

          {
            type: "text",
            value: website,
            setValue: setwebsite,
            placeholder: "Website",
          },
          {
            type: "text",
            value: phone,
            setValue: setphone,
            placeholder: "Phone",
          },
          {
            type: "text",
            value: email,
            setValue: setemail,
            placeholder: "Email",
          },
        ].map((input) => (
          <input
            type={input.type}
            value={input.value}
            onChange={(e) => input.setValue(e.target.value)}
            placeholder={input.placeholder}
            className="border border-gray-300 rounded-md p-2"
          />
        ))}

        <Button width={"max"} type="submit">
          Create Restaurant
        </Button>
      </form>
    </div>
  );
}
