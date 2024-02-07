import type { Meta, StoryObj } from '@storybook/react';
import type { TransferProps } from './Transfer';
import { Transfer } from './Transfer';

const meta: Meta<TransferProps> = {
  title: 'Components/Data Entry/Transfer',
  argTypes: {
    dataTestId: {
      control: {
        type: 'text',
      },
    },
  },
};
export default meta;

type Story = StoryObj<TransferProps>;

function DefaultComponent(args: TransferProps) {
  return <Transfer {...args} />;
}

export const Default: Story = {
  render: DefaultComponent,
  args: {
    dataTestId: 'transfer',
  },
};
