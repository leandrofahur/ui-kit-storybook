import React from "react";
import { Wrapper } from "./Spinner.styled";

export interface SpinnerProps {
    complementaryColor: string;
    color: string;
    size: number;
    thickness: number;
}

const Spinner = ({
    complementaryColor,
    color,
    size,
    thickness,
}: SpinnerProps) => {
    return (
        <Wrapper
            complementaryColor={complementaryColor}
            color={color}
            size={size}
            thickness={thickness}
        />
    );
};

export default Spinner;
