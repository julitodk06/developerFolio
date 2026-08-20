import {render, screen} from "@testing-library/react";
import {describe, expect, it} from "vitest";
import App from "./App";

describe("portfolio", () => {
  it("renders the executive positioning and selected systems", () => {
    render(<App />);

    expect(
      screen.getByRole("heading", {
        name: /I turn complex AI initiatives into operational products/i
      })
    ).toBeInTheDocument();
    expect(screen.getByText("LexiaCode OS")).toBeInTheDocument();
    expect(screen.getByText("Lexia Tokenization Platform")).toBeInTheDocument();
  });
});
