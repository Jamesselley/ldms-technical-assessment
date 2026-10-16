import { Alert, Box, Button, Grid, Paper, Typography } from '@mui/material';
import { createPartyCopy } from './CreatePartyCopy';
import ToggleWithRadioInput from '../../components/ToggleWithRadioInput';
import { useState } from 'react';
import theme from '../../theme/theme';
import { createParty } from '../../generated';
import LegalEntityFields from './LegalEntityFields';
import NaturalPersonFields from './NaturalPersonFields';
import { validateForm } from './validation';
import type { FieldErrors } from './validation';

export type PartyType = 'Natural Person' | 'Legal Entity';

export type PartyFormData = {
  partyType: PartyType;
  fullName: string;
  email: string;
  postcode: string;
  dateOfBirth: string;
  registeredName: string;
  companyRegistrationNumber: string;
};

export default function CreatePartyForm() {
  const [errors, setErrors] = useState<FieldErrors>({});
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState<PartyFormData>({
    partyType: 'Natural Person',
    fullName: '',
    email: '',
    postcode: '',
    dateOfBirth: '',
    registeredName: '',
    companyRegistrationNumber: ''
  });
  const {
    formHelpText,
    partyCreatedText,
    submitLabel,
    title,
    unableToAddPartyErrorMessage
  } = createPartyCopy;

  const handleInputChange = (field: keyof PartyFormData, value: string) => {
    const updatedFormData = {
      ...formData,
      [field]: value,
    };
    setFormData(updatedFormData);

    if (hasSubmitted) {
      const validationErrors = validateForm(updatedFormData)
      setErrors(validationErrors);

      if (Object.keys(validationErrors).length > 0) {
        setErrorMessage('Please address the highlighted fields and resubmit');
        return;
      } else {
        setErrorMessage('');
      }
    }
  };

  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement>,
  ) => {
    event.preventDefault();
    setHasSubmitted(true);

    const validationErrors = validateForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setErrorMessage('Please address the highlighted fields and resubmit');
      return;
    } else {
      setErrorMessage('');
    }

    const payload = {
      type: formData.partyType,
      email: formData.email,
      postcode: formData.postcode,
      ...(formData.partyType === 'Natural Person'
        ? {
          fullName: formData.fullName,
          dateOfBirth: formData.dateOfBirth
        }
        : {
          registeredName: formData.registeredName,
          companyRegistrationNumber: formData.companyRegistrationNumber
        }
      )
    };

    createParty({
      body: payload
    }).then(() => {
      setSuccessMessage(partyCreatedText);
      setErrorMessage('');
    })
    .catch((error: unknown) => {
      setSuccessMessage('');
      setErrorMessage(
         error instanceof Error ? error.message : unableToAddPartyErrorMessage,
      );
    });
  };

  return (
    <Paper
      elevation={1}
      sx={{
        bgcolor: '#FFFDF7',
        minHeight: '100vh',
        borderRadius: 4,
        px: 4
      }}
    >
      <Typography
        variant={'h1'}
        align={'center'}
        sx={{
          color: theme.palette.primary.main,
          fontSize: '3rem',
          py: 3
        }}
      >
        {title}
      </Typography>
      <Paper
        elevation={2}
        sx={{
          mb: 2,
          p: 2,
          bgcolor: theme.palette.secondary.main
        }}
      >
        {formHelpText}
      </Paper>
      <Box component='form' noValidate onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid size={12}>
            <ToggleWithRadioInput
              value={formData.partyType}
              options={[
                { value: 'Natural Person', label: 'Natural Person' },
                { value: 'Legal Entity', label: 'Legal Entity' },
              ]}
              onChange={(partyType: PartyType) =>
                setFormData((prev) => ({
                  ...prev,
                  partyType,
                }))
              }
            />
          </Grid>
          {formData.partyType === 'Natural Person' && (
            <NaturalPersonFields
              errors={errors}
              formData={formData}
              handleInputChange={handleInputChange}
            />
          )}
          {formData.partyType === 'Legal Entity' && (
            <LegalEntityFields
              errors={errors}
              formData={formData}
              handleInputChange={handleInputChange}
            />
          )}
        </Grid>
        <Box>
          {successMessage !== '' &&
            <Alert severity='success' sx={{ mt: 2 }}>
              {successMessage}
            </Alert>
          }
          {errorMessage !== '' &&
            <Alert severity='error' sx={{ mt: 2 }}>
              {errorMessage}
            </Alert>
          }
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            width: '100%',
            mt: 2
          }}
        >
          <Button
            variant='contained'
            type='submit'
            size='large'
            sx={{
              width: {
                xs: '100%',
                sm: '100%',
                md: 'auto'
              },
              textTransform: 'none',
              bgcolor: theme.palette.primary.main,
              px: 10
            }}
          >
            {submitLabel}
          </Button>
        </Box>
      </Box>
    </Paper>
  );
};