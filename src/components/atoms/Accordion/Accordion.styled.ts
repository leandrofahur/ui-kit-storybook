import styled, { css } from "styled-components";
import { AccordionProps } from "./Accordion";

type state = {
    activeIndex: number;
};

export const BaseAccordion = styled.div`
    display: flex;
    flex-direction: column;

    // TODO: Change the hardcoded color:
    border: 1px solid #c4c4c4;
    border-radius: 5px 5px 0 0;

    // TODO: Change the hardcoded color:
    color: #c4c4c4;

    & + & {
        border-top: none;
        border-radius: 0;

        &:last-child {
            border-radius: 0 0 8px 8px;
        }
    }

    /* & > *:active,
    & > *:visited {
        color: #333;
    } */
`;

export const Title = styled.h1`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px 15px;
    font-size: 18px;
    cursor: pointer;

    transition: all 0.2s ease;

    & > *:first-child {
        margin-right: 10px;
        /* transform: rotate(-90deg);                */
    }

    &:hover {
        // TODO: Change the hardcoded color:
        color: #333;

        & > *:first-child {
            /* transform: rotate(0deg);   */
        }
    }
`;

export const Content = styled.p<state>`
    font-size: 14px;
    padding: 0 20px 10px;
    line-height: 1.2rem;
    color: #333;
`;
