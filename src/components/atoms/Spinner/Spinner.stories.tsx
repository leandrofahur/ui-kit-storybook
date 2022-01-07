import { Story, Meta } from "@storybook/react";
import { theme } from "config/theme";
import styled from "styled-components";
import Grid from "../Grid";
import Spinner, { SpinnerProps } from "./Spinner";

export default {
    title: "Components/atoms/Spinner",
    component: Spinner,
    argTypes: {
        color: {
            defaultValue: "#333",
        },
        size: {
            defaultValue: 25,
        },
        thickness: {
            defaultValue: 5,
        },
        complementaryColor: {
            defaultValue: "#d4d4d4",
        },
    },
} as Meta<SpinnerProps>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: Story<SpinnerProps> = (args) => <Spinner {...args} />;

export const Loader = Template.bind({});
Loader.args = {};

// ------------------------------------------------------------------
// DISPLAY ALL ON A GRID:
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

export const All = () => {
    return (
        <>
            <h4>Sizes</h4>
            <Container>
                <Spinner
                    complementaryColor={`${theme.colors.primary.color}`}
                    color={`${theme.colors.primary.backgroundColor}`}
                    size={20}
                    thickness={2}
                />
                <Spinner
                    complementaryColor={`${theme.colors.primary.color}`}
                    color={`${theme.colors.primary.backgroundColor}`}
                    size={40}
                    thickness={4}
                />
                <Spinner
                    complementaryColor={`${theme.colors.primary.color}`}
                    color={`${theme.colors.primary.backgroundColor}`}
                    size={50}
                    thickness={5}
                />
            </Container>
            <h4>Thickness</h4>
            <Container>
                <Spinner
                    complementaryColor={`${theme.colors.primary.color}`}
                    color={`${theme.colors.primary.backgroundColor}`}
                    size={30}
                    thickness={3}
                />
                <Spinner
                    complementaryColor={`${theme.colors.primary.color}`}
                    color={`${theme.colors.primary.backgroundColor}`}
                    size={30}
                    thickness={5}
                />
                <Spinner
                    complementaryColor={`${theme.colors.primary.color}`}
                    color={`${theme.colors.primary.backgroundColor}`}
                    size={30}
                    thickness={7}
                />
            </Container>
            <h4>Colours</h4>
            <Container>
                <Spinner
                    complementaryColor={"#e6e6e6"}
                    color={"#333"}
                    size={25}
                    thickness={7}
                />
                <Spinner
                    complementaryColor={"#e6e6e6"}
                    color={"red"}
                    size={25}
                    thickness={7}
                />
                <Spinner
                    complementaryColor={"#e6e6e6"}
                    color={"green"}
                    size={25}
                    thickness={7}
                />
            </Container>
        </>
    );
};
