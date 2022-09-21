import React from 'react';
import { Card, CardProps, Avatar, Badge, Button, Dropdown } from '../..';
import { Story, Meta } from '@storybook/react';
import { HiDotsVertical, HiPhone, HiChat } from 'react-icons/hi';
import { RiArrowLeftRightFill } from 'react-icons/ri';
import theme from '../../theme/Theme';

const meta = {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    status: {
      options: Object.keys(theme.status),
      type: 'select',
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta as Meta;

const Template: Story<CardProps> = (args) => <Card {...args} />;

const dropdownItems = (
  <>
    <Dropdown.Item icon={RiArrowLeftRightFill} centered={true}>
      Transfer
    </Dropdown.Item>
    <Dropdown.Item icon={HiChat} centered={true}>
      Chat
    </Dropdown.Item>
  </>
);

const avatarUrl =
  'https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80';

export const Base = Template.bind({});
Base.args = {
  children: (
    <>
      {/* Header */}
      <Card.Header>
        {/* Left */}
        <div className="flex flex-col gap-0.5">
          <div className="flex gap-3.5 items-center">
            <span className="">Stephanie Liverani</span>
            <Badge variant="available" rounded="full" size="base">
              Available
            </Badge>
          </div>
          <span className="text-gray-600">203</span>
        </div>
        {/* Right */}
        <Avatar src={avatarUrl} />
      </Card.Header>
    </>
  ),
};

export const WithStatus: Story<CardProps> = (args) => (
  <Card {...args}>
    {/* Header */}
    <Card.Header>
      {/* Left */}
      <div className="flex flex-col gap-0.5">
        <div className="flex gap-3.5 items-center">
          <span className="">Stephanie Liverani</span>
          <Badge
            variant={args.status || 'available'}
            rounded="full"
            size="base"
          >
            <span className={args.status !== 'dnd' ? 'capitalize' : ''}>
              {args.status === 'dnd' ? 'Do not disturb' : args.status}
            </span>
          </Badge>
        </div>
        <span className="text-gray-600">203</span>
      </div>
      {/* Right */}
      <Avatar src={avatarUrl} />
    </Card.Header>
  </Card>
);

WithStatus.args = {
  status: 'available',
};

export const WithActions: Story<CardProps> = (args) => (
  <Card {...args}>
    {/* Header */}
    <Card.Header>
      {/* Left */}
      <div className="flex flex-col gap-0.5">
        <div className="flex gap-3.5 items-center">
          <span className="">Stephanie Liverani</span>
          <Badge
            variant={args.status || 'available'}
            rounded="full"
            size="base"
          >
            <span className={args.status !== 'dnd' ? 'capitalize' : ''}>
              {args.status === 'dnd' ? 'Do not disturb' : args.status}
            </span>
          </Badge>
        </div>
        <span className="text-gray-600">203</span>
      </div>
      {/* Right */}
      <Avatar src={avatarUrl} />
    </Card.Header>
    {/* Actions */}
    <Card.Actions>
      <Dropdown items={dropdownItems} size="full">
        <div className="flex justify-center w-full h-full">
          <Button
            variant="transparent"
            size="full"
            rounded="large"
            squared="tright"
          >
            <HiDotsVertical className="h-4 w-4 text-gray-400" />
            Actions
          </Button>
        </div>
      </Dropdown>
      <div className="flex justify-center w-full">
        <Button
          variant="transparent"
          size="full"
          rounded="large"
          squared="tleft"
        >
          <HiPhone className="h-4 w-4 text-gray-400" />
          Call
        </Button>
      </div>
    </Card.Actions>
  </Card>
);

WithActions.args = {
  status: 'available',
};

export const ActionsWithContent: Story<CardProps> = (args) => (
  <Card {...args}>
    {/* Header */}
    <Card.Header>
      {/* Left */}
      <div className="flex flex-col gap-0.5">
        <div className="flex gap-3.5 items-center">
          <span className="">Stephanie Liverani</span>
          <Badge
            variant={args.status || 'available'}
            rounded="full"
            size="base"
          >
            <span className={args.status !== 'dnd' ? 'capitalize' : ''}>
              {args.status === 'dnd' ? 'Do not disturb' : args.status}
            </span>
          </Badge>
        </div>
        <span className="text-gray-600">203</span>
      </div>
      {/* Right */}
      <Avatar src={avatarUrl} />
    </Card.Header>
    {/* Content */}
    <Card.Content>
      <div className="flex justify-between">
        <span className="text-gray-600">Wonka Industries Inc.</span>
        <span className="text-gray-600">Outbound</span>
      </div>
      <div className="flex justify-between">
        <span className="text-gray-600">202-555-0150</span>
        <span className="text-gray-600">00:01:02</span>
      </div>
    </Card.Content>
    {/* Actions */}
    <Card.Actions>
      <Dropdown items={dropdownItems} size="full">
        <div className="flex justify-center w-full h-full">
          <Button
            variant="transparent"
            size="full"
            rounded="large"
            squared="tright"
          >
            <HiDotsVertical className="h-4 w-4 text-gray-400" />
            Actions
          </Button>
        </div>
      </Dropdown>
      <div className="flex justify-center w-full">
        <Button
          variant="transparent"
          size="full"
          rounded="large"
          squared="tleft"
        >
          <HiPhone className="h-4 w-4 text-gray-400" />
          Call
        </Button>
      </div>
    </Card.Actions>
  </Card>
);

ActionsWithContent.args = {
  status: 'available',
};
