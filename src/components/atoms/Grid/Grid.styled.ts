import styled from "styled-components";

import { GridProps } from "./Grid";
import { Breakpoints, breakpointAt } from "../../../styles/Breakpoints";

export const Wrapper = styled.div<GridProps>`
    display: grid;
    grid-column-gap: 16px;
    grid-row-gap: 16px;
    grid-template-columns: ${(props) => `repeat(${props.numOfColumns}, 1fr)`};
    justify-items: center;

    /* grid-template-columns: repeat(4, 1fr); */

    ${breakpointAt(Breakpoints.xs)} {
        grid-template-columns: repeat(1, 1fr);
    }
    ${breakpointAt(Breakpoints.sm)} {
        grid-template-columns: repeat(2, 1fr);
    }
    ${breakpointAt(Breakpoints.md)} {
        grid-template-columns: repeat(3, 1fr);
    }
    ${breakpointAt(Breakpoints.lg)} {
        grid-template-columns: ${(props) =>
            `repeat(${props.numOfColumns}, 1fr)`};
    }
    ${breakpointAt(Breakpoints.xl)} {
        grid-template-columns: ${(props) =>
            `repeat(${props.numOfColumns}, 1fr)`};
    }
    ${breakpointAt(Breakpoints.xlg)} {
        grid-template-columns: ${(props) =>
            `repeat(${props.numOfColumns}, 1fr)`};
    }
`;
