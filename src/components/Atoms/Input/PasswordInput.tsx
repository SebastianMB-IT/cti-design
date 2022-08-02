/**
 * It can be used to render a Input for the Password.
 *
 * @param {string} placeholder The placeholder to render.
 */

import React from 'react';

type PasswordInputProps = {
  withLabel?: boolean;
  passwordLabel?: string;
  placeholder?: string;
};

export const PasswordInput = ({
  withLabel,
  passwordLabel,
  placeholder,
}: PasswordInputProps): JSX.Element => {
  return (
    <>
      {withLabel && passwordLabel && (
        <label className="block text-sm font-medium text-neutral-600">
          {passwordLabel}
        </label>
      )}
      <input
        id="password"
        name="password"
        type="password"
        placeholder={placeholder}
        className="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"
      />
    </>
  );
};
