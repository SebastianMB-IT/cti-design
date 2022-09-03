const theme = {
  button: {
    base: 'flex content-center items-center font-medium tracking-wide capitalize transition-colors duration-200 transform focus:outline-none focus:ring focus:ring-opacity-80 gap-2',
    primary: 'focus:ring-indigo-300 bg-indigo-600 hover:bg-indigo-700 text-white',
    secondary: 'focus:ring-indigo-500 bg-indigo-200 hover:bg-indigo-300 text-indigo-600',
    white: 'border border-gray-300 focus:ring-gray-300 bg-white hover:bg-gray-100 text-gray-700',
    red: 'focus:ring-red-300 bg-red-600 hover:bg-red-700 text-white',
    fullRounded: 'rounded-full',
    rounded: 'rounded-md',
    size: {
      base: 'px-3.5 py-2',
      large: 'px-4 py-2.5'
    }
  },
  switch: {
    bg: 'relative inline-flex h-6 w-11 items-center rounded-full',
    circle: 'inline-block h-4 w-4 transform rounded-full bg-white transition ease-in-out duration-200',
    on: {
      translate: 'translate-x-6',
      gray: 'bg-gray-300',
      indigo: 'bg-indigo-600'
    },
    off: {
      translate: 'translate-x-1',
      gray: 'bg-gray-200',
      indigo: 'bg-indigo-200'
    }
  },
  input: {
    text: 'block w-full text-gray-600 placeholder-gray-300  bg-white rounded-md mt-1',
    label: 'text-sm font-medium text-gray-700',
    icon: 'absolute flex items-center',
    iconLeft: 'inset-y-0 left-0 pl-3',
    iconRight: 'inset-y-0 right-0 pr-3',
    helper: 'mt-2 text-sm text-red-600',
    colors : {
      gray: 'border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 placeholder:text-gray-400',
      error: 'border-red-500 text-red-900 focus:border-red-500 focus:ring-red-500 placeholder-red-700',
    },
    size: {
      base: 'px-3 py-2 sm:text-sm',
      lg: ''
    }
  }
}

export default theme