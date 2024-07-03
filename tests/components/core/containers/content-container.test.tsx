import ContentContainer from "@/components/core/containers/content-container";
import { render, RenderResult } from "@testing-library/react";

describe('Content Container component', () => {
  let component: RenderResult<typeof import("@testing-library/dom/types/queries"), HTMLElement, HTMLElement>;
  let element: HTMLElement;
  const elementId = 'content';
  const elementText = 'Content';
  const className = 'mb-2';

  beforeEach(() => {
    component = render(
      <ContentContainer className={className} id={elementId}>
        {elementText}
      </ContentContainer>
    );
    element = component.getByTestId(`${elementId}-test`);
  });

  it('renders', () => {
    expect(component).toBeDefined();
    expect(element).toBeDefined();
  });

  it('renders children', () => {
    const textElement = component.getByText(elementText);
    expect(textElement).toBeDefined();
  });

  it('uses the passed in className', () => {
    expect(element.classList).toContain('mb-2');
  });
});
