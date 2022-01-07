import styled, { css } from "styled-components";
import { InputProps, VariantType } from "./Input";

type IconVariant = {
    variant: VariantType;
};

export const BaseInputLabel = styled.label`
    display: flex;
    align-items: center;
    position: relative;
`;

export const BaseInput = styled.input<InputProps>`
    // TODO: Remove hardcoded values and add it to the theme.ts file!
    background: #fff;
    border-radius: 6px;
    height: 30px;
    width: ${({ width }) => (width ? width : "100%")};

    // TODO: Remove hardcoded values and add it to the theme.ts file!
    border: 1px solid #c4c4c4;

    padding-left: ${({ icon }) => (icon ? "30px" : "15px")};

    // TODO: Remove hardcoded values and add it to the theme.ts file!
    &::placeholder {
        color: #a4a4a4;
    }

    &:focus {
    }
`;

export const BaseIcon = styled.svg<IconVariant>`
    position: absolute;
    height: fit-content;
    width: fit-content;
    object-fit: cover;
    margin: auto;
    margin-left: 7px;
    /* fill: #a4a4a4; */
    color: #a4a4a4;
`;
