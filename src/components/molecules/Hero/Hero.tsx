import { ReactNode } from "react";
import { Container, Content, Wrapper } from "./Hero.styled";

export interface HeroProps {
    /** Height of div */
    height?: string;

    /** Background Image */
    image?: string;

    /** A children that accepts a ReactNode */
    children?: ReactNode;
}

const Hero = ({ height = "60vh", image, children }: HeroProps) => {
    return (
        <Container>
            <Wrapper height={height} image={image} data-testid="hero-bg-image">
                <Content>{children}</Content>
            </Wrapper>
        </Container>
    );
};

export default Hero;
