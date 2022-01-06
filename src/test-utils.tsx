import React from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "./config/theme";
import { render } from "@testing-library/react";

const TestProvider = ({ children }: any) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export * from "@testing-library/react";

const customRender = (ui: any, options: any) =>
    render(ui, { wrapper: TestProvider, ...options });

export { customRender as render };
