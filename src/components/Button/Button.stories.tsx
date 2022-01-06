import { Story, Meta } from "@storybook/react";
import Button, { ButtonProps } from "./Button";

import { GiFruitBowl } from "react-icons/gi";
import { GoCloudDownload } from "react-icons/go";

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

export const Disabled = Template.bind({});
Disabled.args = {
    "aria-label": "Disabled",
    variant: "primary",
    children: "Button",
    isDisabled: true,
};

export const Clickable = Template.bind({});
Clickable.args = {
    "aria-label": "Clickable",
    children: "Button",
    onClick: () => {
        alert("Can I tell you a vegan joke? I promise it won’t be cheesy.");
    },
};

export const Anchor = Template.bind({});
Anchor.args = {
    "aria-label": "Anchor",
    children: "Button",
    href: "https://veganofoods.com",
};

export const OnlyIcon = Template.bind({});
OnlyIcon.args = {
    "aria-label": "Anchor",
    href: "https://veganofoods.com",
    children: <GiFruitBowl />,
};

export const LeftIcon = Template.bind({});
LeftIcon.args = {
    "aria-label": "Anchor",
    leftIcon: GoCloudDownload,
    children: "Download",
};

export const RightIcon = Template.bind({});
RightIcon.args = {
    "aria-label": "Anchor",
    rightIcon: GoCloudDownload,
    children: "Download",
};
