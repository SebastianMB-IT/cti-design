import React from 'react'
import { Button } from '../..'
import { HiRefresh } from 'react-icons/hi'

const meta = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    onClick: {
      table: {
        category: 'Events',
        subcategory: 'Button Events',
      },
      action: 'clicked',
    },
    styles: {
      options: ['primary', 'secondary', 'white', 'red'],
    },
  },
  parameters: {
    controls: { expanded: true },
  },
}

export default meta

const Template = (args) => <Button {...args}>Button</Button>

export const Primary = Template.bind({})
Primary.args = {
  size: 'base',
  styles: 'primary',
}

export const Secondary = Template.bind({})
Secondary.args = {
  ...Primary.args,
  styles: 'secondary',
}

export const Rounded = Template.bind({})
Rounded.args = {
  ...Primary.args,
  styles: 'primary',
  fullRounded: true,
}

export const White = Template.bind({})
White.args = {
  ...Primary.args,
  styles: 'white',
}

export const Red = Template.bind({})
Red.args = {
  ...Primary.args,
  styles: 'red',
}

const TemplateWithChild = (args) => (
  <Button {...args}>
    <HiRefresh className='h-4 w-4' />
    Button
  </Button>
)

export const WithIcon = TemplateWithChild.bind({})
WithIcon.args = {
  size: 'base',
  styles: 'primary',
}

const TemplateWithChildRight = (args) => (
  <Button {...args}>
    Button
    <HiRefresh className='h-4 w-4' />
  </Button>
)

export const WithIconRight = TemplateWithChildRight.bind({})
WithIconRight.args = {
  size: 'base',
  styles: 'primary',
}
