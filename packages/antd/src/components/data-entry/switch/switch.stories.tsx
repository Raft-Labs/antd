import type { Meta, StoryObj } from '@storybook/react';
import type { SwitchProps } from './Switch';
import { Switch } from './Switch';

const meta: Meta<SwitchProps> = {
  title: 'Components/Data Entry/Switch',
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
      defaultValue: 'default',
      type: {
        name: 'enum',
        value: ['small', 'default'],
      },
    },
  },
};
export default meta;

type Story = StoryObj<SwitchProps>;

function DefaultComponent(args: SwitchProps) {
  return <Switch {...args} />;
}

export const Default: Story = {
  render: DefaultComponent,
  args: {
    dataTestId: 'switch-button',
    defaultChecked: true,
    skeletonLoading: false,
    size: 'default',
  },
};
