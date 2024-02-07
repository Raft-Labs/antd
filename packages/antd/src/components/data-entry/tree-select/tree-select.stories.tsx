import type { Meta, StoryObj } from '@storybook/react';
import type { TreeSelectProps } from './TreeSelect';
import { TreeSelect } from './TreeSelect';

const meta: Meta<TreeSelectProps> = {
  title: 'Components/Data Entry/Tree Select',
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
      type: {
        name: 'enum',
        value: ['small', 'middle', 'large'],
      },
    },
  },
};
export default meta;

type Story = StoryObj<TreeSelectProps>;

function DefaultComponent(args: TreeSelectProps) {
  return <TreeSelect {...args} />;
}

export const Default: Story = {
  render: DefaultComponent,
  args: {
    dataTestId: 'tree-select',
    skeletonLoading: false,
    size: 'middle',
  },
};
