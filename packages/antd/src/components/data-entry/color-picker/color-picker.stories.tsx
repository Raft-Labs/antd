import type { Meta, StoryObj } from '@storybook/react';
import type { ColorPickerProps } from './ColorPicker';
import { ColorPicker } from './ColorPicker';

const meta: Meta<ColorPickerProps> = {
  title: 'Components/Data Entry/ColorPicker',
};
export default meta;

type Story = StoryObj<ColorPickerProps>;

function DefaultComponent(props: ColorPickerProps) {
  return <ColorPicker {...props} />;
}

export const Default: Story = {
  render: DefaultComponent,
  args: {
    dataTestId: 'color-picker',
    defaultValue: '#1677ff',
    skeletonLoading: false,
  },
};
