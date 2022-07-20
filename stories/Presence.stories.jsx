import React from 'react';
import { Presence } from '../src';

const meta = {
  title: 'Presence',
  component: Presence,
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

const Template = (args) => <Presence {...args} />;

export const Default = Template.bind({});
Default.args = {
  enabled: false,
};
