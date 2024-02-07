import type { Meta, StoryObj } from '@storybook/react';
import type { AutoCompleteProps } from './AutoComplete';
import { AutoComplete } from './AutoComplete';

const meta: Meta<AutoCompleteProps> = {
  title: 'Components/Data Entry/AutoComplete',
};
export default meta;

type Story = StoryObj<AutoCompleteProps>;

function DefaultComponent(props: AutoCompleteProps) {
  return <AutoComplete {...props} />;
}

export const Default: Story = {
  render: DefaultComponent,
  args: {
    dataTestId: 'auto-complete',
    skeletonLoading: false,
  },
};
