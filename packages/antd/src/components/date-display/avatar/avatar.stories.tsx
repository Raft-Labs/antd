import type { Meta, StoryObj } from '@storybook/react';
import type { AvatarProps } from './Avatar';
import { Avatar } from './Avatar';

const meta: Meta<AvatarProps> = {
  title: 'Components/Data Display/Avatar',
  argTypes: {
    dataTestId: {
      type: {
        name: 'string',
      },
    },
    skeletonLoading: {
      type: {
        name: 'boolean',
      },
    },
    size: {
      defaultValue: 'default',
      type: {
        name: 'enum',
        value: ['small', 'default', 'large'],
      },
    },
    shape: {
      defaultValue: 'circle',
      type: {
        name: 'enum',
        value: ['circle', 'square'],
      },
    },
  },
};
export default meta;

type Story = StoryObj<AvatarProps>;

function DefaultComponent(props: AvatarProps) {
  return <Avatar {...props} />;
}

export const Default: Story = {
  render: DefaultComponent,
  args: {
    dataTestId: 'avatar',
    skeletonLoading: false,
    size: 'default',
  },
};
