/**
 * It can be used to render a Input for the Username.
 *
 */

import React from 'react';
import { UsernameInput } from '../Input/UsernameInput';
import { PasswordInput } from '../Input/PasswordInput';
import { LoginButton } from '../Buttons/LoginButton';

export const LoginForm = () => {
  return (
    <>
      <div className="mt-5">
        <UsernameInput />
      </div>
      <div className="mt-5">
        <PasswordInput />
      </div>
      <div className="mt-5">
        <LoginButton />
      </div>
    </>
  );
};
