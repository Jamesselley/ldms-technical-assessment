import { Grid } from '@mui/material';
import TextInput from '../../components/TextInput';
import type { PartyFormData } from './CreatePartyForm';
import { createPartyCopy } from './CreatePartyCopy';
import type { FieldErrors } from './validation';

type LegalEntityFieldsProps = {
  errors: FieldErrors;
  formData: PartyFormData;
  handleInputChange: (field: keyof PartyFormData, value: string) => void;
};

export default function LegalEntityFields({ errors, formData, handleInputChange }: LegalEntityFieldsProps) {
  const {
      emailLabel,
      emailPlaceholder,
      registeredNameLabel,
      registeredNamePlaceholder,
      companyRegistrationNumberLabel,
      companyRegistrationNumberPlaceholder,
      postcodeLabel,
      postcodePlaceholder
    } = createPartyCopy;
  return (
    <>
      <Grid size={{ xs: 12, md: 6 }}>
        <TextInput
          error={Boolean(errors.email)}
          helperText={errors.email ?? ''}
          value={formData.email}
          type='email'
          label={emailLabel}
          placeholder={emailPlaceholder}
          required
          onChange={(event) => handleInputChange('email', event.target.value)}
        />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <TextInput
          error={Boolean(errors.postcode)}
          helperText={errors.postcode ?? ''}
          value={formData.postcode}
          type=''
          label={postcodeLabel}
          placeholder={postcodePlaceholder}
          required
          onChange={(event) => handleInputChange('postcode', event.target.value)}
        />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <TextInput
          error={Boolean(errors.registeredName)}
          helperText={errors.registeredName ?? ''}
          value={formData.registeredName}
          type='text'
          label={registeredNameLabel}
          placeholder={registeredNamePlaceholder}
          required
          onChange={(event) => handleInputChange('registeredName', event.target.value)}
        />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <TextInput
          error={Boolean(errors.companyRegistrationNumber)}
          helperText={errors.companyRegistrationNumber ?? ''}
          value={formData.companyRegistrationNumber}
          type='text'
          label={companyRegistrationNumberLabel}
          placeholder={companyRegistrationNumberPlaceholder}
          required
            onChange={(event) => handleInputChange('companyRegistrationNumber', event.target.value)}
        />
      </Grid>
    </>
  );
};