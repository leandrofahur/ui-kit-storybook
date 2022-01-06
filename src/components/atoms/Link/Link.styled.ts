import styled from "styled-components";
import { LinkProps } from "./Link";

export const Wrapper = styled.a<LinkProps>`
    display: inline-block;
    text-decoration: none;

    cursor: ${({ isDisabled }) => (isDisabled ? "not-allowed" : "pointer")};
    color: ${({ color }) => color};
    opacity: ${({ isDisabled }) => (isDisabled ? 0.4 : 1)};

    &:active,
    &:visited {
        color: ${({ color }) => color};
    }

    &:hover {
        color: ${({ _hover }) => _hover};
    }
`;
