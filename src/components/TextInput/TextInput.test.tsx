import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import TextInput from './TextInput';

describe('TextInput', () => {
  it("Renders the supplied label", () => {
    render(<TextInput label="Email address" />);
    expect(
      screen.getByRole("textbox", {
        name: "Email address"
      }),
    ).toBeInTheDocument();
  });

  it('Supports email input type', () => {
    render(<TextInput label="Email address" type="email" />);
    expect(
      screen.getByRole('textbox', {
        name: "Email address",
      }),
    ).toHaveAttribute('type', 'email');
  })
});
