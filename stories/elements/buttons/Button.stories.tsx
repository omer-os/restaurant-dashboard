import Button from "@components/elements/button/Button";
import { StoryFn } from "@storybook/react";

export default {
  title: "Elements/Button",
  component: Button,
};

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const Def = Template.bind({});
Def.args = {
  children: "lorem",
  startIcon: "👋",
  // onClick: () => alert("clicked"),
};
