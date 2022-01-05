export const Breakpoints = {
    xs: 325,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    xlg: 1450,
};

export const breakpointAt = (size: number): string => {
    return `@media(min-width: ${size}px)`;
};
