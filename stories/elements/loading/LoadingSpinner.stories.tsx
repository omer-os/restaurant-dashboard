import LoadingSpinner from "@components/elements/loading/LoadingSpinner";

export default {
  title: "elements/LoadingSpinner",
  component: LoadingSpinner,
};

const Template: StoryFn<typeof LoadingSpinner> = (args) => (
  <LoadingSpinner {...args} />
);
export const Default = Template.bind({});
Default.args = {};
