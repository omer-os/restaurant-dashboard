"use client";
import { useEffect, useState } from "react";
import { auth } from "@lib/firebase";
import {
  getRestaurant,
  addRestaurant,
  updateRestaurant,
} from "@lib/firebaseFunctions/getResturant";
import { Button } from "@components/elements/button/Button";
import { EditableText } from "../../elements/editable/EditableText";
import { ListItem } from "../../elements/list/ListItem";
import Avatar from "@components/elements/avatar/Avatar";
import { EditableImage } from "@components/elements/editable/EditableImage";

export default function RestaurantInfoCard() {
  const [restaurant, setRestaurant] = useState(null);
  const [Name, setName] = useState("");
  const [Address, setAddress] = useState("");
  const [Phone, setPhone] = useState("");
  const [Email, setEmail] = useState("");
  const [Image, setImage] = useState("");

  const user = auth.currentUser;

  return (
    <div className="bg-white p-4 rounded shadow-lg flex flex-col md:max-w-md ">
      <h2 className="text-2xl font-bold mb-4 text-center">
        {restaurant ? "Update Restaurant Profile" : "Create Restaurant Profile"}
      </h2>

      <div className="w-full mb-3 flex items-center justify-center">
        <EditableImage
          ImageComponent={<Avatar alt="inwero" size="xl" src={Image} />}
          State={Image}
          setState={setImage}
        />
      </div>
      {[
        {
          name: "Name",
          value: Name,
          setState: setName,
        },
        {
          name: "Address",
          value: Address,
          setState: setAddress,
        },
        {
          name: "Phone",
          value: Phone,
          setState: setPhone,
        },
        {
          name: "Email",
          value: Email,
          setState: setEmail,
        },
      ].map((item) => (
        <EditableListItem
          key={item.name}
          State={item.value}
          setState={item.setState}
          name={item.name}
        />
      ))}
      <Button
        // onClick={() => {
        //   updateRestaurant(user.uid, {
        //     Name,
        //     Address,
        //     Phone,
        //     Email,
        //     Image,
        //   });
        // }}
        className="mt-4"
      >
        {restaurant ? "Update Restaurant Info" : "Create Restaurant Info"}
      </Button>
    </div>
  );
}

const EditableListItem = ({
  State,
  setState,
  name,
}: {
  State: string;
  setState: any;
  name: string;
}) => {
  const [Clicked, setClicked] = useState(false);

  return (
    <ListItem
      pressable={false}
      onClick={() => setClicked(true)}
      onBlur={() => setClicked(false)}
      className="mb-2"
      intent="ghost"
    >
      <strong>{name}:</strong>
      <EditableText
        State={State}
        setState={setState}
        edit={Clicked}
        onBlur={() => setClicked(false)}
      />
    </ListItem>
  );
};
