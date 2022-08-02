import React from 'react';
import { UsernameInput } from './../../../../src';

const meta = {
  title: 'Components/Atoms/Input/UsernameInput',
  component: UsernameInput,
  argTypes: {
  },
  parameters: {
  },
};

export default meta;

const Template = (args) => <UsernameInput {...args} />;

export const Default = Template.bind({});
Default.args = {
};