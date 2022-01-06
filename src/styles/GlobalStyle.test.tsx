import { GlobalStyle } from "./GlobalStyle";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import "jest-styled-components";

test("GlobalStyle matches the snapshot", () => {
    render(<GlobalStyle />);
    expect(document.body).toMatchSnapshot();
});
