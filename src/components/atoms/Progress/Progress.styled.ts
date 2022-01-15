import styled from "styled-components";
import { ProgressProps } from "./Progress";

export const BaseProgress = styled.div<ProgressProps>`
    padding: ${(props) => (props.padding ? `${props.padding}` : "undefined")};
    margin: ${(props) => (props.margin ? `${props.margin}` : "undefined")};
    width: ${(props) => (props.width ? `${props.width}` : "fit-content")};
    height: ${(props) => (props.height ? `${props.height}` : "fit-content")};
`;

export const CircularProgress = styled.div<ProgressProps>``;
