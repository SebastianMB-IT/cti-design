import React from 'react';
import { LoginSection } from '../..';
import imageFile from '../../static/images/Brand.svg';

const meta = {
  title: 'Templates/Login',
  component: LoginSection,
  argTypes: {
    onSubmit: { action: 'onSubmit' },
  },
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;

const Template = args => {
  return (
    <div className="flex justify-center items-center align-middle w-full h-screen">
      <div className="sm:w-full md:w-96">
        <LoginSection {...args} />
      </div>
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {
  title: 'Login.',
  subtitle: 'Login to your account.',
  logoUrl: imageFile,
  userPlaceholder: 'Enter your username',
  userLabel: 'Username',
  passwordPlaceholder: 'Enter your password',
  passwordLabel: 'Password',
  buttonLabel: 'Login',
  onSubmit: e => {
    console.log(e);
  },
};

export const WithLogo = Template.bind({});
WithLogo.args = {
  ...Default.args,
  withLabels: true,
  withLogo: true,
};

export const WithLabels = Template.bind({});
WithLabels.args = {
  ...Default.args,
  withLabels: true,
  withLogo: false,
};
