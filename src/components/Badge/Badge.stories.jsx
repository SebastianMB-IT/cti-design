import React from 'react';
import { Badge } from '../..';
import { AiFillClockCircle } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import { BsCheck2 } from 'react-icons/bs';

const meta = {
  title: 'Components/Badge',
  component: Badge,
  argTypes: {
    enabled: {},
    color: {
      control: {
        type: 'color',
        presetColors: ['red', 'green', 'yellow', 'blue', 'white', 'black', 'pink', 'purple', 'gray'],
      },
    },
    backgroundColor: {
      control: {
        type: 'color',
        presetColors: ['red', 'green', 'yellow', 'blue'],
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};
export default meta;

const Template = args => <Badge {...args} />;

export const Default = Template.bind({});
Default.args = {
  isLarge: false,
  isDefault: true,
  isIcon: false,
  isNotification: false,
  isOnlyIcon: false,
  badgeMessage: 'Default badge',
};

export const Large = Template.bind({});
Large.args = {
  isLarge: true,
  isDefault: false,
  isIcon: false,
  isNotification: false,
  isOnlyIcon: false,
  badgeMessage: 'Large badge',
};

export const Icon = Template.bind({});
Icon.args = {
  isLarge: false,
  isDefault: false,
  isIcon: true,
  isNotification: false,
  isOnlyIcon: false,
  badgeMessage: 'Badge with icon',
  icon: <AiFillClockCircle />,
};

export const Notification = Template.bind({});
Notification.args = {
  isLarge: false,
  isDefault: false,
  isIcon: false,
  isNotification: true,
  isOnlyIcon: false,
  badgeMessage: '2',
  icon: <MdEmail />,
};

export const OnlyIcon = Template.bind({});
OnlyIcon.args = {
  isLarge: false,
  isDefault: false,
  isIcon: false,
  isNotification: false,
  isOnlyIcon: true,
  icon: <BsCheck2 />,
};
