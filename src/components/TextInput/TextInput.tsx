import TextField, {
  type TextFieldProps,
} from '@mui/material/TextField';

export default function TextInput(
  props: TextFieldProps
) {
  return (
    <TextField
      sx={{width: '100%'}}
      slotProps={{
        inputLabel: {
          shrink: true,
        },
      }}
      {...props}
    />
  );
}