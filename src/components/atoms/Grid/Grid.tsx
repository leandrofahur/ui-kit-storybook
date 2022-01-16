import React from "react";
import { Wrapper } from "./Grid.styled";

export interface GridProps {
    /** Provide the number of columns for the component. (responsive) */
    xxs?: number;
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xlg?: number;
    xxlg?: number;

    /** Provide the number of columns for the component. */
    numOfColumns?: number;

    /** Provide the content justification parameter for the component */
    justifyContent?: string;

    /** Provide the alignment parameter for the component */
    alignItems?: string;

    /** Provide the margin parameter for the component */
    margin?: string;

    /** Provide the width parameter for the component */
    width?: string;

    /** Provide children props. */
    children?: React.ReactNode;
}

const Grid = ({
    xxs,
    xs,
    sm,
    md,
    lg,
    xlg,
    xxlg,
    numOfColumns,
    justifyContent,
    alignItems,
    margin,
    width,
    children,
}: GridProps) => {
    return (
        <Wrapper
            numOfColumns={numOfColumns}
            xxs={xxs}
            xs={xs}
            sm={sm}
            md={md}
            lg={lg}
            xlg={xlg}
            xxlg={xxlg}
            justifyContent={justifyContent}
            alignItems={alignItems}
            margin={margin}
            width={width}
        >
            {children}
        </Wrapper>
    );
};

export default Grid;
