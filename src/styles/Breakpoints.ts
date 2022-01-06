export const Breakpoints = {
    xs: 376,
    sm: 415,
    md: 768,
    lg: 992,
    xl: 1200,
    xlg: 1450,
};

export const breakpointAt = (size: number): string => {
    return `@media(min-width: ${size}px)`;
};
