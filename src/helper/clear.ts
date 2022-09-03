import type { PropsWithChildren } from 'react';

export interface ClearProps {
  key: string;
  source: Record<string, unknown>;
}

export const clearClassName = (props: PropsWithChildren<object>): object => {
  return clear({
    key: 'className',
    source: props,
  });
};

const clear = ({ key, source }: ClearProps): object => {
  delete source[key];
  return source;
};

export default clear;