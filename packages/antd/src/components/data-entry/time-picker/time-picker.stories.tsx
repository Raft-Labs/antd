import type { Meta, StoryObj } from '@storybook/react';
import type { TimePickerProps } from './TimePicker';
import { TimePicker } from './TimePicker';
import type { TimeRangePickerProps } from './TimeRangePicker';
import { TimeRangePicker } from './TimeRangePicker';

const meta: Meta<TimePickerProps | TimeRangePickerProps> = {
  title: 'Components/Data Entry/TimePicker',
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

type Story = StoryObj<TimePickerProps>;
type RangeStory = StoryObj<TimeRangePickerProps>;

function DefaultComponent(args: TimePickerProps) {
  return <TimePicker {...args} />;
}

function RangeComponent(args: TimeRangePickerProps) {
  return <TimeRangePicker {...args} />;
}

export const Default: Story = {
  render: DefaultComponent,
  args: {
    dataTestId: 'time-picker',
    skeletonLoading: false,
  },
};

export const Range: RangeStory = {
  render: RangeComponent,
  args: {
    dataTestId: 'time-range-picker',
    skeletonLoading: false,
    size: 'middle',
  },
};
