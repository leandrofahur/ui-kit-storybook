import React from "react";
import { Wrapper } from "./Grid.styled";

export interface GridProps {
    /** Provide the number of columns to the grid. */
    numOfColumns?: number;

    /** Provide children props. */
    children?: React.ReactNode;
}

const Grid = ({ numOfColumns = 1, children }: GridProps) => {
    return <Wrapper numOfColumns={numOfColumns}>{children}</Wrapper>;
};

export default Grid;
