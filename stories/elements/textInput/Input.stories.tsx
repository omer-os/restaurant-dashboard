import Input from "@components/elements/textInput/Input";
import { StoryFn } from "@storybook/react";
import { useState } from "react";
import { FaSpinner } from "react-icons/fa";

export default {
  title: "elements/TextInput",
  component: Input,
};

const Template: StoryFn<typeof Input> = (args) => {
  const [State, setState] = useState("");
  return (
    <Input
      State={State}
      setState={setState}
      placeholder="Placeholder"
      starticon={<FaSpinner />}
    />
  );
};

export const Default = Template.bind({});
Default.args = {};
