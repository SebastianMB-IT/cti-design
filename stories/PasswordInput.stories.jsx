import React from 'react';
import { PasswordInput } from '../src';

const meta = {
  title: 'Input/PasswordInput',
  component: PasswordInput,
  argTypes: {
    onClick: { action: 'clicked' },
    enabled: {
      control: {
        type: 'boolean',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template = (args) => <PasswordInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  enabled: false,
};