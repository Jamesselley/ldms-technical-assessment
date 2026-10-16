import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import SingleColumnLayout from './SingleColumnLayout';

describe('SingleColumnLayout', () => {
  it('renders its children', () => {
    render(
      <SingleColumnLayout>
        <h1>Page title</h1>
      </SingleColumnLayout>,
    );

    expect(
      screen.getByRole('heading', { name: 'Page title' }),
    ).toBeInTheDocument();
  });

  it('places its children inside the main landmark', () => {
    render(
      <SingleColumnLayout>
        <p>Page content</p>
      </SingleColumnLayout>,
    );

    expect(screen.getByRole('main')).toContainElement(
      screen.getByText('Page content'),
    );
  });
});