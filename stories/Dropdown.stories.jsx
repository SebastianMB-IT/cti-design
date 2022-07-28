import React from 'react';
import { Dropdown } from '../src';
import { HiDotsVertical } from "react-icons/hi";

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
  option1: 'Option 1',
  option2: 'Option 2',
  option3: 'Option 3',
  option4: 'Option 4',
  icon: <HiDotsVertical />,
};
