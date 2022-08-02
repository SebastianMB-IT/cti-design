import React from 'react';
import { SquaredAvatar } from '../..';

const meta = {
  title: 'Components/Avatar/SquaredAvatar',
  component: SquaredAvatar,
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

const Template = args => <SquaredAvatar {...args} />;
export const Profile = Template.bind({});
Profile.args = {
  enabled: false,
};
