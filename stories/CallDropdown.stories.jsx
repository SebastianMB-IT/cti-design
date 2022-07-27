import React from 'react';
import { CallDropdown } from '../src';

const meta = {
  title: 'CallDropdown',
  component: CallDropdown,
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

const Template = (args) => <CallDropdown {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: 'Storybook CallDropdown',
  enabled: false
};