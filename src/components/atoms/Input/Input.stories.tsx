import { Story, Meta } from "@storybook/react";
import Input, { InputProps } from "./Input";
import styled from "styled-components";

import { FaRegUserCircle, FaLock } from "react-icons/fa";
import { useState } from "react";

export default {
    title: "Components/Atoms/Input",
    component: Input,
    argTypes: {
        onChange: {},
    },
} as Meta<InputProps>;

const Template: Story<InputProps> = (args) => <Input {...args} />;

//#region Basic Template
export const Basic = Template.bind({});
Basic.args = {};

export const Placeholder = Template.bind({});
Placeholder.args = {
    placeholder: "Username",
};

export const Width = Template.bind({});
Width.args = {
    placeholder: "Username",
    width: "50%",
};

export const LeftIcon = Template.bind({});
LeftIcon.args = {
    placeholder: "Username",
    width: "fit-content",
    leftIcon: FaRegUserCircle,
};

export const OnChange = () => {
    const [username, setUsername] = useState<string>("");
    console.log(username);
    return (
        <Input
            type="text"
            leftIcon={FaRegUserCircle}
            placeholder="Username"
            value={username}
            width="fit-content"
            onChange={(e) => setUsername(e.target.value)}
        />
    );
};
//#endregion

//#region States
export const Disabled = Template.bind({});
Disabled.args = {
    isDisabled: true,
};

export const Error = Template.bind({});
Error.args = {
    error: true,
};
//#endregion

//#region Summary
const HStack = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    width: 100%;
    margin: 20px 0;
`;

const VStack = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    margin: 20px 0;

    & > * {
        margin: 10px 0;
    }
`;

export const Summary = () => {
    return (
        <>
            <h4>Width</h4>
            <VStack>
                {["100%", "75%", "50%", "25%", "50px"].map((width) => (
                    <Input type="text" width={width} />
                ))}
            </VStack>
            <h4>Icon, Placeholder, and Type</h4>
            <VStack>
                {[
                    {
                        icon: FaRegUserCircle,
                        type: "text",
                        placeholder: "Username",
                    },
                    {
                        icon: FaLock,
                        type: "password",
                        placeholder: "Password",
                    },
                    {
                        type: "number",
                    },
                ].map((item) => (
                    <Input
                        type={item.type}
                        placeholder={item.placeholder ? item.placeholder : ""}
                        leftIcon={item.icon ? item.icon : undefined}
                        width={item.type === "number" ? "70px" : "fit-content"}
                    />
                ))}
            </VStack>
            <h4>Disabled</h4>
            <HStack>
                {[
                    {
                        icon: FaRegUserCircle,
                        type: "text",
                        placeholder: "Username",
                    },
                    {
                        icon: FaLock,
                        type: "password",
                        placeholder: "Password",
                    },
                    {
                        type: "number",
                    },
                ].map((item) => (
                    <Input
                        type={item.type}
                        placeholder={item.placeholder ? item.placeholder : ""}
                        leftIcon={item.icon ? item.icon : undefined}
                        isDisabled
                        margin="0 10px 0 0"
                    />
                ))}
            </HStack>
            <h4>Error</h4>
            <HStack>
                {[
                    {
                        icon: FaRegUserCircle,
                        type: "text",
                        placeholder: "Username",
                    },
                    {
                        icon: FaLock,
                        type: "password",
                        placeholder: "Password",
                    },
                    {
                        type: "number",
                    },
                ].map((item) => (
                    <Input
                        type={item.type}
                        placeholder={item.placeholder ? item.placeholder : ""}
                        leftIcon={item.icon ? item.icon : undefined}
                        error
                        margin="0 10px 0 0"
                    />
                ))}
            </HStack>
        </>
    );
};
//#endregion
