import React from 'react';
import { Progress } from '../..';
import { HiFire } from 'react-icons/hi';

const meta = {
  title: 'Components/Progress',
  component: Progress,
  argTypes: {},
};
export default meta;

const Template = args => <Progress {...args} />;

export const Middle = Template.bind({});
Middle.args = {
  progressPercentage: 50,
};

export const Full = Template.bind({});
Full.args = {
  progressPercentage: 100,
};

export const low = Template.bind({});
low.args = {
  progressPercentage: 10,
};
