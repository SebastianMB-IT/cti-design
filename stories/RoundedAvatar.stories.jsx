import React from 'react';
import { RoundedAvatar } from '../src';

const meta = {
  title: 'RoundedAvatar',
  component: RoundedAvatar,
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

const Template = args => <RoundedAvatar {...args} />;
export const Profile = Template.bind({});
Profile.args = {
  enabled: false,
};
