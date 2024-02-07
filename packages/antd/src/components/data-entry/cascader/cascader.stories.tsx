import type { Meta, StoryObj } from '@storybook/react';
import type { CascaderProps } from './Cascader';
import { Cascader } from './Cascader';

const meta: Meta<CascaderProps> = {
  title: 'Components/Data Entry/Cascader',
};
export default meta;

type Story = StoryObj<CascaderProps>;

function DefaultComponent(props: CascaderProps) {
  return <Cascader {...props} />;
}

export const Default: Story = {
  render: DefaultComponent,
  args: {
    dataTestId: 'cascader',
    skeletonLoading: false,
  },
};
