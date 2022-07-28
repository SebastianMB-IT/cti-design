import React from 'react';
import { LoginButton } from './../../../src';

const meta = {
  title: 'Components/Atoms/Buttons/LoginButton',
  component: LoginButton,
  argTypes: {
  },
  parameters: {
  },
};

export default meta;

const Template = (args) => <LoginButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Login',
};
