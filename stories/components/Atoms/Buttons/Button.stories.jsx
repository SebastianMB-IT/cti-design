import React from 'react';
import { Button } from './../../../../src';

const meta = {
  title: 'Components/Atoms/Buttons/Button',
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
