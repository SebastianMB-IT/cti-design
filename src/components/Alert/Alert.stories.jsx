import React from 'react'
import { Alert } from '../..'
import { HiInformationCircle } from 'react-icons/hi'
import { AiFillEye } from 'react-icons/ai'

const meta = {
  title: 'Components/Alert',
  component: Alert,
  argTypes: {
    onClick: { action: 'clicked' },
  },
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

const Template = (args) => <Alert {...args} />

export const Action = Template.bind({})
Action.args = {
  alertTitle: 'This is a info alert',
  alertType: 'More info about this info danger goes here!',
  color: 'red',
  backgroundColor: 'red',
  icon: <HiInformationCircle />,
  iconButton: <AiFillEye />,
  isAction: true,
  isBorder: false,
  button1Title: 'View more',
  button2Title: 'Dismiss',
}

export const Border = Template.bind({})
Border.args = {
  alertType: 'A simple info alert',
  icon: <HiInformationCircle />,
  isAction: false,
  isBorder: true,
}

export const Simple = Template.bind({})
Simple.args = {
  alertType: 'A simple info alert',
  icon: <HiInformationCircle />,
  isAction: false,
  isBorder: false,
  isSimple: true,
}
