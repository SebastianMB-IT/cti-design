import React from 'react';
import { LoginHeader } from '../..';

const meta = {
  title: 'Components/Form/LoginHeader',
  component: LoginHeader,
  argTypes: {},
  parameters: {},
};

export default meta;

const Template = args => <LoginHeader {...args} />;

export const Default = Template.bind({});
Default.args = {};
