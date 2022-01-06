import { render, fireEvent, screen } from "test-utils";
import Link, { LinkProps } from "./Link";

import "@testing-library/jest-dom/extend-expect";
import "jest-styled-components";

test("Renders Link with children", () => {
    render(
        <Link href="https://www.veganofoods.com">
            <p>Link</p>
        </Link>,
        {}
    );

    expect(screen.getByText("Link")).toBeInTheDocument();
});
