import P from "@/components/core/typography/P";
import { render, RenderResult } from "@testing-library/react";

describe('P component', () => {
  let component: RenderResult<typeof import("@testing-library/dom/types/queries"), HTMLElement, HTMLElement>;
  let element: HTMLElement;
  const elementText = 'Heading'
  const className = 'mb-2';

  beforeEach(() => {
    component = render(
      <P className={className}>
        {elementText}
      </P>
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

  it('renders an p tag', () => {
    expect(element.tagName).toBe('P');
  });

  it('uses the passed in className', () => {
    expect(element.classList).toContain('mb-2')
  })
});
