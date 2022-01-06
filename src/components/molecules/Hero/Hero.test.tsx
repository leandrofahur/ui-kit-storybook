import Hero from "./Hero";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import "jest-styled-components";

test("Renders Hero with children", () => {
    render(
        <Hero>
            <p>Hello World</p>
        </Hero>
    );

    expect(screen.getByText("Hello World")).toBeInTheDocument();
});

test("Renders Hero with background image", () => {
    const image = "http://test/image.jpeg";
    render(<Hero image={image} />);

    expect(screen.getByTestId("hero-bg-image")).toHaveStyleRule(
        "background-image",
        expect.stringMatching(image)
    );
});
