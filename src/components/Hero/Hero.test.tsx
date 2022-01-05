import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Hero from "./Hero";

test("Renders Hero with children", () => {
    const { debug, getByText } = render(
        <Hero>
            <p>Hello World</p>
        </Hero>
    );

    // eslint-disable-next-line testing-library/no-debugging-utils
    // debug();

    expect(screen.getByText("Hello World")).toBeInTheDocument();
});
