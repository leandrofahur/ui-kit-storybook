import styled, { css } from "styled-components";
import { Breakpoints, breakpointAt } from "../../styles/Breakpoints";

type WrapperProps = {
    image?: string;
};

export const Container = styled.div`
    width: 100%;
    padding: 0px 8px;

    ${breakpointAt(Breakpoints.sm)} {
        padding: 0px 16px;
    }

    ${breakpointAt(Breakpoints.lg)} {
        padding: 0;
        width: 1140px;
        margin: 0 auto;
    }
`;

export const Wrapper = styled.div<WrapperProps>`
    ${(props) =>
        css`
            background: url(${props.image}), rgba(0, 0, 0, 0.4);
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            background-blend-mode: overlay;
        `}
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    padding: 30px;
`;

export const Content = styled.div`
    // TODO: Remove fonts type and weight hardcoded:
    ul {
        list-style: none;
        padding-left: 0;
    }

    p,
    li {
        font-size: 1.2rem;
        font-weight: 300;
        line-height: 1.5rem;
    }
    // TODO: Remove hardcoded color:
    color: white;
`;
