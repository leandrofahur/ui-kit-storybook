import styled from "styled-components";
import { SpinnerProps } from "./Spinner";

export const Wrapper = styled.span<SpinnerProps>`
    display: block;

    width: ${({ size }) => size}px;
    height: ${({ size }) => size}px;

    border: ${({ thickness }) => thickness}px solid #fff;
    border-radius: 50%;
    animation: spin 1.2s cubic-bezier(0.5, 0.5, 0.5, 0.5) infinite;
    border-color: ${({ color }) => color} ${({ color }) => color}
        ${({ color }) => color}
        ${({ complementaryColor }) => complementaryColor};

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;
