import React from 'react'
import { CardSubtitle } from '../..'

const meta = {
  title: 'Components/Card/CardSubtitle',
  component: CardSubtitle,
  argTypes: {
    enabled: {},
  },
  parameters: {
    controls: { expanded: true },
  },
}
export default meta

const Template = (args) => <CardSubtitle {...args} />
export const Subtitle = Template.bind({})
Subtitle.args = {
  subtitle: 'Subtitle',
}
