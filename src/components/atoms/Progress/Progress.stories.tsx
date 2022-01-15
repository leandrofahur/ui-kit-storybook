import { Story, Meta } from "@storybook/react";
import Progress, { ProgressProps } from "./Progress";

export default {
    title: "Components/Atoms/Progress",
    component: Progress,
    argTypes: {},
} as Meta<ProgressProps>;

const Template: Story<ProgressProps> = (args) => <Progress {...args} />;

export const Circular = Template.bind({});
Circular.args = {
    radius: "30px",
    color: "#3182ce",
};
