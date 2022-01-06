import { Story, Meta } from "@storybook/react";
import Button, { ButtonProps } from "./Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "Components/Button",
    component: Button,
    argTypes: {},
} as Meta<ButtonProps>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    "aria-label": "Primary",
    variant: "primary",
    children: "Button",
};

export const Secondary = Template.bind({});
Secondary.args = {
    "aria-label": "Secondary",
    variant: "secondary",
    children: "Button",
};

export const Danger = Template.bind({});
Danger.args = {
    "aria-label": "Danger",
    variant: "danger",
    children: "Button",
};

export const Success = Template.bind({});
Success.args = {
    "aria-label": "Success",
    variant: "success",
    children: "Button",
};

export const CustomPrimary = Template.bind({});
CustomPrimary.args = {
    "aria-label": "Custom Primary",
    variant: "primary",
    children: "Button",
    color: "#fff",
    backgroundColor: "#3182ce",
    _hover: "#4299e1",
};

export const CustomSecondary = Template.bind({});
CustomSecondary.args = {
    "aria-label": "Custom Secondary",
    variant: "secondary",
    children: "Button",
    backgroundColor: "#fff",
    color: "#3182ce",
    _hover: "#4299e1",
};
