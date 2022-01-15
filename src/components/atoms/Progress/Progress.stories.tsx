import { Story, Meta } from "@storybook/react";
import Progress, { ProgressProps } from "./Progress";

export default {
    title: "Components/Atoms/Progress",
    component: Progress,
    argTypes: {
        color: {
            defaultValue: "#333",
        },
        size: {
            defaultValue: "25px",
        },
        thickness: {
            defaultValue: "2",
        },
        complementaryColor: {
            defaultValue: "#d4d4d4",
        },
    },
} as Meta<ProgressProps>;

const Template: Story<ProgressProps> = (args) => <Progress {...args} />;

export const Circular = Template.bind({});
Circular.args = {
    variant: "circular",
};
