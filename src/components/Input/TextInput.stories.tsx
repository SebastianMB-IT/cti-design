import React from 'react';
import { Meta, Story } from '@storybook/react';
import { TextInput, TextInputProps } from '../..';
import { HiMail } from 'react-icons/hi';
import { MdError } from 'react-icons/md';

const meta = {
  title: 'Components/Input/TextInput',
  component: TextInput,
  argTypes: {
    onIconClick: {
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
  placeholder: 'Input placeholder',
};

export const Large = Template.bind({});
Large.args = {
  placeholder: 'Input placeholder',
  name: 'test',
  size: 'large',
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: 'Input label',
  placeholder: 'Input placeholder',
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
  iconRight: true,
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
  iconRight: true,
  helper: 'This is a helper text',
  error: true,
};

export const Squared = Template.bind({});
Squared.args = {
  ...WithLabel.args,
  squared: 'right',
};
