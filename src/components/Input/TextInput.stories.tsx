import React, { KeyboardEvent, useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { TextInput, TextInputProps, Button } from '../..';
import {
  HiMail,
  HiEyeOff,
  HiEye,
  HiViewGridAdd,
  HiSearch,
} from 'react-icons/hi';
import { MdError } from 'react-icons/md';

const meta = {
  title: 'Components/Input/TextInput',
  component: TextInput,
  argTypes: {
    onIconClick: {
      table: {
        category: 'Events',
        subcategory: 'Icon Events',
      },
      action: 'icon clicked',
    },
    squared: {
      control: 'select',
      options: ['left', 'right', 'top', 'bottom'],
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta as Meta;

const Template: Story<TextInputProps> = (args) => <TextInput {...args} />;

export const Base = Template.bind({});
Base.args = {
  placeholder: 'This is a placeholder',
};

export const Large = Template.bind({});
Large.args = {
  placeholder: 'This is a placeholder',
  name: 'test',
  size: 'large',
};

export const FullRounded = Template.bind({});
FullRounded.args = {
  placeholder: 'This is a placeholder',
  name: 'test',
  rounded: 'full',
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: 'This is a label',
  placeholder: 'This is a placeholder',
  name: 'test',
};

export const WithLeadingIcon = Template.bind({});
WithLeadingIcon.args = {
  ...WithLabel.args,
  icon: HiMail,
};

export const WithTrailingIcon = Template.bind({});
WithTrailingIcon.args = {
  ...WithLabel.args,
  icon: HiMail,
  trailingIcon: true,
};

export const WithError = Template.bind({});
WithError.args = {
  ...WithLabel.args,
  error: true,
};

export const ErrorWithHelper = Template.bind({});
ErrorWithHelper.args = {
  ...WithLabel.args,
  helper: 'This is a helper text',
  error: true,
};

export const ErrorHelperWithIcon = Template.bind({});
ErrorHelperWithIcon.args = {
  ...WithLabel.args,
  icon: MdError,
  trailingIcon: true,
  helper: 'This is a helper text',
  error: true,
};

export const Squared = Template.bind({});
Squared.args = {
  ...WithLabel.args,
  squared: 'top',
};

export const InputGroup: Story = () => {
  const [pwdVisible, setPwdVisible] = useState(false);

  return (
    <div className="flex flex-col -space-y-1.5">
      <TextInput
        placeholder="Enter your username"
        name="username"
        squared="bottom"
      />

      <div className="pt-px">
        <TextInput
          placeholder="Enter your password"
          name="password"
          squared="top"
          type={pwdVisible ? 'text' : 'password'}
          icon={pwdVisible ? HiEyeOff : HiEye}
          onIconClick={() => setPwdVisible(!pwdVisible)}
          trailingIcon={true}
        />
      </div>
    </div>
  );
};

export const WithButtonGroup: Story = () => {
  const [inputPlaceholder, setInputPlaceholder] = useState('Search');
  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      console.log('enter value:', event.target.value);
    }
  };

  return (
    <div className="flex -space-x-px w-full">
      <Button
        variant="light"
        squared="right"
        onClick={() => setInputPlaceholder('Search')}
      >
        <HiSearch className="text-gray-500 h-5 w-5" />
      </Button>
      <Button
        variant="light"
        rounded="none"
        onClick={() => setInputPlaceholder('Dial')}
      >
        <HiViewGridAdd className="text-gray-500 h-5 w-5" />
      </Button>
      <TextInput
        placeholder={inputPlaceholder}
        name="search"
        squared="left"
        onKeyDown={handleKeyDown}
      />
    </div>
  );
};
