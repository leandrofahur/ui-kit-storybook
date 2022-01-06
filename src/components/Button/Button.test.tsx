import React, { ReactNode } from "react";
import { render, screen } from "@testing-library/react";
import Button from "./Button";

import "@testing-library/jest-dom/extend-expect";
import "jest-styled-components";

import { ThemeProvider } from "styled-components";
import { theme } from "../../config/theme";

const TestProvider = ({ children }: any) => {
    return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

test("Renders Button with children", () => {
    render(
        <TestProvider>
            <Button variant={"primary"}>
                <p>Hello World</p>
            </Button>
        </TestProvider>
    );

    expect(screen.getByText("Hello World")).toBeInTheDocument();
});
