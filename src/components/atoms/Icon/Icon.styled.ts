import styled, { css } from "styled-components";
import { IconProps } from "./Icon";

export const Wrapper = styled.svg<IconProps>`
    padding: ${(props) => (props.padding ? `${props.padding}` : "undefined")};
    margin: ${(props) => (props.margin ? `${props.margin}` : "undefined")};
    width: ${(props) => (props.width ? `${props.width}` : "fit-content")};
    height: ${(props) => (props.height ? `${props.height}` : "fit-content")};

    // inline styling provided by the user:
    ${(props) =>
        props.className &&
        css`
            ${props.className};
        `}
`;
