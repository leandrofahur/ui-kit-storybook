import Heading from "./Heading";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import "jest-styled-components";

test("Renders Heading with children and matches with snapshot", () => {
    const { asFragment } = render(<Heading as="h1">Hello World</Heading>);
    expect(asFragment()).toMatchSnapshot();
});
