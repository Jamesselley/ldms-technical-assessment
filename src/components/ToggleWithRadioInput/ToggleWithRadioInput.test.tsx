import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import ToggleWithRadioInput from './ToggleWithRadioInput';

const options = [
  { label: 'Option A', value: 'a' },
  { label: 'Option B', value: 'b' },
];

const createDefaultProps = () => ({
  options,
  value: 'a',
  onChange: vi.fn(),
});

describe('ToggleWithRadioInput', () => {
  it('Renders all provided options', () => {
    render(<ToggleWithRadioInput {...createDefaultProps()}/>);
    expect(
      screen.getByRole('radio', {
        name: 'Option A'
      }),
    ).toBeInTheDocument();
        expect(
      screen.getByRole('radio', {
        name: 'Option B'
      }),
    ).toBeInTheDocument();
  });

  it('Marks selected option as checked', () => {
    render(<ToggleWithRadioInput {...createDefaultProps()}/>);
    expect(
      screen.getByRole('radio', {
        name:'Option A',
      }),
    ).toBeChecked();
        expect(
      screen.getByRole('radio', {
        name:'Option B',
      }),
    ).not.toBeChecked();
  })
});