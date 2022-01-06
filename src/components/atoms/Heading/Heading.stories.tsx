import React from "react";
import { Story, Meta } from "@storybook/react";
import Heading, { HeadingProps } from "./Heading";
import styled from "styled-components";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "Components/atoms/Heading",
    component: Heading,
    argTypes: {},
} as Meta<HeadingProps>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<HeadingProps> = (args) => <Heading {...args} />;

const Container = styled.div`
    display: flex;
    flex-direction: column;

    & > * {
        padding-top: 10px;
    }
`;

export const All = () => {
    return (
        <Container>
            <h5>Typography</h5>
            <Heading as="h6">Heading h6</Heading>
            <Heading as="h5">Heading h5</Heading>
            <Heading as="h4">Heading h4</Heading>
            <Heading as="h3">Heading h3</Heading>
            <Heading as="h2">Heading h2</Heading>
            <Heading as="h1">Heading h1</Heading>
        </Container>
    );
};
