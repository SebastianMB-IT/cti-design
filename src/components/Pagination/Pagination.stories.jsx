import React from 'react';
import { Pagination } from '../..';

const meta = {
  title: 'Components/Pagination',
  component: Pagination,
  argTypes: {},
  parameters: {
    controls: { expanded: true },
  },
};
export default meta;

const Template = args => <Pagination {...args} />;

export const Default = Template.bind({});
Default.args = {
  isDefault: true,
  begin: 'Previous',
  end: 'Next',
};
