import React, { ElementType } from "react";
import { Title } from "./Heading.styled";

export interface HeadingProps {
    /** Props to specify the element as h1, h2, h3 ... h6 */
    as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    /** Provides the inner text for the tag */
    children: string;
}

const Heading = ({ as, children }: HeadingProps) => {
    return <Title as={as}>{children}</Title>;
};

export default Heading;
