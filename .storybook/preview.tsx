import type { Preview } from '@storybook/react-vite'
import { ThemeProvider } from '@mui/material';
import theme from '../src/theme/theme';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
    decorators: [
      (Story: React.ComponentType) => (
        <ThemeProvider theme={theme}>
          <Story />
        </ThemeProvider>
      ),
    ],

    a11y: {
      test: 'todo'
    }
  },
};

export default preview;