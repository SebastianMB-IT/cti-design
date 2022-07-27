import React from 'react';
import { StatusDot } from '../src';

const meta = {
  title: 'StatusDot',
  component: StatusDot,
  argTypes: {
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

const Template = args => <StatusDot {...args} />;
export const Standard = Template.bind({});
Standard.args = {
  enabled: false,
};
