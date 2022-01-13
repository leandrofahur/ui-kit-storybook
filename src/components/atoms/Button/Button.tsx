import {
    ElementType,
    HTMLAttributes,
    MouseEventHandler,
    ReactNode,
} from "react";
import { BaseButton, CustomButton } from "./Button.styled";

export type VariantProps =
    | "solid"
    | "outline"
    | "danger"
    | "warning"
    | "success";

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
    /** Provides the basic variations required for the component: 'solid' | 'outline' | 'danger' | 'warning' | 'success'. */
    variant: VariantProps;

    /** Provides the ability to choose the component text color. */
    color?: string;

    /** Provides the ability to choose the component background color. */
    backgroundColor?: string;

    /** Provides the ability to choose a background color when the cursor hovers the component. */
    _hover?: string;

    /** Provide a boolean to determine if the component is enabled or not. */
    isDisabled?: boolean;

    /** Provide a boolean to determine if the component is loading. */
    isLoading?: boolean;

    /** Provide a left icon. */
    leftIcon?: ElementType;

    /** Provide a right icon. */
    rightIcon?: ElementType;

    /** Provides the height for the component: it can be in %, px, em, rem... */
    height?: string;

    /** Provides the width for the component: it can be in %, px, em, rem... */
    width?: string;

    /** Provides the margin for the component: [up right down left] [up/down left/right]. */
    margin?: string;

    /** Provides the padding for the component: [up right down left] [up/down left/right]. */
    padding?: string;

    /** If the button is of the 'link' variant.  */
    href?: string;

    /** Provides a className variable for inline styling. */
    className?: string;

    /** The component can receive a children as props. */
    onClick?: MouseEventHandler<HTMLButtonElement>;

    /** The component can receive a children as props. */
    children?: ReactNode;
}

const Button = ({
    variant,
    color,
    backgroundColor,
    _hover,
    isDisabled = false,
    isLoading = false,
    leftIcon,
    rightIcon,
    height,
    width,
    margin,
    padding,
    href,
    className,
    onClick,
    children,
    ...rest
}: ButtonProps) => {
    return (
        <CustomButton
            variant={variant}
            color={color}
            backgroundColor={backgroundColor}
            _hover={_hover}
            isDisabled={isDisabled}
            disabled={isDisabled}
            isLoading={isLoading}
            height={height}
            width={width}
            margin={margin}
            padding={padding}
            href={isDisabled ? undefined : href}
            className={className}
            onClick={onClick}
            {...rest}
        >
            {children}
        </CustomButton>
    );
};

export default Button;
