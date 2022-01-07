import React from "react";
import { Story, Meta } from "@storybook/react";

import Input, { InputProps } from "./Input";
import { FiLock, FiClock } from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";

import styled from "styled-components";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "Components/Atoms/Input",
    component: Input,
    argTypes: {
        variant: {
            defaultValue: "primary",
        },
        placeholder: {
            defaultValue: "placeholder",
        },
    },
} as Meta<InputProps>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<InputProps> = (args) => <Input {...args} />;

export const TextInput = Template.bind({});
TextInput.args = {};

export const WithIcon = Template.bind({});
WithIcon.args = {
    icon: FaRegUserCircle,
};

export const CustomWidth = Template.bind({});
CustomWidth.args = {
    icon: FaRegUserCircle,
    width: "150px",
};

export const PasswordInput = Template.bind({});
PasswordInput.args = {
    type: "password",
    placeholder: "password",
    width: "150px",
    icon: FiLock,
};

export const NumberInput = Template.bind({});
NumberInput.args = {
    type: "number",
    width: "50px",
    placeholder: "",
};

// -----------------------------------------------------------------------------
// DISPLAY ALL IN A GRID:
const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    padding: 20px 0;

    & > * {
        margin-right: 15px;
    }
`;

const Margin = styled.div`
    margin-top: 10px;
`;

export const AllInputs = () => {
    return (
        <>
            <h4>Variants</h4>
            <Container>
                <Input variant="primary" placeholder="Primary Variant" />
                <Input variant="dashboard" placeholder="Dashboard Variant" />
            </Container>
            <h4>Types</h4>
            <Container>
                <Input type="text" placeholder="text" />
                <Input type="password" placeholder="password" />
                <Input type="number" placeholder="0" width="50px" />
            </Container>
            <h4>With Icons</h4>
            <Container>
                <Input
                    icon={FaRegUserCircle}
                    type="text"
                    placeholder="username"
                />
                <Input icon={FiLock} type="password" placeholder="password" />
            </Container>
            <h4>Width's</h4>
            <Container></Container>
            <Input
                icon={FaRegUserCircle}
                type="text"
                placeholder="100% of the width"
                width="100%"
            />
            <Margin />
            <Input
                icon={FiLock}
                type="password"
                placeholder="50% of the width"
                width="50%"
            />
            <Margin />
            <Input
                icon={FiClock}
                type="password"
                placeholder="100px"
                width="100px"
            />
        </>
    );
};
