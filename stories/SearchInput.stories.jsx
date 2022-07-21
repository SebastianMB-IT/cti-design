import React from 'react';
import { SearchInput } from '../src';

const meta = {
  title: 'Input/SearchInput',
  component: SearchInput,
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

const Template = (args) => <SearchInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  enabled: false,
};