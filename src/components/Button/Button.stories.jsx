import React from 'react';
import { Button } from '../..';

const meta = {
  title: 'Components/Button/CallButton',
  component: Button,
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

const Template = args => <Button {...args} />;

export const Call = Template.bind({});
Call.args = {
  enabled: false,
  login: true,
  label: 'Call',
};
