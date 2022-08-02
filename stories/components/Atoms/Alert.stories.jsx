import React from 'react';
import { Alert } from './../../../src/';
import { HiLightningBolt } from "react-icons/hi";
import {HiCheck} from "react-icons/hi";
import {VscInfo} from "react-icons/vsc";


const meta = {
  title: 'Components/Atoms/Alert',
  component: Alert,
  argTypes: {
    onClick: { action: 'clicked' },
    color: { control: { type: 'color', presetColors: ['red', 'green', 'yellow', 'blue']} },
    backgroundColor: { control: { type: 'color', presetColors: ['red', 'green', 'yellow', 'blue']} },
    enabled: {
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template = (args) => <Alert {...args} />;

export const Error = Template.bind({});
Error.args = {
  alertTitle: "Error",
  alertType: "Something thrown an error!",
  color: "red",
  backgroundColor: "red",
  icon: <HiLightningBolt />,
};

export const warning = Template.bind({});
warning.args = {
  alertTitle: "Warning",
  alertType: "Something maybe wrong!",
  icon: <VscInfo />,
  color: '#ffc107',
  backgroundColor: '#ffc107',
};

export const success = Template.bind({});
success.args = {
  alertTitle: "Success",
  alertType: "Something went Ok!",
  color: '#28a745',
  backgroundColor: '#28a745',
  icon: <HiCheck />,
};

export const info = Template.bind({});
info.args = {
  alertTitle: "Information",
  alertType: "Something to know!",
  icon: <VscInfo />,
  color: '#17a2b8',
  backgroundColor: '#17a2b8',
};
