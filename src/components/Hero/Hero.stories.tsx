import React from "react";
import { Story, Meta } from "@storybook/react";
import Hero, { HeroProps } from "./Hero";

import HeroCover from "../../assets/images/hero.jpeg";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "Layouts/Hero",
    component: Hero,
    argTypes: {},
} as Meta<HeroProps>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<HeroProps> = (args) => <Hero {...args} />;

export const Basic = () => {
    return (
        <Hero image={HeroCover}>
            <h1>Hero</h1>
        </Hero>
    );
};

export const WithList = () => {
    return (
        <Hero image={HeroCover}>
            <h1>Hero</h1>
            <ul>
                <li>Item 01</li>
                <li>Item 02</li>
                <li>Item 03</li>
            </ul>
        </Hero>
    );
};
