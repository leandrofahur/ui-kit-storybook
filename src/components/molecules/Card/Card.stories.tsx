import { Story, Meta } from "@storybook/react";
import Heading from "components/atoms/Heading";
import Card, { CardBody, CardMedia, CardProps } from "./Card";

import HeroCover from "../../../assets/images/hero.jpeg";
import Button from "components/atoms/Button";

export default {
    title: "Components/molecules/Card",
    component: Card,
    argTypes: {},
} as Meta<CardProps>;

const Template: Story<CardProps> = (args) => <Card {...args} />;

export const Basic = Template.bind({});
Basic.args = {
    width: "300px",
    children: (
        <>
            <CardMedia image={HeroCover} />
            <CardBody color="#333">
                <Heading as="h6">Card Title</Heading>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatum, nam voluptate recusandae minus aliquid
                    laboriosam!
                </p>
                <Button variant="primary">Button</Button>
            </CardBody>
        </>
    ),
};

export const OnlyImage = Template.bind({});
OnlyImage.args = {
    width: "300px",
    children: (
        <>
            <CardMedia image={HeroCover} />
        </>
    ),
};

export const OnlyContent = Template.bind({});
OnlyContent.args = {
    width: "300px",
    children: (
        <>
            <CardBody color="#333">
                <Heading as="h6">Card Title</Heading>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Voluptatum, nam voluptate recusandae minus aliquid
                    laboriosam!
                </p>
                <Button variant="primary">Button</Button>
            </CardBody>
        </>
    ),
};
