export const Breakpoints = {
    xxs: 321,
    xs: 376,
    sm: 426,
    md: 769,
    lg: 1025,
    xlg: 1441,
    xxlg: 1537,
};

export const breakpointAt = (size: number): string => {
    return `@media(min-width: ${size}px)`;
};
