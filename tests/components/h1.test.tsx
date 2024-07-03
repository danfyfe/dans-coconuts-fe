import H1 from "@/components/core/typography/H1";
import { render, RenderResult } from "@testing-library/react";

describe('H1 component', () => {
  let component: RenderResult<typeof import("@testing-library/dom/types/queries"), HTMLElement, HTMLElement>;
  beforeEach(() => {
    component = render(
      <H1>
        Heading
      </H1>
    );
  });

  it('renders', () => {
    expect(component).toBeDefined();
  });

  it('renders an h1 tag', () => {
    console.log(component)
  });
});