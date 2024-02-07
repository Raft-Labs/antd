import type { Meta, StoryObj } from '@storybook/react';
import type { RadioProps } from './Radio';
import { Radio } from './Radio';
import type { RadioGroupProps } from './RadioGroup';
import { RadioGroup } from './RadioGroup';

const meta: Meta<RadioProps | RadioGroupProps> = {
  title: 'Components/Data Entry/Radio',
};
export default meta;

type Story = StoryObj<RadioProps>;
type GroupStory = StoryObj<RadioGroupProps>;

function DefaultComponent(args: RadioProps) {
  return <Radio {...args} />;
}

function GroupComponent(args: RadioGroupProps) {
  return (
    <RadioGroup {...args}>
      <Radio dataTestId="radio-a" label="A" />
      <Radio dataTestId="radio-b" label="B" />
      <Radio dataTestId="radio-c" label="C" />
    </RadioGroup>
  );
}

export const Default: Story = {
  render: DefaultComponent,
  args: {
    dataTestId: 'radio',
    label: 'This is a radio',
    skeletonLoading: false,
  },
};

export const Group: GroupStory = {
  render: GroupComponent,
  args: {
    dataTestId: 'radio-group',
  },
};
