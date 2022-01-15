import styled, { css } from "styled-components";
import { ButtonProps } from "./Button";

//#region Base Button
export const BaseButton = styled.button<ButtonProps>`
    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 0.7rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.07rem;

    // measurements related to size:
    padding: ${(props) => (props.padding ? `${props.padding}` : "12px 24px")};
    margin: ${(props) => (props.margin ? `${props.margin}` : "undefined")};
    width: ${(props) => (props.width ? `${props.width}` : "fit-content")};
    height: ${(props) => (props.height ? `${props.height}` : "fit-content")};

    outline: none;
    border: none;
    border-radius: 8px;

    // if the component is in disabled mode, every extension from the base button should behave equaly:
    cursor: ${(props) => (props.isDisabled ? "not-allowed" : "pointer")};

    transition: ${(props) =>
        props.isDisabled ? "not-allowed" : "all 0.2s ease-in-out"};

    opacity: ${(props) => (props.isDisabled ? "0.6" : "1")};

    // inline styling provided by the user:
    ${(props) =>
        props.className &&
        css`
            ${props.className};
        `}
`;
//#endregion

//#region Variant Button
export const VariantButton = styled(BaseButton)`
    background-color: ${(props) =>
        props.theme.colors[props.variant].backgroundColor};

    color: ${(props) => props.theme.colors[props.variant].color};

    border: ${(props) =>
        props.variant === "outline"
            ? `1px solid ${props.theme.colors.outline.color}`
            : "none"};

    &:hover:enabled {
        color: ${(props) =>
            props.variant === "outline"
                ? `${props.theme.colors.outline.backgroundColor}`
                : ""};
        background-color: ${(props) =>
            props.theme.colors[props.variant]._hover};
    }
`;
//#endregion

//#region Custom Button
export const CustomButton = styled(VariantButton)`
    background-color: ${(props) => props.backgroundColor};
    color: ${(props) => props.color};

    border: ${(props) =>
        props.variant === "outline" ? `1px solid ${props.color}` : `none`};

    &:hover:enabled {
        color: ${(props) =>
            props.variant === "outline" ? `${props.backgroundColor}` : ``};
        background-color: ${(props) => props._hover};
    }
`;
//#endregion
