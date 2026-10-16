import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import CreatePartyForm from './CreatePartyForm';
import { createPartyCopy } from "./CreatePartyCopy";

describe('CreatePartyForm', () => {
  it("Renders Natural Person fields by default", () => {
    render(<CreatePartyForm  />);

    expect(
      screen.getByRole("radio", {
        name: "Natural Person"
      }),
    ).toBeChecked();

    expect(
      screen.getByLabelText(new RegExp(createPartyCopy.fullNameLabel)),
    ).toBeInTheDocument();

    expect(
      screen.getByLabelText(new RegExp(createPartyCopy.emailLabel)),
    ).toBeInTheDocument();

    expect(
      screen.getByLabelText(new RegExp(createPartyCopy.postcodeLabel)),
    ).toBeInTheDocument();

    expect(
      screen.getByLabelText(new RegExp(createPartyCopy.dateOfBirthLabel)),
    ).toBeInTheDocument();
  });

  it('Displays Legal Entity fields when selected', async () => {
    const user = userEvent.setup();
    render(<CreatePartyForm />);

    await user.click(
      screen.getByRole('radio', { name: 'Legal Entity' })
    );

    expect(
      screen.getByLabelText(new RegExp(createPartyCopy.registeredNameLabel)),
    ).toBeInTheDocument();

    expect(
      screen.getByLabelText(new RegExp(createPartyCopy.companyRegistrationNumberLabel)),
    ).toBeInTheDocument();

    expect(
      screen.getByLabelText(new RegExp(createPartyCopy.postcodeLabel)),
    ).toBeInTheDocument();

    expect(
      screen.getByLabelText(new RegExp(createPartyCopy.emailLabel)),
    ).toBeInTheDocument();
  });

  it('Shows required errors when an empty form is submitted', async () => {
    const user = userEvent.setup();
    render(<CreatePartyForm />);

    await user.click(
      screen.getByRole('button', { name: createPartyCopy.submitLabel })
    );

    expect(
      await screen.findByText(createPartyCopy.fullNameRequiredError)
    ).toBeInTheDocument();

    expect(
      await screen.findByText(createPartyCopy.emailRequiredError)
    ).toBeInTheDocument();

    expect(
      await screen.findByText(createPartyCopy.postcodeRequiredError)
    ).toBeInTheDocument();

    expect(
      await screen.findByText(createPartyCopy.dateOfBirthRequiredError)
    ).toBeInTheDocument();
  });
});
