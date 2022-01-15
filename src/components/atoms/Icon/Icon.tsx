import { ElementType, SVGAttributes } from "react";
import { Wrapper } from "./Icon.styled";

export interface IconProps extends SVGAttributes<SVGElement> {
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
    icon: ElementType;
}

const Icon = ({
    height,
    width,
    margin,
    padding,
    className,
    icon,
    ...rest
}: IconProps) => {
    return (
        <Wrapper
            as={icon}
            height={height}
            width={width}
            margin={margin}
            padding={padding}
            className={className}
            icon={icon}
            {...rest}
        ></Wrapper>
    );
};

export default Icon;
