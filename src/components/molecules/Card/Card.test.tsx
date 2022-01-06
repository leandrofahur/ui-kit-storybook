import { render, fireEvent, screen } from "test-utils";
import Card, { CardProps } from "./Card";

import "@testing-library/jest-dom/extend-expect";
import "jest-styled-components";

test("Renders Card with children", () => {
    render(<Card></Card>, {});

    expect(screen.getByText("Card")).toBeInTheDocument();
});
