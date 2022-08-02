import React from 'react';
import { LoginSection } from './../../../src/';

const meta = {
  title: 'Components/Organisms/LoginSection',
  component: LoginSection,
  argTypes: {
  },
  parameters: {
  },
};

export default meta;

const Template = (args) => <LoginSection {...args} />;

export const Default = Template.bind({});
Default.args = {
};