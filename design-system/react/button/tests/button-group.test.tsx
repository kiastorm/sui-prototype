import * as React from "react";

import { render, testA11y } from "../../test-utils";
import { Button, ButtonGroup } from "..";

it("passes a11y test", async () => {
    await testA11y(
        <ButtonGroup>
            <Button>Button 1</Button>
            <Button>Button 2</Button>
            <Button>Button 3</Button>
            <Button>Button 4</Button>
        </ButtonGroup>
    );
});

test("Should apply custom flex props", () => {
    const { getByText } = render(
        <ButtonGroup align="end">
            <Button>Button 1</Button>
            <Button>Button 2</Button>
        </ButtonGroup>
    );
    expect(getByText(/Button 2/i)).toHaveStyle({ alignItems: "end" });
});
test("Should apply overrideable group props", () => {
    const { getByText } = render(
        <ButtonGroup disabled>
            <Button>Button 1</Button>
            <Button disabled={false}>Button 2</Button>
            <Button>Button 3</Button>
            <Button>Button 4</Button>
        </ButtonGroup>
    );
    expect(getByText(/Button 1/i)).toBeDisabled();
    expect(getByText(/Button 2/i)).not.toBeDisabled();
    expect(getByText(/Button 3/i)).toBeDisabled();
    expect(getByText(/Button 4/i)).toBeDisabled();
});
