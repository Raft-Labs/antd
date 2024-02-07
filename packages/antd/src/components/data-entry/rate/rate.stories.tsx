import type { Meta, StoryObj } from '@storybook/react';
import type { RateProps } from './Rate';
import { Rate } from './Rate';

const meta: Meta<RateProps> = {
  title: 'Components/Data Entry/Rate',
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

type Story = StoryObj<RateProps>;

function DefaultComponent(args: RateProps) {
  return <Rate {...args} />;
}

export const Default: Story = {
  render: DefaultComponent,
  args: {
    dataTestId: 'rate',
    skeletonLoading: false,
    value: 5,
  },
};
