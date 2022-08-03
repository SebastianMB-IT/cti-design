import React from 'react';
import { Tabs } from '../..';

const meta = {
  title: 'Components/Tabs',
  component: Tabs,
};

export default meta;

const Template = args => <Tabs {...args} />;
export const Section = Template.bind({});
Section.args = {
  enabled: false,
  section1: 'Tab 1',
  section2: 'Tab 2',
  section3: 'Tab 3',
  content1: 'Tab 1',
  content2: 'Tab 2',
  content3: 'Tab 3',
};
