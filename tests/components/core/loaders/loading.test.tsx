import Loading from "@/components/core/loaders/loading";
import { render, RenderResult } from "@testing-library/react";

describe('Loading component', () => {
  let component: RenderResult<typeof import("@testing-library/dom/types/queries"), HTMLElement, HTMLElement>;
  let element: HTMLElement;
  const className = 'mb-2';
  const coconutImageSrc = encodeURIComponent('/images/coconut.png');

  beforeEach(() => {
    component = render(
      <Loading className={className} />
    );
    element = component.getByTestId('loading-component')
  });

  it('renders', () => {
    expect(component).toBeDefined();
    expect(element).toBeDefined();
  });

  it('renders correctly', () => {
    expect(component).toMatchSnapshot();
  });

  it('renders a coconut image', () => {
    const image = element.getElementsByTagName('IMG')[0];
    const src = image.getAttribute('src');
    // NextJS Image component adds text to src, check for base inside
    expect(src).toContain(coconutImageSrc);
    expect(image).toBeDefined();
  });

  it('renders a span with loading text', () => {
    const span = component.getByText('...Loading...');
    expect(span).toBeDefined();
    expect(span.tagName).toBe('SPAN');
  });

  it('uses the passed in className', () => {
    expect(element.classList).toContain('mb-2');
  });
});
