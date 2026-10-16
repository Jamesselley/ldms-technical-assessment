import { Grid } from '@mui/material';
import TextInput from '../../components/TextInput';
import type { PartyFormData } from './CreatePartyForm';
import { createPartyCopy } from './CreatePartyCopy';
import type { FieldErrors } from './validation';

type NaturalPersonFieldsProps = {
  errors: FieldErrors;
  formData: PartyFormData;
  handleInputChange: (field: keyof PartyFormData, value: string) => void;
};

export default function NaturalPersonFields({ errors, formData, handleInputChange }: NaturalPersonFieldsProps) {
  const {
    dateOfBirthLabel,
    emailLabel,
    emailPlaceholder,
    fullNameLabel,
    fullNamePlaceholder,
    postcodeLabel,
    postcodePlaceholder
  } = createPartyCopy;
  return (
    <>
      <Grid size={{ xs: 12, md: 6 }}>
        <TextInput
          value={formData.email}
          type='email'
          error={Boolean(errors.email)}
          helperText={errors.email ?? ''}
          label={emailLabel}
          placeholder={emailPlaceholder}
          required
          onChange={(event) => handleInputChange('email', event.target.value)}
        />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <TextInput
          value={formData.postcode}
          error={Boolean(errors.postcode)}
          helperText={errors.postcode ?? ''}
          type='text'
          label={postcodeLabel}
          placeholder={postcodePlaceholder}
          required
          onChange={(event) => handleInputChange('postcode', event.target.value)}
        />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <TextInput
          error={Boolean(errors.fullName)}
          helperText={errors.fullName ?? ''}
          value={formData.fullName}
          type='text'
          label={fullNameLabel}
          placeholder={fullNamePlaceholder}
          required
          onChange={(event) => handleInputChange('fullName', event.target.value)}
        />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <TextInput
          error={Boolean(errors.dateOfBirth)}
          helperText={errors.dateOfBirth ?? ''}
          value={formData.dateOfBirth}
          type='date'
          label={dateOfBirthLabel}
          required
          onChange={(event) => handleInputChange('dateOfBirth', event.target.value)}
        />
      </Grid>
    </>
  );
};