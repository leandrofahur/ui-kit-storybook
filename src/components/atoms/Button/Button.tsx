import {
    ElementType,
    HTMLAttributes,
    MouseEventHandler,
    ReactNode,
} from "react";
import Icon from "../Icon";
import Progress from "../Progress";
import { CustomButton } from "./Button.styled";

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
    className,
    onClick,
    children,
    ...rest
}: ButtonProps) => {
    if (isLoading) {
        return (
            <CustomButton
                variant={variant}
                color={color}
                backgroundColor={backgroundColor}
                _hover={_hover}
                isDisabled={true}
                disabled={isDisabled}
                isLoading={isLoading}
                height={height}
                width={width}
                margin={margin}
                padding={padding}
                className={className}
                {...rest}
            >
                <Progress
                    variant="circular"
                    // TODO: Generalize the props for the radius to self setup
                    radius={"1em"}
                    color={color ? color : "#333"}
                    margin="0 10px 0 0"
                />
                Loading
            </CustomButton>
        );
    }

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
            className={className}
            onClick={onClick}
            {...rest}
        >
            {leftIcon && <Icon icon={leftIcon} margin="0 7px 0 0" />}
            {children}
            {rightIcon && <Icon icon={rightIcon} margin="0 0 0 7px" />}
        </CustomButton>
    );
};

export default Button;
