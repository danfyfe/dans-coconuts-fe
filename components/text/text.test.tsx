import React from 'react';
import { render, screen } from '@testing-library/react';
import Paragraph from './text';

describe('Paragraph', () => {
  it('renders children correctly', () => {
    render(<Paragraph>Test content</Paragraph>);
    expect(screen.getByText('Test content')).toBeInTheDocument();
  });

  it('passes props to the <p> element', () => {
    render(<Paragraph data-testid="para" className="custom-class">Content</Paragraph>);
    const para = screen.getByTestId('para');
    expect(para).toHaveClass('custom-class');
    expect(para.tagName).toBe('P');
  });

  it('renders without children', () => {
    render(<Paragraph data-testid="empty-para" />);
    expect(screen.getByTestId('empty-para')).toBeInTheDocument();
  });
});