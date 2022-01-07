import React from "react";
import { Story, Meta } from "@storybook/react";

import Dropdown, { DropdownProps } from "./Dropdown";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "Components/Molecules/Dropdown",
    component: Dropdown,
    argTypes: {},
} as Meta<DropdownProps>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<DropdownProps> = (args) => <Dropdown {...args} />;

export const DropdownComponent = Template.bind({});
DropdownComponent.args = {
    options: [
        {
            label: "Select a route",
            value: "/",
        },
        {
            label: "Blog",
            value: "/blog",
        },
        {
            label: "Media",
            value: "/media",
        },
        {
            label: "Contact Us",
            value: "/contactus",
        },
    ],
};
