import {
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  styled,
} from '@mui/material';
import theme from '../../theme/theme';

type ToggleWithRadioInputProps<T extends string> = {
  options: Array<{ value: T, label: string}>;
  value: T;
  onChange: (value: T) => void;
};

const HiddenRadio = styled(Radio)({
  position: 'absolute',
  opacity: 0,
  width: 1,
  height: 1,
  padding: 0,
});

export default function ToggleWithRadioInput<T extends string>({
  value,
  options,
  onChange,
}: ToggleWithRadioInputProps<T>) {
  return (
    <FormControl sx={{ width: '100%'}}>
      <RadioGroup
        row
        value={value}
        onChange={(event) =>{
          const selectedOption = options.find(
            (option) => option.value === event.target.value,
          );
          if (selectedOption) {
            onChange(selectedOption.value)
          }
        }}
        sx={{
          display: 'flex',
        }}
      >
        {options.map((option, index) => (
          <FormControlLabel
            key={option.value}
            value={option.value}
            control={<HiddenRadio />}
            label={option.label}
            sx={{
              m: 0,
              flex: 1,
              justifyContent: 'center',
              border: '1px solid',
              borderColor:
                value === option.value ? theme.palette.primary.main : 'grey.400',
              px: 0,
              py: 1,
              bgcolor:
                value === option.value ? theme.palette.primary.main : 'transparent',
              color:
                value === option.value ? 'primary.contrastText' : 'text.primary',
              ...(index === 0 && {
                borderTopLeftRadius: '4px',
                borderBottomLeftRadius: '4px',
                borderRight: 0,
              }),
              ...(index === options.length - 1 && {
                borderTopRightRadius: '4px',
                borderBottomRightRadius: '4px',
              }),
              '& .MuiFormControlLabel-label': {
                fontWeight: 500,
              },
            }}
          />
        ))}
      </RadioGroup>
    </FormControl>
  );
}