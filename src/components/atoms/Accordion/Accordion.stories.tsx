import React from "react";
import { Story, Meta } from "@storybook/react";

import Accordion, { AccordionProps } from "./Accordion";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "Components/Atoms/Accordion",
    component: Accordion,
    argTypes: {},
} as Meta<AccordionProps>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<AccordionProps> = (args) => <Accordion {...args} />;

export const AccordionComponent = Template.bind({});
AccordionComponent.args = {
    items: [
        {
            title: "Where does Vegano deliver?",
            content:
                "Currently we deliver to the following locations: Metro Vancouver, Vancouver Island, and Sea-to-sky Corridor.",
        },
        {
            title: "How do I cancel my subscription?",
            content:
                "Did you know that you can also pause your account? For more information, check out the FAQ here. You can pause or cancel your subscription anytime by contacting our Member Happiness Team at hello@veganofoods.com.",
        },
        {
            title: "Why is the sky blue?",
            content: "The sky is blue becuse of light's refraction.",
        },
    ],
};
