import React from 'react';
import { Presence } from '../src';
const meta = {
  title: 'Presence',
  component: Presence,
  argTypes: {
    onClick: { action: 'clicked' },
    backgroundColor: { control: 'color' },
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
const Template = args => <Presence {...args} />;
export const Available = Template.bind({});
Available.args = {
  enabled: false,
  presenceType: 'available',
};
export const Busy = Template.bind({});
Busy.args = {
  enabled: false,
  presenceType: 'busy',
};
