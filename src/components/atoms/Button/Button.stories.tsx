import { Story, Meta } from "@storybook/react";
import Button, { ButtonProps } from "./Button";

export default {
    title: "Components/atoms/Button",
    component: Button,
    argTypes: {},
} as Meta<ButtonProps>;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

//#region Variants
export const Solid = Template.bind({});
Solid.args = {
    variant: "solid",
    children: "Solid",
};

export const Outline = Template.bind({});
Outline.args = {
    variant: "outline",
    children: "Outline",
};

export const Danger = Template.bind({});
Danger.args = {
    variant: "danger",
    children: "Danger",
};

export const Warning = Template.bind({});
Warning.args = {
    variant: "warning",
    children: "Warning",
};

export const Success = Template.bind({});
Success.args = {
    variant: "success",
    children: "Success",
};

export const SolidCustom = Template.bind({});
SolidCustom.args = {
    variant: "solid",
    children: "Custom",
    color: "#fff",
    backgroundColor: "#3182ce",
    _hover: "#4299e1",
};

export const OutlineCustom = Template.bind({});
OutlineCustom.args = {
    variant: "outline",
    children: "Custom",
    color: "#3182ce",
    backgroundColor: "#fff",
    _hover: "#4299e1",
};
//#endregion

//#region Geometry
export const Width = Template.bind({});
Width.args = {
    variant: "solid",
    children: "Solid",
    width: "100%",
};

export const Height = Template.bind({});
Height.args = {
    variant: "solid",
    children: "Solid",
    height: "200px",
};

export const Padding = Template.bind({});
Padding.args = {
    variant: "solid",
    children: "Solid",
    padding: "50px",
};

export const Margin = Template.bind({});
Margin.args = {
    variant: "solid",
    children: "Solid",
    margin: "20px",
};
//#endregion

//#region Actions
export const ClickEvent = Template.bind({});
ClickEvent.args = {
    variant: "solid",
    children: "Solid",
    onClick: () => {
        alert("Hello World!");
    },
};
//#endregion
