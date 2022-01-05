import { ReactNode } from "react";
import { Container, Content, Title, Wrapper } from "./Hero.styled";

export interface HeroProps {
    image: string;
    children: ReactNode;
    title: string;
}

const Hero = ({ image, children, title }: HeroProps) => {
    return (
        <Container>
            <Wrapper image={image}>
                <Title>{title}</Title>
                <Content>{children}</Content>
            </Wrapper>
        </Container>
    );
};

export default Hero;
