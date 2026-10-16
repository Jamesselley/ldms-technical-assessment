import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import CreatePartyForm from './CreatePartyForm';

const meta = {
  title: 'Create Party Form',
  component: CreatePartyForm,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A form that allows users to create a new party, either as a natural person or a legal entity. The form includes fields for personal and company information, and provides validation feedback to the user.',
      }
    }
  },
  tags: ['autodocs'],

  args: { onClick: fn() },
} satisfies Meta<typeof CreatePartyForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};