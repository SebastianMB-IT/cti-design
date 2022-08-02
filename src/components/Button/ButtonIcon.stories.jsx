import React from 'react';
import { ButtonIcon } from '../..';
import { HiRefresh } from 'react-icons/hi';

const meta = {
  title: 'Components/Button/ButtonIcon',
  component: ButtonIcon,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template = args => <ButtonIcon {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Refresh',
  icon: <HiRefresh />,
};
