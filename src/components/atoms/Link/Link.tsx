import React, { HTMLAttributes } from "react";
import { Wrapper } from "./Link.styled";

export interface LinkProps extends HTMLAttributes<HTMLAnchorElement> {
    /** Provides the ability to choose a text color. */
    color?: string;

    /** Provides the ability to choose a background color when the cursor hovers the button. */
    _hover?: string;

    /** Provide a boolean to determine if the button is enabled or not. */
    isDisabled?: boolean;

    /** Provide children props. */
    children: React.ReactNode;

    /** Provide the route */
    href: string | undefined;
}

const Link = ({
    color,
    _hover,
    children,
    isDisabled = false,
    href,
}: LinkProps) => {
    return (
        <Wrapper
            color={color}
            isDisabled={isDisabled}
            _hover={_hover}
            href={isDisabled ? undefined : href}
            target="_blank"
        >
            {children}
        </Wrapper>
    );
};

export default Link;
