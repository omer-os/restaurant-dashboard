import TextInput from "@components/elements/input/TextInput";
import { StoryFn } from "@storybook/react";
import { useState } from "react";
import { FiSearch } from "react-icons/fi";

export default {
  title: "Elements/Input/TextInput",
  component: TextInput,
};

const Template: StoryFn<typeof TextInput> = () => {
  const [State, setState] = useState("");
  return (
    <div className="flex flex-col space-y-4">
      <TextInput
        startIcon={<FiSearch />}
        State={State}
        setState={setState}
        placeholder="Enter your name"
      />
    </div>
  );
};
export const Default = Template.bind({});
Default.args = {};
