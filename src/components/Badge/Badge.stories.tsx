import React, { useState } from 'react';
import { Badge, BadgeProps } from '../..';
import { Meta, Story } from '@storybook/react';
import { HiX } from 'react-icons/hi';

const meta = {
  title: 'Components/Badge',
  component: Badge,
  argTypes: {
    variant: {
      options: [
        'available',
        'dnd',
        'voicemail',
        'cellphone',
        'callforward',
        'busy',
        'incoming',
        'offline',
        'rounded',
      ],
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta as Meta;

const Template: Story<BadgeProps> = (args) => (
  <Badge {...args}>{args.children}</Badge>
);

export const Available = Template.bind({});
Available.args = {
  children: 'Available',
  variant: 'available',
  rounded: 'full',
};

export const Large = Template.bind({});
Large.args = {
  children: 'Available',
  variant: 'available',
  rounded: 'full',
  size: 'large',
};

export const DoNotDisturb = Template.bind({});
DoNotDisturb.args = {
  children: 'Do not disturb',
  variant: 'dnd',
  rounded: 'full',
};

export const Voicemail = Template.bind({});
Voicemail.args = {
  children: 'Voicemail',
  variant: 'voicemail',
  rounded: 'full',
};

export const Cellphone = Template.bind({});
Cellphone.args = {
  children: 'Cellphone',
  variant: 'cellphone',
  rounded: 'full',
};

export const Callforward = Template.bind({});
Callforward.args = {
  children: 'Callforward',
  variant: 'callforward',
  rounded: 'full',
};

export const Busy = Template.bind({});
Busy.args = {
  children: 'Busy',
  variant: 'busy',
};

export const Incoming = Template.bind({});
Incoming.args = {
  children: 'Incoming',
  variant: 'incoming',
};

export const Offline = Template.bind({});
Offline.args = {
  children: 'Offline',
  variant: 'offline',
};

export const WithDot = Template.bind({});
WithDot.args = {
  children: 'Available',
  variant: 'available',
  dot: true,
};

export const WithIcon: Story<BadgeProps> = () => {
  const [hide, setHide] = useState(false);

  return (
    <Badge variant="available" hide={hide}>
      Badge
      <HiX
        className="text-green-600 cursor-pointer w-3 h-3"
        onClick={() => setHide(true)}
      />
    </Badge>
  );
};
