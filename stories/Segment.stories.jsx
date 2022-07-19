import React from 'react';
import { Segment } from '../src';

const meta = {
  title: 'Segment',
  component: Segment,
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

const Template = (args) => <Segment {...args} />;

export const Default = Template.bind({});
Default.args = {
  enabled: false,
};