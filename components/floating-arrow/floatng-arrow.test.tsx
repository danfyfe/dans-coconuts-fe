import React from "react";
import { render } from "@testing-library/react";
import { FloatingArrow } from "./floating-arrow";

describe("FloatingArrow", () => {
  it("renders children", () => {
    const { getByText } = render(
      <FloatingArrow>Test Child</FloatingArrow>
    );
    expect(getByText("Test Child")).toBeInTheDocument();
  });

  it("applies custom className", () => {
    const { container } = render(
      <FloatingArrow className="custom-class">Child</FloatingArrow>
    );
    expect(container.firstChild).toHaveClass("custom-class");
  });

  it("renders arrow SVG with default size", () => {
    const { container } = render(<FloatingArrow>Child</FloatingArrow>);
    const svg = container.querySelector("svg");
    expect(svg).toHaveAttribute("width", "24");
    expect(svg).toHaveAttribute("height", "24");
  });

  it("renders arrow SVG with custom arrowSize", () => {
    const { container } = render(
      <FloatingArrow arrowSize={32}>Child</FloatingArrow>
    );
    const svg = container.querySelector("svg");
    expect(svg).toHaveAttribute("width", "32");
    expect(svg).toHaveAttribute("height", "32");
  });

  it("positions arrow on top by default", () => {
    const { container } = render(<FloatingArrow>Child</FloatingArrow>);
    const arrowDiv = container.querySelector("div > div");
    expect(arrowDiv).toHaveStyle("bottom: calc(100% + 16px)");
    expect(arrowDiv).toHaveStyle("left: 50%");
    expect(arrowDiv).toHaveStyle("transform: translateX(-50%)");
  });

  it("positions arrow on bottom", () => {
    const { container } = render(
      <FloatingArrow side="bottom">Child</FloatingArrow>
    );
    const arrowDiv = container.querySelector("div > div");
    expect(arrowDiv).toHaveStyle("top: calc(100% + 16px)");
    expect(arrowDiv).toHaveStyle("left: 50%");
    expect(arrowDiv).toHaveStyle("transform: translateX(-50%) rotate(180deg)");
  });

  it("positions arrow on left", () => {
    const { container } = render(
      <FloatingArrow side="left">Child</FloatingArrow>
    );
    const arrowDiv = container.querySelector("div > div");
    expect(arrowDiv).toHaveStyle("right: calc(100% + 16px)");
    expect(arrowDiv).toHaveStyle("top: 50%");
    expect(arrowDiv).toHaveStyle("transform: translateY(-50%) rotate(-90deg)");
  });

  it("positions arrow on right", () => {
    const { container } = render(
      <FloatingArrow side="right">Child</FloatingArrow>
    );
    const arrowDiv = container.querySelector("div > div");
    expect(arrowDiv).toHaveStyle("left: calc(100% + 16px)");
    expect(arrowDiv).toHaveStyle("top: 50%");
    expect(arrowDiv).toHaveStyle("transform: translateY(-50%) rotate(90deg)");
  });

  it("applies custom distance", () => {
    const { container } = render(
      <FloatingArrow side="top" distance={42}>Child</FloatingArrow>
    );
    const arrowDiv = container.querySelector("div > div");
    expect(arrowDiv).toHaveStyle("bottom: calc(100% + 42px)");
  });

  it("renders style tag with keyframes", () => {
    const { container } = render(<FloatingArrow>Child</FloatingArrow>);
    const styleTag = container.querySelector("style");
    expect(styleTag).toBeInTheDocument();
    expect(styleTag?.textContent).toContain("@keyframes floatArrow");
  });
});