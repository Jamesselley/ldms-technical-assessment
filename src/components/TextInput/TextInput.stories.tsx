import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import TextInput from './TextInput';

const meta = {
  title: 'Text Input',
  component: TextInput,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A MUI TextField component that can be used to input text, numbers, emails, and passwords.',
      }
    }
  },
  tags: ['autodocs'],

  argTypes: {
    disabled: {
      control: 'boolean'
    },
    error: {
      control: 'boolean'
    },
    fullWidth: {
      control: 'boolean'
    },
    helperText: {
      control: 'text'
    },
    label: {
      control: 'text'
    },
    placeholder: {
      control: 'text'
    },
    required: {
      control: 'boolean'
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large']
    },
    type: {
      control: 'select',
      options: ['text', 'number', 'email', 'password', 'date'],
    },
    value: {
      control: 'text'
    },
    variant: {
      control: 'select',
      options: ['outlined', 'filled', 'standard'],
    }
  },
  args: { onClick: fn() },
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Email: Story = {
  args: {
    label: 'Email',
    type: 'email',
    placeholder: 'e.g john.smith@gmail.com',
  },
};
export const Number: Story = {
  args: {
    label: 'Number',
    type: 'number'
  },
};
export const Text: Story = {
  args: {
    label: 'Text',
    type: 'text',
  },
};

export const Date: Story = {
  args: {
    label: 'Date',
    type: 'date',
  },
};