import React from 'react';
import { Dropdown } from '../..';
import { RiArrowDownSLine } from 'react-icons/ri';
import { HiDotsVertical } from 'react-icons/hi';

const meta = {
  title: 'Components/Dropdown',
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

const Template = args => <Dropdown {...args} />;

export const Text = Template.bind({});
Text.args = {
  dropdownTitle: 'Choose options',
  option1: 'Option 1',
  option2: 'Option 2',
  option3: 'Option 3',
  option4: 'Option 4',
  icon: <RiArrowDownSLine />,
  isText: true,
};

export const Icon = Template.bind({});
Icon.args = {
  option1: 'Option 1',
  option2: 'Option 2',
  option3: 'Option 3',
  option4: 'Option 4',
  icon: <HiDotsVertical />,
  isIcon: true,
};
