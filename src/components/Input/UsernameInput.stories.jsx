import React from 'react';
import { UsernameInput } from '../..';

const meta = {
  title: 'Components/Input/UsernameInput',
  component: UsernameInput,
  argTypes: {},
  parameters: {},
};

export default meta;

const Template = args => <UsernameInput {...args} />;

export const Default = Template.bind({});
Default.args = {};
