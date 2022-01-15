import { ChangeEventHandler, ElementType, HTMLAttributes } from "react";
import { BaseInput, Wrapper } from "./Input.styled";
import Icon from "../Icon";

export interface InputProps extends HTMLAttributes<HTMLInputElement> {
    /** Accepts all input types from the HTML input element. */
    type: string;

    /** Define a placeholder. */
    placeholder?: string;

    /** Provide a name for the label. */
    name?: string;

    /** Provide an id for the label. */
    id?: string;

    /** Provide a boolean to determine if the component is enabled or not. */
    isDisabled?: boolean;

    /** Provides the ability to choose a border color when component is selected. */
    _focus?: string;

    /** Holds the value inserted on the input element. */
    value?: string | number | undefined;

    /** Provides the height for the component: it can be in %, px, em, rem... */
    height?: string;

    /** Provides the width for the component: it can be in %, px, em, rem... */
    width?: string;

    /** Provides the margin for the component: [up right down left] [up/down left/right]. */
    margin?: string;

    /** Provide a svg to use with the component. */
    leftIcon?: ElementType;

    /** Provide an error boolean to track states for the component. */
    error?: boolean;

    /** Provides a className variable for inline styling. */
    className?: string;

    /** Update the value attribute on the component. */
    onChange?: ChangeEventHandler<HTMLInputElement>;
}

const Input = ({
    type,
    placeholder,
    name,
    id,
    isDisabled = false,
    value,
    width,
    error,
    _focus,
    height,
    margin,
    leftIcon,
    className,
    onChange,
    ...rest
}: InputProps) => {
    return (
        <Wrapper margin={margin}>
            {leftIcon && (
                <Icon
                    icon={leftIcon}
                    margin="0 -25px 0 10px"
                    className={"fill: #a4a4a4; z-index:10"}
                />
            )}
            <BaseInput
                type={type}
                placeholder={placeholder}
                name={name}
                id={id}
                isDisabled={isDisabled}
                disabled={isDisabled}
                value={value}
                width={width}
                error={error}
                height={height}
                _focus={_focus}
                leftIcon={leftIcon}
                className={className}
                onChange={onChange}
                {...rest}
            />
        </Wrapper>
    );
};

export default Input;
