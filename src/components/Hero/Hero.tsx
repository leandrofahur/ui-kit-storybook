import { ReactNode } from "react";
import { Container, Content, Wrapper } from "./Hero.styled";

export interface HeroProps {
    /** Background Image */
    image?: string;
    /** A children that accepts a ReactNode */
    children?: ReactNode;
}

const Hero = ({ image, children }: HeroProps) => {
    return (
        <Container>
            <Wrapper image={image}>
                <Content>{children}</Content>
            </Wrapper>
        </Container>
    );
};

export default Hero;
