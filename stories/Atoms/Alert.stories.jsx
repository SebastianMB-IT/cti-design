import React from 'react';
import { Alert } from './../../src';
import { HiLightningBolt } from "react-icons/hi";

const meta = {
  title: 'Components/Atoms/Alert',
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
  alertType: "Write the type of the alert here!",
  icon: <HiLightningBolt />,
};
