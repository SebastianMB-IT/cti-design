/**
 * It can be used to render a label with an icon.
 *
 * @param {string} label The label to render.
 */

import React from 'react';

type LoginButtonProps = {
  label?: string;
};

export const LoginButton = ({
  label = 'Login',
}: LoginButtonProps): JSX.Element => {
  return (
    <button
      type="submit"
      className="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
    >
      {label}
    </button>
  );
};
