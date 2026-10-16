import type { Meta, StoryObj } from '@storybook/react-vite';
import { fn } from 'storybook/test';
import { useArgs } from 'storybook/preview-api';
import ToggleWithRadioInput from './ToggleWithRadioInput';

const options = [
  { label: 'Option A', value: 'a' },
  { label: 'Option B', value: 'b' },
];

const defaultProps = {
  options,
  value: 'a',
  onChange: fn(),
};

const meta = {
  title: 'Toggle With Radio Input',
  component: ToggleWithRadioInput,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A toggle button with a hidden set of radio buttons that can be used within a form',
      }
    }
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ToggleWithRadioInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: function Render(args) {
    const [{ value }, updateArgs] = useArgs();

    return (
      <ToggleWithRadioInput
        {...args}
        value={value}
        onChange={(nextValue) => {
          args.onChange(nextValue);
          updateArgs({ value: nextValue });
        }}
      />
    );
  },
  args: {
    ...defaultProps,
  },
};