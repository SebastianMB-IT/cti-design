import React from 'react';
import { CardTitle } from '../..';

const meta = {
  title: 'Components/Card/CardTitle',
  component: CardTitle,
  argTypes: {
    enabled: {},
  },
  parameters: {
    controls: { expanded: true },
  },
};
export default meta;

const Template = args => <CardTitle {...args} />;
export const Title = Template.bind({});
Title.args = {
  title: 'Call',
};
