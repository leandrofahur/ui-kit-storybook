import { Breakpoints, breakpointAt } from "./Breakpoints";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import "jest-styled-components";

test.each([
    [
        Breakpoints.xs,
        Breakpoints.sm,
        Breakpoints.md,
        Breakpoints.lg,
        Breakpoints.xl,
        Breakpoints.xlg,
    ],
])("Breakpoint for %i", (size) => {
    expect(breakpointAt(size)).toEqual(`@media(min-width: ${size}px)`);
});
