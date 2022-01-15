import { Story, Meta } from "@storybook/react";
import styled from "styled-components";
import Progress, { ProgressProps } from "./Progress";

export default {
    title: "Components/Atoms/Progress",
    component: Progress,
    argTypes: {},
} as Meta<ProgressProps>;

const Template: Story<ProgressProps> = (args) => <Progress {...args} />;

//#region Circular Progress
export const Circular = Template.bind({});
Circular.args = {
    radius: "30px",
    color: "#3182ce",
};

export const Radius = Template.bind({});
Radius.args = {
    radius: "20px",
    color: "#3182ce",
};

export const Colour = Template.bind({});
Colour.args = {
    radius: "20px",
    color: "red",
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

export const AllCircular = () => {
    return (
        <>
            <h4>Circular</h4>
            <HStack>
                <Progress variant="circular" color="#333" radius={"30px"} />
            </HStack>
            <h4>Sizes</h4>
            <HStack>
                {["10px", "20px", "30px", "40px", "50px"].map((radius) => (
                    <Progress
                        variant="circular"
                        color="#333"
                        radius={radius}
                        margin="0 10px 0 0"
                    />
                ))}
            </HStack>
            <h4>Colour</h4>
            <HStack>
                {["#333", "red", "green", "blue"].map((color) => (
                    <Progress
                        variant="circular"
                        color={color}
                        radius={"30px"}
                        margin="0 10px 0 0"
                    />
                ))}
            </HStack>
        </>
    );
};
//#endregion
