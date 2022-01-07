import { ReactNode } from "react";
import { Content, Media, Wrapper } from "./Card.styled";

// BODY part of the card
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

// MEDIA part of the card
export interface CardMediaProps {
    /** Card media background Image */
    image?: string;
}

export const CardMedia = ({ image }: CardMediaProps) => {
    return <Media image={image} />;
};

// The final card compound component:
export interface CardProps {
    /** Card width */
    width?: string;

    /** Card height */
    height: string;

    /** A children that accepts a ReactNode */
    children?: ReactNode;
}

const Card = ({ height = "270px", width = "200px", children }: CardProps) => {
    return (
        <Wrapper height={height} width={width}>
            <div />
            {children}
        </Wrapper>
    );
};

export default Card;
