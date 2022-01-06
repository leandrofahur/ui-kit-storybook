import { HTMLAttributes, ReactNode } from "react";
import { CustomButton } from "./Button.styled";

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

    /** Props for the inner text of the button */
    children?: ReactNode;
}

const Button = ({
    variant,
    color,
    backgroundColor,
    _hover,
    children,
}: ButtonProps) => {
    return (
        <CustomButton
            variant={variant}
            color={color}
            backgroundColor={backgroundColor}
            _hover={_hover}
        >
            {children}
        </CustomButton>
    );
};

export default Button;
