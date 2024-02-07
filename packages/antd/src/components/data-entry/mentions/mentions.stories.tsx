import type { Meta, StoryObj } from '@storybook/react';
import type { MentionsProps } from './Mentions';
import { Mentions } from './Mentions';

const meta: Meta<MentionsProps> = {
  title: 'Components/Data Entry/Mentions',
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

type Story = StoryObj<MentionsProps>;

function DefaultComponent(args: MentionsProps) {
  return <Mentions {...args} />;
}

export const Default: Story = {
  render: DefaultComponent,
  args: {
    dataTestId: 'mentions',
    skeletonLoading: false,
  },
};
