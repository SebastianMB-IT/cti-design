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
    variant: {
      options: ['primary', 'secondary', 'light', 'danger'],
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
  variant: 'primary',
}

export const Secondary = Template.bind({})
Secondary.args = {
  ...Primary.args,
  variant: 'secondary',
}

export const FullRounded = Template.bind({})
FullRounded.args = {
  ...Primary.args,
  variant: 'primary',
  rounded: 'full',
}

export const Light = Template.bind({})
Light.args = {
  ...Primary.args,
  variant: 'light',
}

export const Danger = Template.bind({})
Danger.args = {
  ...Primary.args,
  variant: 'danger',
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
  variant: 'primary',
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
  variant: 'primary',
}
