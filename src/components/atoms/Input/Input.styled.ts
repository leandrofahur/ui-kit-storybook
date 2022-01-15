import styled, { css } from "styled-components";
import { InputProps } from "./Input";

type WrapperProps = {
    margin?: string;
};

export const Wrapper = styled.div<WrapperProps>`
    display: flex;
    width: 100%;
    align-items: center;
    margin: ${({ margin }) => (margin ? `${margin}` : undefined)};
`;

export const BaseInput = styled.input<InputProps>`
    // TODO: Remove hardcoded values and add it to the theme.ts file!
    border: ${(props) =>
        props.error
            ? `1px solid ${props.theme.colors.danger.backgroundColor}`
            : "1px solid #c4c4c4"};
    border-radius: 6px;

    padding: ${({ leftIcon }) => (leftIcon ? "8px 12px 8px 30px" : "8px 12px")};

    ${(props) =>
        props.isDisabled &&
        css`
            cursor: not-allowed;
        `}
    width: ${({ width }) => (width ? width : "100%")};

    // TODO: Remove hardcoded values and add it to the theme.ts file!
    &::placeholder {
        color: #a4a4a4;
    }

    &:focus {
        outline: none;
        border: ${(props) =>
            props.error
                ? `1px solid ${props.theme.colors.danger.backgroundColor}`
                : `1.5px solid ${props._focus}`};
    }
`;
