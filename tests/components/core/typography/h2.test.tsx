import H2 from "@/components/core/typography/H2";
import { render, RenderResult } from "@testing-library/react";

describe('H2 component', () => {
  let component: RenderResult<typeof import("@testing-library/dom/types/queries"), HTMLElement, HTMLElement>;
  let element: HTMLElement;
  const elementText = 'Heading'
  const className = 'mb-2';

  beforeEach(() => {
    component = render(
      <H2 className={className}>
        {elementText}
      </H2>
    );
    element = component.getByText(elementText);
  });

  it('renders', () => {
    expect(component).toBeDefined();
    expect(element).toBeDefined();
  });

  it('renders an h2 tag', () => {
    expect(element.tagName).toBe('H2');
  });

  it('uses the passed in className', () => {
    expect(element.classList).toContain('mb-2')
  })
});
