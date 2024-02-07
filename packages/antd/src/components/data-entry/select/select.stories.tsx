import type { Meta, StoryObj } from '@storybook/react';
import type { SelectProps } from './Select';
import { Select } from './Select';

const meta: Meta<SelectProps> = {
  title: 'Components/Data Entry/Select',
  argTypes: {
    dataTestId: {
      control: {
        type: 'text',
      },
    },
    skeletonLoading: {
      control: {
        type: 'boolean',
      },
    },
  },
};
export default meta;

type Story = StoryObj<SelectProps>;

function DefaultComponent(args: SelectProps) {
  return <Select {...args} />;
}

export const Default: Story = {
  render: DefaultComponent,
  args: {
    dataTestId: 'select',
    skeletonLoading: false,
  },
};
