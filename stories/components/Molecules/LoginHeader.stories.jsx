import React from 'react';
import { LoginHeader } from './../../../src/';

const meta = {
  title: 'Components/Molecules/LoginHeader',
  component: LoginHeader,
  argTypes: {
  },
  parameters: {
  },
};

export default meta;

const Template = (args) => <LoginHeader {...args} />;

export const Default = Template.bind({});
Default.args = {
};