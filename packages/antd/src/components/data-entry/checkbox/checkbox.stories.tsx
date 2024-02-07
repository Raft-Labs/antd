import type { Meta, StoryObj } from '@storybook/react';
import type { CheckboxProps } from './Checkbox';
import { Checkbox } from './Checkbox';
import type { CheckboxGroupProps } from './CheckboxGroup';
import { CheckboxGroup } from './CheckboxGroup';

const meta: Meta<CheckboxProps | CheckboxGroupProps> = {
  title: 'Components/Data Entry/Checkbox',
};
export default meta;

type Story = StoryObj<CheckboxProps>;
type GroupStory = StoryObj<CheckboxGroupProps>;

function DefaultComponent(args: CheckboxProps) {
  return <Checkbox {...args} />;
}

function GroupComponent(args: CheckboxGroupProps) {
  return (
    <CheckboxGroup {...args}>
      <Checkbox dataTestId="checkbox-a" label="A" />
      <Checkbox dataTestId="checkbox-b" label="B" />
      <Checkbox dataTestId="checkbox-c" label="C" />
    </CheckboxGroup>
  );
}

export const Default: Story = {
  render: DefaultComponent,
  args: {
    dataTestId: 'checkbox',
    label: 'This is a checkbox',
    skeletonLoading: false,
  },
};

export const Group: GroupStory = {
  render: GroupComponent,
  args: {
    dataTestId: 'checkbox-group',
  },
};
