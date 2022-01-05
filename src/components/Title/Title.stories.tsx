import React from "react";
import { Story, Meta } from "@storybook/react";
import Title, { TitleProps } from "./Title";

import TitleCover from "../../assets/images/Title.jpeg";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "Components/Title",
    component: Title,
    argTypes: {},
} as Meta<TitleProps>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<TitleProps> = (args) => <Title {...args} />;

export const Basic = () => {
    return <Title></Title>;
};
