import React from 'react';
import { RoundedAvatar } from '../..';

const meta = {
  title: 'Components/Avatar/RoundedAvatar',
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
