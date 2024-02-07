import type { Meta, StoryObj } from '@storybook/react';
import type { SliderProps } from './Slider';
import { Slider } from './Slider';

const meta: Meta<SliderProps> = {
  title: 'Components/Data Entry/Slider',
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

type Story = StoryObj<SliderProps>;

function DefaultComponent(args: SliderProps) {
  return <Slider {...args} />;
}

export const Default: Story = {
  render: DefaultComponent,
  args: {
    dataTestId: 'slider',
    skeletonLoading: false,
  },
};
