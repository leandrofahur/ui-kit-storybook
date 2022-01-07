import { ReactNode } from "react";
import { Content, Media, Wrapper } from "./Card.styled";

//#region Card Media
export interface CardMediaProps {
    /** Card media background Image */
    image?: string;
}

export const CardMedia = ({ image }: CardMediaProps) => {
    return <Media image={image} />;
};
//#endregion

//#region Card Body
export interface CardBodyProps {
    /** Card body text color */
    color?: string;

    /** Card body background color */
    backgroundColor?: string;

    /** A children that accepts a ReactNode */
    children?: ReactNode;
}

export const CardBody = ({
    color,
    backgroundColor,
    children,
}: CardBodyProps) => {
    return (
        <Content color={color} backgroundColor={backgroundColor}>
            {children}
        </Content>
    );
};
//#endregion

//#region Card
export interface CardProps {
    /** Card width */
    width?: string;

    /** Card height */
    height?: string;

    /** A children that accepts a ReactNode */
    children?: ReactNode;
}

const Card = ({ width = "200px", children }: CardProps) => {
    return (
        <Wrapper width={width}>
            <div />
            {children}
        </Wrapper>
    );
};
//#endregion

export default Card;
