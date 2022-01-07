import styled from "styled-components";

export const Wrapper = styled.div`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    height: 21px;
    border-radius: 8px;
    color: #fff;
    background-color: #385d66;

    & > *:last-child {
        font-size: 0.75rem;
        padding: 0 8px 0 5px;
    }
`;

// A icon button have all the previous attributes and can add an icon on te left and right side of a button:
export const Icon = styled.svg`
    height: 21px;
    width: 21px;
    padding: 5px;
    border-radius: 8px 0 0 8px;
    fill: #fff;
    background-color: #122f34;
`;
