import React from "react";
import { Story, Meta } from "@storybook/react";
import Title, { TitleProps } from "./Title";
import styled from "styled-components";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "Components/Title",
    component: Title,
    argTypes: {},
} as Meta<TitleProps>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<TitleProps> = (args) => <Title {...args} />;

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
            <Title as="h6">Title</Title>
            <Title as="h5">Title</Title>
            <Title as="h4">Title</Title>
            <Title as="h3">Title</Title>
            <Title as="h2">Title</Title>
            <Title as="h1">Title</Title>
        </Container>
    );
};
