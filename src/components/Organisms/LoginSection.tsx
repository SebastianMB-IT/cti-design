/**
 * It can be used to render a Login form.
 *
 * @param {string} title The title to render inside header.
 * @param {string} subtitle The subtitle to render inside header.
 * @param {string} logoUrl The URL of the logo inside header.
 * @param {string} userPlaceholder The placeholder to render for the username.
 * @param {string} passwordPlaceholder The placeholder to render for the password.
 * @param {string} buttonLabel The label to render for the button.
 * @param {function} onSubmit The callback to handle the form submission.
 */

import React from 'react';
import { LoginHeader } from '../Molecules/LoginHeader';
import { LoginForm } from '../Molecules/LoginForm';

type LoginSectionProps = {
  title?: string;
  subtitle?: string;
  logoUrl?: string;
  userPlaceholder?: string;
  userLabel?: string;
  passwordPlaceholder?: string;
  passwordLabel?: string;
  buttonLabel?: string;
  withLogo?: boolean;
  withLabels?: boolean;
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
};

export const LoginSection = ({
  title,
  subtitle,
  logoUrl,
  userPlaceholder,
  userLabel,
  passwordPlaceholder,
  passwordLabel,
  buttonLabel,
  withLogo,
  withLabels,
  onSubmit,
}: LoginSectionProps): JSX.Element => {
  return (
    <div className="w-auto">
      <LoginHeader
        logoUrl={logoUrl}
        title={title}
        subtitle={subtitle}
        withLogo={withLogo}
      />
      <LoginForm
        userPlaceholder={userPlaceholder}
        userLabel={userLabel}
        passwordPlaceholder={passwordPlaceholder}
        passwordLabel={passwordLabel}
        buttonLabel={buttonLabel}
        withLabels={withLabels}
        onSubmit={onSubmit}
      />
    </div>
  );
};
