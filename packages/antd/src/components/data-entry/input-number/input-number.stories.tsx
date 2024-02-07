import type { Meta, StoryObj } from '@storybook/react';
import type { InputNumberProps } from './InputNumber';
import { InputNumber } from './InputNumber';

const meta: Meta<InputNumberProps> = {
  title: 'Components/Data Entry/Input Number',
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
    size: {
      defaultValue: 'middle',
      type: {
        name: 'enum',
        value: ['small', 'middle', 'large'],
      },
    },
  },
};
export default meta;

type Story = StoryObj<InputNumberProps>;

function DefaultComponent(args: InputNumberProps) {
  return <InputNumber {...args} />;
}

export const Default: Story = {
  render: DefaultComponent,
  args: {
    dataTestId: 'input-number',
    skeletonLoading: false,
    size: 'middle',
  },
};
