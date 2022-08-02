import React from 'react';
import { LoginButton } from '../..';

const meta = {
  title: 'Components/Button/LoginButton',
  component: LoginButton,
  argTypes: {},
  parameters: {},
};

export default meta;

const Template = args => <LoginButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Login',
};
