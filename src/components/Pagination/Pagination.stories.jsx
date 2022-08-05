import React from 'react';
import { Pagination } from '../..';
import {GrFormPrevious} from 'react-icons/gr';
import {GrFormNext} from 'react-icons/gr';

const meta = {
  title: 'Components/Pagination',
  component: Pagination,
  argTypes: {
  },
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

export const Icon = Template.bind({});
Icon.args = {
    isIcon: true,
    iconPrevious: <GrFormPrevious />,
    iconNext: <GrFormNext />,
};
