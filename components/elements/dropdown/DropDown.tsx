"use client";
import { Fragment, useState } from "react";
import { FcDown } from "react-icons/fc";
// @ts-ignore
import Select from "react-select";

interface DropDownProps {
  options: {
    value: string | null;
    label: string;
  }[];
  State: string | null;
  setState: any;
}

export default function DropDown(props: DropDownProps) {
  const [selectedOption, setSelectedOption] = useState(null);
  const handleChange = (selectedOption: any) => {
    setSelectedOption(selectedOption);
  };

  return (
    <div>
      <Select
        value={selectedOption}
        onChange={handleChange}
        options={props.options}
      />
    </div>
  );
}
