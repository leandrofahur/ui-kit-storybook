import {
    ElementType,
    HTMLAttributes,
    MouseEventHandler,
    ReactNode,
} from "react";
import { CustomButton, Icon } from "./Button.styled";

export type VariantProps = "primary" | "secondary" | "danger" | "success";

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    /** Provides the button variants defined */
    variant: VariantProps;

    /** Provides the ability to choose a text color. */
    color?: string;

    /** Provides the ability to choose a background color. */
    backgroundColor?: string;

    /** Provides the ability to choose a background color when the cursor hovers the button. */
    _hover?: string;

    /** Provide a boolean to determine if the button is enabled or not. */
    isDisabled?: boolean;

    /** Provide a left icon. */
    leftIcon?: ElementType;

    /** Provide a right icon. */
    rightIcon?: ElementType;

    /** Provide a href if the button behaves like an anchor tag. */
    href?: string;

    /** Props for the inner text of the button */
    children?: ReactNode;

    /** Provide a onCLick event handler for the user. */
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Button = ({
    variant = "primary",
    color,
    backgroundColor,
    _hover,
    isDisabled = false,
    leftIcon,
    rightIcon,
    href,
    children,
    onClick,
}: ButtonProps) => {
    return (
        <CustomButton
            as={href ? "a" : "button"}
            variant={variant}
            color={color}
            backgroundColor={backgroundColor}
            _hover={_hover}
            isDisabled={isDisabled}
            disabled={isDisabled}
            onClick={onClick}
            href={href}
            target="_blank"
        >
            {leftIcon && <Icon as={leftIcon} isLeft />}
            {children}
            {rightIcon && <Icon as={rightIcon} isRight />}
        </CustomButton>
    );
};

export default Button;
