import React from 'react';
import { Alert } from '../src';

const meta = {
  title: 'Alert',
  component: Alert,
  argTypes: {
    onClick: { action: 'clicked' },
    backgroundColor: { control: 'color' },
    enabled: {
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template = (args) => <Alert {...args} />;

export const Content = Template.bind({});
Content.args = {
  alertContent: "Write the content of the alert here!",
  alertType: "Write the type of the alert here!",
};
