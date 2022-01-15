import React from "react";
import { BaseProgress } from "./Progress.styled";

export type VariantProps = "circular" | "linear";

export interface ProgressProps {
    /** Provides the basic variations required for the component: 'solid' | 'outline' | 'danger' | 'warning' | 'success'. */
    variant: VariantProps;

    /** Provides the ability to choose the component text color. */
    color?: string;

    /** Provides the height for the component: it can be in %, px, em, rem... */
    height?: string;

    /** Provides the width for the component: it can be in %, px, em, rem... */
    width?: string;

    /** Provides the margin for the component: [up right down left] [up/down left/right]. */
    margin?: string;

    /** Provides the padding for the component: [up right down left] [up/down left/right]. */
    padding?: string;

    /** Provides a className variable for inline styling. */
    className?: string;
}

const Progress = ({ variant }: ProgressProps) => {
    return (
        <BaseProgress variant={variant}>
            {variant === "circular"
                ? "<CircularProgress></CircularProgress>"
                : ""}
        </BaseProgress>
    );
};

export default Progress;
