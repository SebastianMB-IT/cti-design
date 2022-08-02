import React from 'react';
import { LoginForm } from '../..';

const meta = {
  title: 'Components/Form/LoginForm',
  component: LoginForm,
  argTypes: {},
  parameters: {},
};

export default meta;

const Template = args => <LoginForm {...args} />;

export const Default = Template.bind({});
Default.args = {};
