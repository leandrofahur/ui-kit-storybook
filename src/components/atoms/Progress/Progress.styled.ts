import styled, { keyframes } from "styled-components";
import { callbackify } from "util";
import { CircularProgressProps } from "./Progress";

const spin = keyframes`
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
`;

export const Circular = styled.div<CircularProgressProps>`
    margin: ${(props) => (props.margin ? `${props.margin}` : "undefined")};
    width: ${(props) => (props.radius ? `${props.radius}` : "fit-content")};
    height: ${(props) => (props.radius ? `${props.radius}` : "fit-content")};

    border: ${(props) => (props.radius ? `1px solid ${props.color}` : `0px`)};
    border-top: ${(props) => (props.radius ? `1px solid #f6f6f6` : `0px`)};
    border-radius: 50%;

    animation: ${spin} 1.2s linear infinite;
`;

// export const LinearProgress = styled.div<ProgressProps>`
/* margin: ${(props) => (props.margin ? `${props.margin}` : "undefined")};
    width: ${(props) => (props.width ? `${props.width}` : "fit-content")};
    height: ${(props) => (props.height ? `${props.height}` : "fit-content")}; */
// `;
