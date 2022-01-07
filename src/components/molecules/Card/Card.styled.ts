import styled, { css } from "styled-components";
import { CardBodyProps, CardMediaProps, CardProps } from "./Card";

export const Wrapper = styled.div<CardProps>`
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
            height: 180px;
        `}
`;

export const Content = styled.div<CardBodyProps>`
    /* display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-items: space-between; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    height: fit-content;

    background-color: ${(props) => props.backgroundColor};
    color: ${(props) => props.color};

    padding: 15px;

    p {
        font-size: 0.8rem;
        padding: 15px 0;
    }
`;
