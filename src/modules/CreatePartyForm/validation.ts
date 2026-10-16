import type { PartyFormData } from './CreatePartyForm';
import { createPartyCopy } from './CreatePartyCopy';

export type FieldErrors = Partial<
  Record<keyof PartyFormData, string>
>;

const isValidEmail = (email: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const isValidUKPostcode = (postcode: string) =>
  /^(GIR 0AA|[A-Z]{1,2}\d[A-Z\d]?\s*\d[A-Z]{2})$/i.test(
    postcode.trim()
);

const isValidCompanyRegistrationNumber = (companyRegistrationNumber: string) =>
  /^[a-zA-Z0-9]{8}$/.test(companyRegistrationNumber.trim());

export function validateForm(data: PartyFormData): FieldErrors {
  const errors: FieldErrors = {};
  // Fields required for everyone
  if (!data.email.trim()) {
    errors.email = createPartyCopy.emailRequiredError;
  } else if (!isValidEmail(data.email.trim())) {
    errors.email = createPartyCopy.emailInvalidError;
  }

  if (!data.postcode.trim()) {
    errors.postcode = createPartyCopy.postcodeRequiredError;
  } else if (!isValidUKPostcode(data.postcode)) {
    errors.postcode = createPartyCopy.postcodeInvalidError;
  }

  // Fields required only for a natural person
  if (data.partyType === 'Natural Person') {
    if (!data.fullName.trim()) {
      errors.fullName = createPartyCopy.fullNameRequiredError;
    }

    if (!data.dateOfBirth.trim()) {
      errors.dateOfBirth = createPartyCopy.dateOfBirthRequiredError;
    }
  }

  // Fields required only for a legal entity
  if (data.partyType === 'Legal Entity') {
    if (!data.registeredName.trim()) {
      errors.registeredName = createPartyCopy.registeredNameRequiredError;
    }

    if (!data.companyRegistrationNumber.trim()) {
      errors.companyRegistrationNumber = createPartyCopy.companyRegistrationNumberRequiredError;
    } else if (!isValidCompanyRegistrationNumber(data.companyRegistrationNumber)) {
       errors.companyRegistrationNumber = createPartyCopy.companyRegistrationNumberInvalidError;
    }
  }
  return errors;
}