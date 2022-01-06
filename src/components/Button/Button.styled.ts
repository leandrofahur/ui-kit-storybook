import styled from "styled-components";
import { ButtonProps } from "./Button";

export const BaseButton = styled.button<ButtonProps>`
    font-size: 0.8rem;
    font-weight: 600;
    text-transform: uppercase;

    padding: 12px 24px;

    outline: none;
    border: none;
    border-radius: 8px;

    cursor: pointer;

    transition: all 0.2s ease-in-out;
`;

export const VariantButton = styled(BaseButton)`
    background-color: ${(props) =>
        props.theme.colors[props.variant].backgroundColor};

    color: ${(props) => props.theme.colors[props.variant].color};

    outline: ${(props) =>
        props.variant === "secondary"
            ? `1px solid ${props.theme.colors.secondary.color}`
            : "none"};

    &:hover {
        color: ${(props) =>
            props.variant === "secondary"
                ? `${props.theme.colors.secondary.backgroundColor}`
                : ""};
        background-color: ${(props) =>
            props.theme.colors[props.variant]._hover};
    }
`;

export const CustomButton = styled(VariantButton)`
    background-color: ${(props) => props.backgroundColor};
    color: ${(props) => props.color};

    outline: ${(props) =>
        props.variant === "secondary" ? `1px solid ${props.color}` : "none"};

    &:hover {
        color: ${(props) =>
            props.variant === "secondary" ? `${props.backgroundColor}` : ""};
        background-color: ${(props) => props._hover};
    }
`;
