import styled from "styled-components";
import { GridProps } from "./Grid";
import { Breakpoints, breakpointAt } from "../../../styles/Breakpoints";

export const Wrapper = styled.div<GridProps>`
    display: grid;
    grid-column-gap: 16px;
    grid-row-gap: 16px;
    /* grid-template-columns: ${(props) =>
        props.numOfColumns
            ? `repeat(${props.numOfColumns}), 1fr)`
            : `repeat(1, 1fr)`}; */

    justify-items: ${(props) =>
        props.justifyContent ? `${props.justifyContent}` : `start`};
    align-items: ${(props) =>
        props.alignItems ? `${props.alignItems}` : `flex-start`};

    margin: ${(props) => (props.margin ? `${props.margin}` : ``)};

    width: ${(props) => (props.width ? `${props.width}` : `100%`)};

    /* grid-template-columns: repeat(4, 1fr); */

    ${breakpointAt(Breakpoints.xxs)} {
        grid-template-columns: ${(props) => `repeat(${props.xxs}, 1fr)`};
    }
    ${breakpointAt(Breakpoints.xs)} {
        grid-template-columns: ${(props) => `repeat(${props.xs}, 1fr)`};
    }
    ${breakpointAt(Breakpoints.sm)} {
        grid-template-columns: ${(props) => `repeat(${props.sm}, 1fr)`};
    }
    ${breakpointAt(Breakpoints.md)} {
        grid-template-columns: ${(props) => `repeat(${props.md}, 1fr)`};
    }
    ${breakpointAt(Breakpoints.lg)} {
        grid-template-columns: ${(props) => `repeat(${props.lg}, 1fr)`};
    }
    ${breakpointAt(Breakpoints.xlg)} {
        grid-template-columns: ${(props) => `repeat(${props.xlg}, 1fr)`};
    }
    ${breakpointAt(Breakpoints.xxlg)} {
        grid-template-columns: ${(props) => `repeat(${props.xxlg}, 1fr)`};
    }

    grid-template-columns: ${(props) =>
        props.numOfColumns
            ? `repeat(${props.numOfColumns}), 1fr)`
            : `repeat(1, 1fr)`};
`;
