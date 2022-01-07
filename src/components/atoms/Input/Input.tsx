import React, { ChangeEventHandler, ElementType, HTMLAttributes } from "react";

import { BaseInput, BaseInputLabel, BaseIcon } from "./Input.styled";

export type VariantType = "primary" | "dashboard";
export type SizeType = "small" | "medium" | "large";

export interface InputProps extends HTMLAttributes<HTMLInputElement> {
    /** Provide a variant look for the button for you to choose. */
    variant?: VariantType;

    /** Accepts all input types from the HTML input element. */
    type?: React.HTMLInputTypeAttribute;

    /** Define a placeholder. */
    placeholder?: string;

    /** Holds the value inserted on the input element. */
    value?: string;

    /** Set the width of the input element. */
    width?: string;

    /** Provide a svg to use with the button. */
    icon?: ElementType;

    /** Provide a id for the label. */
    name?: string;

    /** Update the value attribute on the input element. */
    onChange?: ChangeEventHandler<HTMLInputElement>;
}

const Input = ({
    variant,
    type,
    placeholder,
    value,
    onChange,
    icon,
    name,
    ...rest
}: InputProps) => {
    const withIcon = !icon ? (
        ""
    ) : (
        <>
            <BaseIcon as={icon} variant={variant} />
        </>
    );

    return (
        <BaseInputLabel htmlFor={name}>
            {withIcon}
            <BaseInput
                variant={variant}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                icon={icon}
                {...rest}
            />
        </BaseInputLabel>
    );
};

export default Input;
