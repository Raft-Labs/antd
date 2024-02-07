import type { Meta, StoryObj } from '@storybook/react';
import type { DatePickerProps } from './DatePicker';
import { DatePicker } from './DatePicker';
import type { DateRangePickerProps } from './DateRangePicker';
import { DateRangePicker } from './DateRangePicker';

const meta: Meta<DatePickerProps | DateRangePickerProps> = {
  title: 'Components/Data Entry/DatePicker',
};
export default meta;

type Story = StoryObj<DatePickerProps>;
type RangeStory = StoryObj<DateRangePickerProps>;

function DefaultComponent(args: DatePickerProps) {
  return <DatePicker {...args} />;
}

function RangeComponent(args: DateRangePickerProps) {
  return <DateRangePicker {...args} />;
}

export const Default: Story = {
  render: DefaultComponent,
  args: {
    dataTestId: 'date-picker',
    skeletonLoading: false,
  },
};

export const Range: RangeStory = {
  render: RangeComponent,
  args: {
    dataTestId: 'date-range-picker',
    skeletonLoading: false,
  },
};
