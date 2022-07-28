import React from 'react';
import { ButtonIcon } from './../../../src';
import { HiRefresh } from "react-icons/hi";

const meta = {
  title: 'Components/Atoms/Buttons/ButtonIcon',
  component: ButtonIcon,
  argTypes: {
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template = (args) => <ButtonIcon {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Refresh',
  icon: <HiRefresh />,
};
