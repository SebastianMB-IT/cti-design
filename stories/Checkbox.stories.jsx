import React from 'react';
import { Checkbox } from '../src';

const meta = {
  title: 'Checkbox',
  component: Checkbox,
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

const Template = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.args = {
  enabled: false
};