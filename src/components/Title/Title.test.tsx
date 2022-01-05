import Title from "./Title";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import "jest-styled-components";

test("Renders Title with children", () => {
    const { asFragment } = render(<Title as="h1">Hello World</Title>);
    expect(asFragment()).toMatchSnapshot();
});
