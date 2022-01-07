import { Story, Meta } from "@storybook/react";
import Grid, { GridProps } from "./Grid";
import styled from "styled-components";

export default {
    title: "Components/Atoms/Grid",
    component: Grid,
    argTypes: {},
} as Meta<GridProps>;

const Template: Story<GridProps> = (args) => <Grid {...args} />;

// BOX component to test the grid:
const Box = styled.div`
    width: 200px;
    height: 200px;
    background-color: #ff3d00;
`;

export const WithDefaultNumberOfColumns = Template.bind({});
WithDefaultNumberOfColumns.args = {
    children: (
        <>
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
        </>
    ),
};

export const WithFourColumns = Template.bind({});
WithFourColumns.args = {
    numOfColumns: 4,
    children: (
        <>
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
            <Box />
        </>
    ),
};
