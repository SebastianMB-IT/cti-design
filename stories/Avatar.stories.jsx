import React from 'react';
import { Avatar } from '../src';

const meta = {
  title: 'Avatar',
  component: Avatar,
  argTypes: {
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

const Template = args => <Avatar {...args} />;
export const Profile = Template.bind({});
Profile.args = {
  enabled: false,
};
