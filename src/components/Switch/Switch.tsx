/**
 * The switch can be used to manage boolean values.
 *
 * @param {string} on To render the button on.
 * @param {string} changed The callback when changed.
 * @param {string} disabled To render the button disabled.
 * @param {string} fullRounded The burder full radius property.
 *
 */

import React, { FC, useState, useEffect } from 'react'
import classNames from 'classnames'
import { useTheme } from '../../theme/Context'
import { Switch as HeadlessSwitch } from '@headlessui/react'

interface SwitchProps {
  on?: boolean
  changed?: (enabled: boolean) => void
  disabled?: boolean
  label?: string
}

export const Switch: FC<SwitchProps> = ({ changed, on, disabled, label }): JSX.Element => {
  const [enabled, setEnabled] = useState(on || false)
  const { switch: switchTheme } = useTheme().theme
  const bgOn = disabled ? switchTheme.off.indigo : switchTheme.on.indigo
  const bgOff = disabled ? switchTheme.off.gray : switchTheme.on.gray

  const onChange = () => {
    setEnabled(!enabled)
  }

  useEffect(() => {
    changed && changed(enabled)
  }, [enabled])

  return (
    <HeadlessSwitch.Group>
      <div className='flex items-center'>
        {label && <HeadlessSwitch.Label className='mr-4'>{label}</HeadlessSwitch.Label>}
        <HeadlessSwitch
          checked={enabled}
          onChange={onChange}
          disabled={disabled}
          className={classNames(enabled ? bgOn : bgOff, switchTheme.bg)}
        >
          <span
            className={classNames(
              switchTheme.circle,
              enabled ? switchTheme.on.translate : switchTheme.off.translate,
            )}
          />
        </HeadlessSwitch>
      </div>
    </HeadlessSwitch.Group>
  )
}
