import React from "react";
import { useState } from "react";
import { EditableText } from "../../elements/editable/EditableText";
import { ListItem } from "../../elements/list/ListItem";
import Avatar from "@components/elements/avatar/Avatar";
import { EditableImage } from "@components/elements/editable/EditableImage";

export default function RestaurantInfoCard() {
  const [Edit, setEdit] = useState(false);

  const [Name, setName] = useState("some name");
  const [Address, setAddress] = useState("some address");
  const [Phone, setPhone] = useState("some phone");
  const [Email, setEmail] = useState("some email");
  const [Image, setImage] = useState(
    "https://avatars.githubusercontent.com/u/5855893?s=40&v=4"
  );

  return (
    <div>
      <div className="bg-white p-4 rounded shadow-lg flex flex-col md:max-w-md ">
        <h2 className="text-2xl font-bold mb-4 text-center">
          Restaurant Profile
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
            State={item.value}
            setState={item.setState}
            name={item.name}
          />
        ))}
      </div>
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
