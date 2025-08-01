import React from "react";
import { render, screen } from "@testing-library/react";
import FloatingText from "./floating-text";

describe("FloatingText", () => {
  it("renders the text without highlights", () => {
    render(<FloatingText text="Hello world" highlightWords={[]} />);
    expect(screen.getByText("Hello world")).toBeInTheDocument();
    expect(screen.queryByClassName?.("floating-letter")).toBeFalsy();
  });

  it("highlights specified words", () => {
    render(<FloatingText text="Hello world" highlightWords={["world"]} />);
    expect(screen.getByText("Hello")).toBeInTheDocument();
    const floatingLetters = screen.getAllByText(/w|o|r|l|d/).filter(
      (el) => el.className === "floating-letter"
    );
    expect(floatingLetters).toHaveLength(5);
    expect(floatingLetters.map((el) => el.textContent).join("")).toBe("world");
  });

  it("handles multiple highlight words", () => {
    render(
      <FloatingText
        text="Hello world coconut"
        highlightWords={["world", "coconut"]}
      />
    );
    const worldLetters = screen.getAllByText(/w|o|r|l|d/).filter(
      (el) => el.className === "floating-letter"
    );
    expect(worldLetters).toHaveLength(5);

    const coconutLetters = screen.getAllByText(/c|o|n|u|t/).filter(
      (el) => el.className === "floating-letter"
    );
    expect(coconutLetters).toHaveLength(7);
  });

  it("does not highlight partial matches", () => {
    render(
      <FloatingText text="Hello worldliness" highlightWords={["world"]} />
    );
    expect(screen.getByText("worldliness")).toBeInTheDocument();
    expect(
      screen.queryByText("w", { selector: ".floating-letter" })
    ).toBeNull();
  });

  it("preserves spaces between words", () => {
    render(
      <FloatingText text="Hello   world" highlightWords={["world"]} />
    );
    const container = screen.getByText(/Hello\s+world/).parentElement;
    expect(container?.textContent).toBe("Hello   world");
  });

  it("applies correct animation styles to highlighted letters", () => {
    render(<FloatingText text="Hi" highlightWords={["Hi"]} />);
    const letters = screen.getAllByText(/H|i/).filter(
      (el) => el.className === "floating-letter"
    );
    expect(letters[0]).toHaveStyle({
      animation: expect.stringContaining("floatUpDown"),
      animationDelay: "0s",
    });
    expect(letters[1]).toHaveStyle({
      animationDelay: "0.1s",
    });
  });

  it("renders empty text gracefully", () => {
    render(<FloatingText text="" highlightWords={["anything"]} />);
    expect(screen.getByText("")).toBeInTheDocument();
  });

  it("renders when highlightWords contains spaces", () => {
    render(
      <FloatingText text="Hello world" highlightWords={[" "]} />
    );
    expect(screen.queryByClassName?.("floating-letter")).toBeFalsy();
  });
});