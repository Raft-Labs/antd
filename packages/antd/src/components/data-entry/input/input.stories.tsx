import type { Meta, StoryObj } from '@storybook/react';
import type { InputProps } from './Input';
import { Input } from './Input';
import type { PasswordProps } from './Password';
import { Password as PasswordStoryComponent } from './Password';
import type { SearchProps } from './Search';
import { Search as SearchStoryComponent } from './Search';
import type { TextAreaProps } from './TextArea';
import { TextArea as TextAreaStoryComponent } from './TextArea';

const meta: Meta<InputProps | PasswordProps | SearchProps | TextAreaProps> = {
  title: 'Components/Data Entry/Input',
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

type Story = StoryObj<InputProps>;
type PasswordStory = StoryObj<PasswordProps>;
type SearchStory = StoryObj<SearchProps>;
type TextAreaStory = StoryObj<TextAreaProps>;

function DefaultComponent(args: InputProps) {
  return <Input {...args} />;
}

function PasswordComponent(args: PasswordProps) {
  return <PasswordStoryComponent {...args} />;
}

function SearchComponent(args: SearchProps) {
  return <SearchStoryComponent {...args} />;
}

function TextAreaComponent(args: TextAreaProps) {
  return <TextAreaStoryComponent {...args} />;
}

export const Default: Story = {
  render: DefaultComponent,
  args: {
    dataTestId: 'input',
    skeletonLoading: false,
    size: 'middle',
  },
};

export const Password: PasswordStory = {
  render: PasswordComponent,
  args: {
    dataTestId: 'password',
  },
};

export const Search: SearchStory = {
  render: SearchComponent,
  args: {
    dataTestId: 'search',
  },
};

export const TextArea: TextAreaStory = {
  render: TextAreaComponent,
  args: {
    dataTestId: 'textarea',
  },
};
