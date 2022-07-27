import { HTMLAttributes, ReactNode } from 'react';
export interface Props extends HTMLAttributes<HTMLDivElement> {
  /** custom content, defaults to 'the snozzberries taste like snozzberries' */
  children?: ReactNode;
}

/**
 *
 * Please do not use types off of a default export module or else Storybook Docs will suffer.
 *
 * see: https://github.com/storybookjs/storybook/issues/9556
 *
 * */

// Input exports
export * from './components/Input/TextInput';
export * from './components/Input/PasswordInput';
export * from './components/Input/ToggleSwitch';
export * from './components/Input/SearchInput';

export * from './components/Alert';
export * from './components/Button';
export * from './components/ButtonAvatar';
export * from './components/CallDropdown';
export * from './components/Card';
export * from './components/CardTitle';
export * from './components/CardSubtitle';
export * from './components/Checkbox';
export * from './components/Dropdown';
export * from './components/RoundedAvatar';
export * from './components/Segment';
export * from './components/SquaredAvatar';
export * from './components/StatusDot';
export * from './components/Tab';
export * from './components/Buttons/ButtonIcon';
