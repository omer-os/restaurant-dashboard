import { Button } from "@components/elements/button/Button";
import { StoryFn } from "@storybook/react";
import { ImSpinner2 } from "react-icons/im";
import { FaClosedCaptioning } from "react-icons/fa";

export default {
  title: "elements/Button",
  component: Button,
};
const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  endicon: <FaClosedCaptioning />,
  iconButton: true,
};
