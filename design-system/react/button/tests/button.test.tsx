import * as React from "react";

import { render, screen, testA11y } from "../../test-utils";
import { Button } from "..";

it("passes a11y test", async () => {
    await testA11y(<Button>test</Button>);
});

test("shows spinner if loading", () => {
    const { getByTestId } = render(
        <Button data-testid="btn" loading>
            Email
        </Button>
    );
    expect(getByTestId("btn")).toHaveAttribute("data-loading");

    // "Loading..." visually hidden label shown
    screen.getByText("Loading...");
});

test("shows spinner with correct placement and loading text if loading and loadingText", () => {
    const { debug, rerender } = render(
        <Button loading loadingText="Submitting">
            Submit
        </Button>
    );

    // children text is replaced by `loadingText`
    screen.getByText("Submitting");
    expect(screen.queryByText("Submit")).toBeNull();

    debug();
    // Confirm spinner position
    expect(screen.getByText(/Loading/i)).toHaveClass(
        "sui-button__left-spinner"
    );

    rerender(
        <Button
            loading
            spinnerPlacement="right"
            loadingText="Test if spinner placement"
        >
            Submit
        </Button>
    );

    expect(screen.getByText(/Loading/i)).toHaveClass(
        "sui-button__right-spinner"
    );
});

test("has the proper aria attributes", () => {
    const { rerender } = render(<Button>Hello</Button>);

    // button has role="button"
    let button = screen.getByRole("button");
    expect(button).not.toHaveAttribute("aria-disabled");

    // loading sets aria-disabled="true"
    rerender(<Button loading>Hello</Button>);
    button = screen.getByRole("button");
    expect(button).toHaveAttribute("data-loading", "");

    // disabled sets aria-disabled="true"
    rerender(<Button disabled>Hello</Button>);
    button = screen.getByRole("button");
    expect(button).toHaveAttribute("disabled", "");
});

test("Has the proper type attribute", () => {
    const { getByTestId, rerender } = render(
        <Button data-testid="btn">Email</Button>
    );

    // Has type="button" by default
    expect(getByTestId("btn")).toHaveAttribute("type", "button");

    // type="submit"
    rerender(
        <Button data-testid="btn" type="submit">
            Email
        </Button>
    );
    expect(getByTestId("btn")).toHaveAttribute("type", "submit");
});

test("Should be disabled", () => {
    const { getByRole } = render(
        <Button disabled data-testid="btn">
            I'm a disabled button
        </Button>
    );
    const button = getByRole("button");
    expect(button).toBeDisabled();
});

// test("Should take up full width", () => {
//     const { getByTestId } = render(
//         <Button fullWidth data-testid="btn">
//             i'm a big button
//         </Button>
//     );
//     expect(getByTestId("btn")).toHaveStyle("width: 100%;");
// });
