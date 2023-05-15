import Switcher from "@components/elements/switcher/Switcher";
import { StoryFn } from "@storybook/react";
import { useState } from "react";
import { IoIosClose } from "react-icons/io"; // Import the close icon
import { IoIosOpen } from "react-icons/io"; // Import the open icon

export default {
  title: "elements/Switcher",
  component: Switcher,
};

const Template: StoryFn<typeof Switcher> = (args) => {
  const [State, setState] = useState(true);

  return (
    <Switcher
      State={State}
      setState={setState}
      openIcon={<IoIosOpen />}
      closeIcon={<IoIosClose />}
    />
  );
};

export const Default = Template.bind({});
Default.args = {};
