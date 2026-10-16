import type { Meta, StoryObj } from '@storybook/react-vite';
import { Paper, Typography } from '@mui/material';
import SingleColumnLayout from './SingleColumnLayout';

const defaultProps = {
  children: <Paper sx={{ height: '100%', p: 4 }}><Typography align={'center'} variant='h2' sx={{ alignText: 'center'}}>Show content in a single column layout</Typography></Paper>
};

const meta = {
  title: 'Single Column Layout',
  component: SingleColumnLayout,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A single column layout component for organizing content in a vertical stack',
      }
    }
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SingleColumnLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    ...defaultProps,
  },
};