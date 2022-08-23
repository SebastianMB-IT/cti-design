import React from 'react';
import { ListGroup } from '../..';
import { CgProfile } from 'react-icons/cg';
import { GiSettingsKnobs } from 'react-icons/gi';
import { HiInbox } from 'react-icons/hi';

const meta = {
  title: 'Components/ListGroup',
  component: ListGroup,
  argTypes: {
    enabled: {},
  },
};
export default meta;

const Template = args => <ListGroup {...args} />;

export const Default = Template.bind({});
Default.args = {
  isDefault: true,
  elementList1: 'List Group Item 1',
  elementList2: 'List Group Item 2',
  elementList3: 'List Group Item 3',
};

export const Link = Template.bind({});
Link.args = {
  isLink: true,
  elementList1: 'List Group Item 1',
  elementList2: 'List Group Item 2',
  elementList3: 'List Group Item 3',
};

export const Button = Template.bind({});
Button.args = {
  isButton: true,
  elementList1: 'List Group Item 1',
  elementList2: 'List Group Item 2',
  elementList3: 'List Group Item 3',
};

export const Icon = Template.bind({});
Icon.args = {
  isIcon: true,
  elementList1: 'List Group Item 1',
  elementList2: 'List Group Item 2',
  elementList3: 'List Group Item 3',
  iconElementList1: <CgProfile />,
  iconElementList2: <GiSettingsKnobs />,
  iconElementList3: <HiInbox />,
};
