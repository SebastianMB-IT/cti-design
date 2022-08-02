/**
 * It can be used to render a Input for the Username.
 *
 * @param {string} userPlaceholder The placeholder to render to the user input.
 * @param {string} passwordPlaceholder The placeholder to render to the user input.
 * @param {string} buttonLabel The label to render to the login button.
 * @param {boolean} withLabels The value to show or hide the labels of inputs.
 * @param {function} onSubmit The callback to handle the form submission.
 */

import React from 'react';
import { UsernameInput } from '../Input/UsernameInput';
import { PasswordInput } from '../Input/PasswordInput';
import { LoginButton } from '../Buttons/LoginButton';

type LoginFormProps = {
  userPlaceholder?: string;
  passwordPlaceholder?: string;
  buttonLabel?: string;
  withLabels?: boolean;
  userLabel?: string;
  passwordLabel?: string;
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
};

export const LoginForm = ({
  userPlaceholder,
  passwordPlaceholder,
  buttonLabel,
  withLabels,
  userLabel,
  passwordLabel,
  onSubmit,
}: LoginFormProps): JSX.Element => {
  const elements = [
    <UsernameInput
      withLabel={withLabels}
      placeholder={userPlaceholder}
      userLabel={userLabel}
    />,
    <PasswordInput
      withLabel={withLabels}
      placeholder={passwordPlaceholder}
      passwordLabel={passwordLabel}
    />,
    <LoginButton label={buttonLabel} />,
  ];

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    onSubmit?.(event);
  };

  return (
    <form onSubmit={handleSubmit}>
      {elements.map((element, index) => {
        return (
          <div key={index} className="mt-5">
            {element}
          </div>
        );
      })}
    </form>
  );
};
