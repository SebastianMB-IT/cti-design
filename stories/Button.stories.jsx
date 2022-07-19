import React from 'react';
import { Button } from '../src';

const meta = {
  title: 'Button',
  component: Button,
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

const Template = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  enabled: false,
};