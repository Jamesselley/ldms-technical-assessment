import SingleColumnLayout from './components/SingleColumnLayout';
import CreatePartyForm from './modules/CreatePartyForm';
import { ThemeProvider } from '@mui/material/styles';
import theme from './theme/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <SingleColumnLayout>
        <CreatePartyForm />
      </SingleColumnLayout>
    </ThemeProvider>
  );
}
