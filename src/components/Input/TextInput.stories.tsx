import React from 'react';
import { Meta, Story } from '@storybook/react'
import { TextInput , TextInputProps } from '../..';
import { HiMail } from 'react-icons/hi'

const meta = {
  title: 'Components/Input/TextInput',
  component: TextInput,
  argTypes: {
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta as Meta;

const Template: Story<TextInputProps> = (args) => <TextInput {...args} />;

export const Simple = Template.bind({});
Simple.args = {
  placeholder: 'Input placeholder',
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: 'Input label',
  placeholder: 'Input placeholder',
  name: 'test'
};

export const WithLeadingIcon = Template.bind({});
WithLeadingIcon.args = {
  label: 'Input label',
  placeholder: 'Input placeholder',
  name: 'test',
  icon: HiMail
};

export const WithTrailingIcon = Template.bind({});
WithTrailingIcon.args = {
  label: 'Input label',
  placeholder: 'Input placeholder',
  name: 'test',
  icon: HiMail,
  iconRight: true
};

export const WithError = Template.bind({});
WithError.args = {
  label: 'Input label',
  placeholder: 'Input placeholder',
  name: 'test',
  error: true
};

export const ErrorWithHelper = Template.bind({});
ErrorWithHelper.args = {
  label: 'Input label',
  placeholder: 'Input placeholder',
  name: 'test',
  helper: 'This is the helper text',
  error: true
};

export const Password = Template.bind({});
Password.args = {
  label: 'Password Input',
  placeholder: 'Input placeholder',
  name: 'test',
  icon: HiMail,
  iconRight: true
};

export const Large = Template.bind({});
Large.args = {
  label: 'Input label',
  placeholder: 'Input placeholder',
  name: 'test',
  icon: HiMail,
  iconRight: true
};