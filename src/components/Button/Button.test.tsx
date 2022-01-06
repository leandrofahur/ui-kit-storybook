import { render, fireEvent, screen } from "test-utils";
import Button, { VariantProps } from "./Button";

import "@testing-library/jest-dom/extend-expect";
import "jest-styled-components";

test("Renders Button with children", () => {
    render(
        <Button variant={"primary"}>
            <p>Hello World</p>
        </Button>,
        {}
    );

    expect(screen.getByText("Hello World")).toBeInTheDocument();
});

test("Triggers an event onClick", () => {
    const handleClick = jest.fn();

    render(
        <Button variant={"primary"} onClick={handleClick}>
            <p>Hello World</p>
        </Button>,
        {}
    );

    fireEvent.click(screen.getByRole("button"));

    expect(handleClick).toBeCalled();
});

test.each<VariantProps>([["primary"], ["secondary"], ["danger"], ["success"]])(
    "Renders the button using the variant %i",
    (variant) => {
        const { asFragment } = render(
            <Button variant={variant}>Button</Button>,
            {}
        );
        expect(asFragment).toMatchSnapshot();
    }
);
