import { Story, Meta } from "@storybook/react";
import Card, { CardProps } from "./Card";

export default {
    title: "Components/molecules/Card",
    component: Card,
    argTypes: {},
} as Meta<CardProps>;

const Template: Story<CardProps> = (args) => <Card {...args} />;

export const Basic = Template.bind({});
Basic.args = {};
