import { ElementType, ReactNode } from "react";
import { Icon, Wrapper } from "./Tag.Styled";

export interface TagProps {
    /** Provides the icon of the tag. */
    icon?: ElementType;

    /** Provides the children of the tag. */
    children?: ReactNode;
}

const Tag = ({ icon, children }: TagProps) => {
    return (
        <Wrapper>
            {icon && <Icon as={icon} />}
            {children}
        </Wrapper>
    );
};

export default Tag;
