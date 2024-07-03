import H4 from "@/components/core/typography/H4";
import { render, RenderResult } from "@testing-library/react";

describe('H4 component', () => {
  let component: RenderResult<typeof import("@testing-library/dom/types/queries"), HTMLElement, HTMLElement>;
  let element: HTMLElement;
  const elementText = 'Heading'
  const className = 'mb-2';

  beforeEach(() => {
    component = render(
      <H4 className={className}>
        {elementText}
      </H4>
    );
    element = component.getByText(elementText);
  });

  it('renders', () => {
    expect(component).toBeDefined();
    expect(element).toBeDefined();
  });

  it('renders correctly', () => {
    expect(component).toMatchSnapshot();
  });

  it('renders an h4 tag', () => {
    expect(element.tagName).toBe('H4');
  });

  it('uses the passed in className', () => {
    expect(element.classList).toContain('mb-2')
  })
});
