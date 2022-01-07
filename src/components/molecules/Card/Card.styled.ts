import styled, { css } from "styled-components";
import { CardBodyProps, CardMediaProps, CardProps } from "./Card";

export const Wrapper = styled.div<CardProps>`
    height: fit-content;
    width: ${(props) => (props.width ? `${props.width}` : "100px")};
    border: 1px solid #e0e0e0;
    border-radius: 5px;
`;

export const Media = styled.div<CardMediaProps>`
    ${(props) =>
        css`
            background-image: url(${props.image});
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            height: 200px;
        `}
`;

export const Content = styled.div<CardBodyProps>`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    background-color: ${(props) => props.backgroundColor};
    color: ${(props) => props.color};

    padding: 15px;

    p {
        font-size: 0.8rem;
        padding: 10px 0;
    }
`;
