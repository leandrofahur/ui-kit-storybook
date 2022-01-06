import styled from "styled-components";
import { ButtonProps } from "./Button";

type IconProps = {
    isLeft: boolean;
    isRight: boolean;
};

// The basic behaviour inherited by all buttons:
export const BaseButton = styled.button<ButtonProps>`
    display: flex;
    align-items: center;
    width: fit-content;

    font-size: 0.8rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.1rem;

    padding: 12px 24px;

    outline: none;
    border: none;
    border-radius: 8px;

    cursor: ${(props) => (props.isDisabled ? "not-allowed" : "pointer")};

    transition: ${(props) =>
        props.isDisabled ? "not-allowed" : "all 0.2s ease-in-out"};

    opacity: ${(props) => (props.isDisabled ? "0.6" : "1")};

    &:hover {
        transform: ${(props) =>
            props.isDisabled ? "scale(1)" : "scale(1.05)"};
    }
`;

// A variant type is defined as an extension of the base button:
export const VariantButton = styled(BaseButton)`
    background-color: ${(props) =>
        props.theme.colors[props.variant].backgroundColor};

    color: ${(props) => props.theme.colors[props.variant].color};

    border: ${(props) =>
        props.variant === "secondary"
            ? `1px solid ${props.theme.colors.secondary.color}`
            : "none"};

    &:hover:enabled {
        color: ${(props) =>
            props.variant === "secondary"
                ? `${props.theme.colors.secondary.backgroundColor}`
                : ""};
        background-color: ${(props) =>
            props.theme.colors[props.variant]._hover};
    }
`;

// A custom button should be able to behave like the primary and secondary variant:
export const CustomButton = styled(VariantButton)`
    background-color: ${(props) => props.backgroundColor};
    color: ${(props) => props.color};

    border: ${(props) =>
        props.variant === "secondary" ? `1px solid ${props.color}` : `none`};

    &:hover:enabled {
        color: ${(props) =>
            props.variant === "secondary" ? `${props.backgroundColor}` : ""};
        background-color: ${(props) => props._hover};
    }
`;

// A icon button have all the previous attributes and can add an icon on te left and right side of a button:
export const Icon = styled.svg<IconProps>`
    /* display: inline-block; */
    width: 21px;
    height: 21px;

    margin-right: ${(props) => (props.isLeft ? "7px" : "0")};
    margin-left: ${(props) => (props.isRight ? "7px" : "0")};
`;
