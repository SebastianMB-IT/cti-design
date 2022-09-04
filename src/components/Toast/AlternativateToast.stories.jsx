import React from 'react'
import { AlternativeToast } from '../..'
import { HiLightningBolt } from 'react-icons/hi'
import { HiCheck } from 'react-icons/hi'
import { VscInfo } from 'react-icons/vsc'
import { FiAlertTriangle } from 'react-icons/fi'
import { IoMdClose } from 'react-icons/io'

const meta = {
  title: 'Components/Toast/Alternative Toast',
  component: AlternativeToast,
  argTypes: {
    onClick: { action: 'clicked' },
    color: {
      control: {
        type: 'color',
        presetColors: ['red', 'green', 'yellow', 'blue'],
      },
    },
    backgroundColor: {
      control: {
        type: 'color',
        presetColors: ['red', 'green', 'yellow', 'blue'],
      },
    },
    enabled: {},
  },
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

const Template = (args) => <AlternativeToast {...args} />

export const Error = Template.bind({})
Error.args = {
  alertTitle: 'Error',
  alertType: 'Something thrown an error!',
  color: 'red',
  backgroundColor: 'red',
  icon: <HiLightningBolt />,
  isClosable: false,
}

export const warning = Template.bind({})
warning.args = {
  alertTitle: 'Warning',
  alertType: 'Something maybe wrong!',
  icon: <FiAlertTriangle />,
  color: '#ffc107',
  backgroundColor: '#ffc107',
  isClosable: false,
}

export const success = Template.bind({})
success.args = {
  alertTitle: 'Success',
  alertType: 'Something went Ok!',
  color: '#28a745',
  backgroundColor: '#28a745',
  icon: <HiCheck />,
  isClosable: false,
}

export const info = Template.bind({})
info.args = {
  alertTitle: 'Information',
  alertType: 'Something to know!',
  icon: <VscInfo />,
  color: '#17a2b8',
  backgroundColor: '#17a2b8',
  isClosable: false,
}
