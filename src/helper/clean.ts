import type { PropsWithChildren } from 'react'

export interface ClearProps {
  key: string
  source: Record<string, unknown>
}

export const cleanClassName = (props: PropsWithChildren<object>): object => {
  return clean({
    key: 'className',
    source: props,
  })
}

const clean = ({ key, source }: ClearProps): object => {
  delete source[key]
  return source
}

export default clean
