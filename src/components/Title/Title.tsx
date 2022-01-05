import React, { ElementType } from "react";
import { Heading } from "./Title.styled";

export interface TitleProps {
    /** Props to specify the element as h1, h2, h3 ... h6 */
    as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
    /** Provides the inner text for the tag */
    children: string;
}

const Title = ({ as, children }: TitleProps) => {
    return <Heading as={as}>{children}</Heading>;
};

export default Title;
