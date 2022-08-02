/**
 * It can be used to render a Input for the Username.
 *
 * @param {string} title The title to render.
 * @param {string} subtitle The subtitle to render.
 * @param {string} logoUrl The URL of the logo.
 * @param {string} withLogo The value that manages the visibility of the logo.
 */

import React from 'react';

type LoginHeaderProps = {
  title?: string;
  subtitle?: string;
  logoUrl?: string;
  withLogo?: boolean;
};

export const LoginHeader = ({
  title,
  subtitle,
  logoUrl,
  withLogo,
}: LoginHeaderProps): JSX.Element => {
  return logoUrl && withLogo ? (
    <div className="mb-11">
      <a href="#" className="flex justify-center text-blue-600 text-medium">
        <img src={logoUrl} />
      </a>
    </div>
  ) : (
    <>
      <h2 className="text-4xl font-extrabold text-neutral-600">{title}</h2>
      <div className="mt-4 text-base text-gray-500">
        <p>{subtitle}</p>
      </div>
    </>
  );
};
