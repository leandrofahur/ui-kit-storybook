import { Story, Meta } from "@storybook/react";
import styled from "styled-components";
import Grid, { GridProps } from "./Grid";

export default {
    title: "Components/Atoms/Grid",
    component: Grid,
    argTypes: {},
} as Meta<GridProps>;

const Template: Story<GridProps> = (args) => <Grid {...args} />;

//#region Summary
// a box to help visualized the grid component
const Box = styled.div`
    width: 120px;
    height: 120px;
    background-color: #3182ce;
`;

const Margin = styled.div`
    height: 20px;
    width: 100%;
    margin-top: 10px;
`;

export const Summary = () => {
    return (
        <>
            <h4>Default Behaviour</h4>
            <Grid margin="10px 0">
                <Box />
                <Box />
            </Grid>
            <h4>Justification and Alignment</h4>
            <h6>Justification</h6>
            <Grid margin="10px 0">
                <Grid justifyContent="start">
                    <h6>Box</h6>
                    <Box />
                </Grid>
                <Grid justifyContent="center">
                    <h6>Box</h6>
                    <Box />
                </Grid>
                <Grid justifyContent="end">
                    <h6>Box</h6>
                    <Box />
                </Grid>
            </Grid>
            <h6>Alignment</h6>
            <Grid margin="10px 0" numOfColumns={2}>
                <Grid numOfColumns={2}>
                    <h6>Box</h6>
                    <Box />
                </Grid>
                <Grid numOfColumns={2}>
                    <h6>Box</h6>
                    <Box />
                </Grid>
                <Grid numOfColumns={2}>
                    <h6>Box</h6>
                    <Box />
                </Grid>
            </Grid>
            <h4>Responsiveness</h4>
            <Grid
                xxs={1}
                xs={1}
                sm={3}
                md={5}
                lg={8}
                xlg={10}
                xxlg={12}
                margin="10px 0"
            >
                <Box />
                <Box />
                <Box />
                <Box />
                <Box />
                <Box />
                <Box />
                <Box />
                <Box />
                <Box />
                <Box />
                <Box />
                <Box />
                <Box />
                <Box />
                <Box />
                <Box />
                <Box />
                <Box />
                <Box />
                <Box />
                <Box />
                <Box />
                <Box />
                <Box />
                <Box />
                <Box />
                <Box />
                <Box />
                <Box />
            </Grid>
        </>
    );
};
//#endregion
