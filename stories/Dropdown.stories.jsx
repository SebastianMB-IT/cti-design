import React from 'react';
import { Dropdown } from '../src';

const meta = {
  title: 'Dropdown',
  component: Dropdown,
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

const Template = (args) => <Dropdown {...args} />;

export const Default = Template.bind({});
Default.args = {
  enabled: false,
};
