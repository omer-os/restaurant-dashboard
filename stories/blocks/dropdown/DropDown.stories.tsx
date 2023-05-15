import DropDown from "@components/elements/dropdown/DropDown";
import { StoryFn } from "@storybook/react";
import { useState } from "react";

export default {
  title: "blocks/DropDown",
  component: DropDown,
};

const Template: StoryFn<typeof DropDown> = (args) => {
  const [State, setState] = useState("Option 1");
  const options = [
    { value: "Option 1", label: "Option 1" },
    { value: "Option 2", label: "Option 2" },
    { value: "Option 3", label: "Option 3" },
  ];
  return <DropDown options={options} State={State} setState={setState} />;
};

export const Default = Template.bind({});
Default.args = {};
