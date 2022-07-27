import React from 'react';
import { ButtonAvatar } from '../src';
const meta = {
  title: 'ButtonAvatar',
  component: ButtonAvatar,
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
const Template = args => <ButtonAvatar {...args} />;
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
