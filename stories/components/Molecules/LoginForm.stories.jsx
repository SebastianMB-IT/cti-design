import React from 'react';
import { LoginForm } from './../../../src/';

const meta = {
  title: 'Components/Molecules/LoginForm',
  component: LoginForm,
  argTypes: {
  },
  parameters: {
  },
};

export default meta;

const Template = (args) => <LoginForm {...args} />;

export const Default = Template.bind({});
Default.args = {
};