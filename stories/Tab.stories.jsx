import React from 'react';
import { Tab } from '../src';

const meta = {
  title: 'Tab',
  component: Tab,
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

const Template = (args) => <Tab {...args} />;

export const Default = Template.bind({});
Default.args = {
  enabled: false,
};
