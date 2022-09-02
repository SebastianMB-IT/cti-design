import React from 'react';
import { Switch } from '../..';

const meta = {
  title: 'Components/Switch',
  component: Switch,
  argTypes: {
    changed: {
      action: 'changed',
      table: {
        category: 'Events',
        subcategory: 'Button Events',
      },
    }
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template = args => <Switch {...args} />;

export const Off = Template.bind({});
Off.args = {
};

export const On = Template.bind({});
On.args = {
  on: true
};

export const OffDisabled = Template.bind({});
OffDisabled.args = {
  disabled: true
};

export const OnDisabled = Template.bind({});
OnDisabled.args = {
  on: true,
  disabled: true
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: 'Enable notifications'
};
