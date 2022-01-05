import React from "react";
import { GlobalStyle } from "../src/styles/GlobalStyle";

// viewports configuration for storybook:
const viewports = {
    IPhone5SE: {
        name: "IPhone 5/SE",
        styles: {
            width: "320px",
            height: "568px",
        },
        type: "mobile",
    },
    IPhone678: {
        name: "IPhone 6/7/8",
        styles: {
            width: "375px",
            height: "667px",
        },
        type: "mobile",
    },
    IPhone678Plus: {
        name: "IPhone 6/7/8 Plus",
        styles: {
            width: "414px",
            height: "736px",
        },
        type: "mobile",
    },
    Tablet: {
        name: "Tablet",
        styles: {
            width: "768px",
            height: "1024px",
        },
        type: "tablet",
    },
    Notebook: {
        name: "Notebook",
        styles: {
            width: "1280px",
            height: "720px",
        },
        type: "desktop",
    },
    Desktop: {
        name: "Desktop",
        styles: {
            width: "1440px",
            height: "1024px",
        },
        type: "desktop",
    },
    LargeMonitor: {
        name: "Large Monitor",
        styles: {
            width: "1512px",
            height: "982ppx",
        },
        type: "desktop",
    },
};

export const parameters = {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
        matchers: {
            color: /(background|color)$/i,
            date: /Date$/,
        },
    },
    viewport: {
        viewports: viewports,
    },
};

export const decorators = [
    (Story) => (
        <>
            <GlobalStyle />
            <Story />
        </>
    ),
];
