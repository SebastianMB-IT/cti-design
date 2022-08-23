import React from 'react';
import { Avatar } from '../..';

const meta = {
  title: 'Components/Avatar',
  component: Avatar,
  argTypes: {
    enabled: {},
  },
  parameters: {
    controls: { expanded: true },
  },
};
export default meta;

const Template = args => <Avatar {...args} />;

export const Rounded = Template.bind({});
Rounded.args = {
  isRounded: true,
};

export const Squared = Template.bind({});
Squared.args = {
  isSquared: true,
};
