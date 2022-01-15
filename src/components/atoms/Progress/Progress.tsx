import { Circular } from "./Progress.styled";

//#region Circular Progress
export interface CircularProgressProps {
    /** Provides the ability to choose the component text color. */
    color: string;

    /** Provides the radius for the component: [up right down left] [up/down left/right]. */
    radius?: string;

    /** Provides the margin for the component: [up right down left] [up/down left/right]. */
    margin?: string;

    /** Provides a className variable for inline styling. */
    className?: string;
}

const CircularProgress = ({
    color,
    radius,
    margin,
    className,
}: CircularProgressProps) => {
    return (
        <Circular
            color={color}
            radius={radius}
            margin={margin}
            className={className}
        ></Circular>
    );
};
//#endregion

//#region Progress
export type VariantProps = "circular" | "linear";

export interface ProgressProps {
    /** Provides the basic variations required for the component: 'solid' | 'outline' | 'danger' | 'warning' | 'success'. */
    variant: VariantProps;

    /** Provides the radius for the component: [up right down left] [up/down left/right]. */
    radius?: string;

    /** Provides the ability to choose the component text color. */
    color: string;

    /** Provides the margin for the component: [up right down left] [up/down left/right]. */
    margin?: string;

    /** Provides a className variable for inline styling. */
    className?: string;
}

const Progress = ({
    variant,
    radius,
    color,
    margin,
    className,
}: ProgressProps) => {
    return (
        <CircularProgress
            color={color}
            radius={radius}
            margin={margin}
            className={className}
        ></CircularProgress>
    );
};

export default Progress;
//#endregion
