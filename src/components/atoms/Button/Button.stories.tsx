import { Story, Meta } from "@storybook/react";
import Button, { ButtonProps } from "./Button";
import styled from "styled-components";
import Icon from "../Icon";
import { FaAngellist } from "react-icons/fa";

export default {
    title: "Components/Atoms/Button",
    component: Button,
    argTypes: {},
} as Meta<ButtonProps>;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

//#region Variants
export const Solid = Template.bind({});
Solid.args = {
    variant: "solid",
    children: "Solid",
};

export const Outline = Template.bind({});
Outline.args = {
    variant: "outline",
    children: "Outline",
};

export const Danger = Template.bind({});
Danger.args = {
    variant: "danger",
    children: "Danger",
};

export const Warning = Template.bind({});
Warning.args = {
    variant: "warning",
    children: "Warning",
};

export const Success = Template.bind({});
Success.args = {
    variant: "success",
    children: "Success",
};

export const SolidCustom = Template.bind({});
SolidCustom.args = {
    variant: "solid",
    children: "Custom",
    color: "#fff",
    backgroundColor: "#3182ce",
    _hover: "#4299e1",
};

export const OutlineCustom = Template.bind({});
OutlineCustom.args = {
    variant: "outline",
    children: "Custom",
    color: "#3182ce",
    backgroundColor: "#fff",
    _hover: "#4299e1",
};

export const OnlyIcon = Template.bind({});
OnlyIcon.args = {
    variant: "outline",
    color: "#3182ce",
    backgroundColor: "#fff",
    _hover: "#4299e1",
    children: <Icon icon={FaAngellist} width="15px" height="15px" />,
};

export const LeftIcon = Template.bind({});
LeftIcon.args = {
    variant: "outline",
    color: "#3182ce",
    backgroundColor: "#fff",
    _hover: "#4299e1",
    leftIcon: FaAngellist,
    children: "Cheer up!",
};

export const RightIcon = Template.bind({});
RightIcon.args = {
    variant: "outline",
    color: "#3182ce",
    backgroundColor: "#fff",
    _hover: "#4299e1",
    rightIcon: FaAngellist,
    children: "Cheer up!",
};
//#endregion

//#region Geometry
export const Width = Template.bind({});
Width.args = {
    variant: "solid",
    children: "Solid",
    width: "100%",
};

export const Height = Template.bind({});
Height.args = {
    variant: "solid",
    children: "Solid",
    height: "200px",
};

export const Padding = Template.bind({});
Padding.args = {
    variant: "solid",
    children: "Solid",
    padding: "50px",
};

export const Margin = Template.bind({});
Margin.args = {
    variant: "solid",
    children: "Solid",
    margin: "20px",
};
//#endregion

//#region Actions
export const ClickEvent = Template.bind({});
ClickEvent.args = {
    variant: "solid",
    children: "Solid",
    onClick: () => {
        alert("Hello World!");
    },
};
//#endregion

//#region Summary
// container to display in a row the component
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
            <h4>Variants</h4>
            <HStack>
                <Button variant="solid" margin="10px">
                    Solid
                </Button>
                <Button variant="outline" margin="10px">
                    Outline
                </Button>
                <Button variant="danger" margin="10px">
                    Danger
                </Button>
                <Button variant="warning" margin="10px">
                    Warning
                </Button>
                <Button variant="success" margin="10px">
                    Success
                </Button>
            </HStack>
            <h4>Custom</h4>
            <HStack>
                <Button
                    variant="solid"
                    color="#fff"
                    backgroundColor="#3182ce"
                    _hover="#4299e1"
                    margin="10px"
                >
                    Solid
                </Button>
                <Button
                    variant="outline"
                    color="#3182ce"
                    backgroundColor="#fff"
                    _hover="#4299e1"
                    margin="10px"
                >
                    Outline
                </Button>
            </HStack>
            <h4>Icons</h4>
            <HStack>
                <Button
                    variant="solid"
                    color="#fff"
                    backgroundColor="#3182ce"
                    _hover="#4299e1"
                    margin="10px"
                >
                    <Icon icon={FaAngellist} />
                </Button>
                <Button
                    variant="outline"
                    color="#3182ce"
                    backgroundColor="#fff"
                    _hover="#4299e1"
                    margin="10px"
                >
                    <FaAngellist />
                </Button>
                <Button
                    variant="solid"
                    color="#fff"
                    backgroundColor="#3182ce"
                    _hover="#4299e1"
                    leftIcon={FaAngellist}
                    margin="10px"
                >
                    Cheer Up!
                </Button>
                <Button
                    variant="outline"
                    color="#3182ce"
                    backgroundColor="#fff"
                    _hover="#4299e1"
                    rightIcon={FaAngellist}
                    margin="10px"
                >
                    Cheer Up!
                </Button>
            </HStack>
            <h4>States</h4>
            <VStack>
                <h6>Disabled</h6>
                <HStack>
                    <Button variant="solid" isDisabled margin="10px">
                        Solid
                    </Button>
                    <Button variant="outline" isDisabled margin="10px">
                        Outline
                    </Button>
                </HStack>
                <h6>Loading</h6>
                ...
                {/* <HStack>
                    <Button variant="solid" isLoading>
                        Solid
                    </Button>
                    <Button variant="outline" isLoading>
                        Outline
                    </Button>
                </HStack> */}
            </VStack>
            <h4>Actions</h4>
            <VStack>
                <h6>Clickable</h6>
                <Button
                    variant="solid"
                    onClick={() => {
                        alert("Hello World!!!");
                    }}
                >
                    Solid
                </Button>
                <h6>Anchor tag</h6>
                <a
                    href="https://veganofoods.com"
                    target="_blank"
                    rel="noreferrer"
                >
                    <Button variant="solid">Solid</Button>
                </a>
            </VStack>
            <h4>Geometry</h4>
            <VStack>
                <h6>Width</h6>
                <Button variant="solid" width="100%" margin="10px">
                    Solid
                </Button>
                <Button variant="solid" width="50%" margin="10px">
                    Solid
                </Button>
                <Button variant="solid" width="200px" margin="10px">
                    Solid
                </Button>
                <Button variant="solid" width="fit-content" margin="10px">
                    Solid
                </Button>
                <h6>Height</h6>
                <Button variant="solid" height="200px" margin="10px">
                    Solid
                </Button>
                <h6>Padding</h6>
                <Button variant="solid" padding="30px" margin="10px">
                    Solid
                </Button>
                <h6>Margin</h6>
                <HStack>
                    <Button variant="solid" margin="30px">
                        Solid
                    </Button>
                    <Button variant="solid" margin="10px">
                        Solid
                    </Button>
                    <Button variant="solid">Solid</Button>
                </HStack>
            </VStack>
        </>
    );
};
//#endregion
