import React from 'react'
import { Card, CardProps } from '../..'
import { Story, Meta } from '@storybook/react'

const meta = {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    onClick: { action: 'clicked' },
    backgroundColor: { control: 'color' },
    enabled: {},
  },
  parameters: {
    controls: { expanded: true },
  },
}

export default meta as Meta

const Template: Story<CardProps> = (args) => <Card {...args} />

export const Base = Template.bind({})
Base.args = {
  children: (<div>Card</div>)
}
