import { Story, Meta } from "@storybook/react";
import Button, { ButtonProps } from "./Button";

export default {
    title: "Components/atoms/Button",
    component: Button,
    argTypes: {},
} as Meta<ButtonProps>;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Basic = Template.bind({});
Basic.args = {};
