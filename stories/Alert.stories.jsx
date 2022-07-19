import React from 'react';
import { Alert } from '../src';

const meta = {
  title: 'Alert',
  component: Alert,
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

const Template = (args) => <Alert {...args} />;

export const Default = Template.bind({});
Default.args = {
  enabled: false,
};