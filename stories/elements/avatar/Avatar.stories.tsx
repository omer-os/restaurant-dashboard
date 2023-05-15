import Avatar from "@components/elements/avatar/Avatar";
import { StoryFn } from "@storybook/react";

export default {
  title: "Elements/Avatar",
  component: Avatar,
};

const Template: StoryFn<typeof Avatar> = (args) => <Avatar {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: "https://picsum.photos/200",
  alt: "avatar",
};
