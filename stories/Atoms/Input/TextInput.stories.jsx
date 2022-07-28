import React from 'react';
import { TextInput } from './../../../src';

const meta = {
  title: 'Components/Atoms/Input/TextInput',
  component: TextInput,
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

const Template = (args) => <TextInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  enabled: false,
};