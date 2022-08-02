import React from 'react';
import { SearchInput } from '../..';

const meta = {
  title: 'Components/Input/SearchInput',
  component: SearchInput,
  argTypes: {
    onClick: { action: 'clicked' },
    onChange: { action: 'changed' },
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
const Template = args => <SearchInput {...args} />;
export const Default = Template.bind({});
Default.args = {
  enabled: false,
};
