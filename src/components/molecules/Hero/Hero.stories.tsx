import React from "react";
import { Story, Meta } from "@storybook/react";
import Hero, { HeroProps } from "./Hero";

import HeroCover from "../../../assets/images/hero.jpeg";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "Components/molecules/Hero",
    component: Hero,
    argTypes: {},
} as Meta<HeroProps>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<HeroProps> = (args) => <Hero {...args} />;

export const Basic = Template.bind({});
Basic.args = {
    image: HeroCover,
    children: (
        <>
            <h1>Title</h1>
        </>
    ),
};

export const WithList = Template.bind({});
WithList.args = {
    image: HeroCover,
    children: (
        <>
            <h1>Title</h1>
            <ul>
                <li>Item 01</li>
                <li>Item 02</li>
                <li>Item 03</li>
            </ul>
        </>
    ),
};

export const OnlyImage = Template.bind({});
OnlyImage.args = {
    image: HeroCover,
};
