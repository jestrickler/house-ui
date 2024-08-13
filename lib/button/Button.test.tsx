import { render } from "@testing-library/react";
import { Button } from "./Button";

describe(`Component: ${Button.name}`, () => {
  it("should render", () => {
    const { container } = render(<Button>My button</Button>);

    expect(container).toMatchInlineSnapshot(`
      <div>
        <button
          class="bg-blue-700 text-white px-3 py-1 rounded-md"
        >
          My button
        </button>
      </div>
    `);
  });
});
