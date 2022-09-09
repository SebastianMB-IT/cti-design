const theme = {
  button: {
    base: 'flex content-center items-center justify-center font-medium tracking-wide transition-colors duration-200 transform focus:outline-none focus:ring-2 focus:ring-offset-2 gap-2',
    primary:
      'focus:ring-indigo-500 bg-indigo-600 hover:bg-indigo-700 text-white border border-transparent',
    secondary:
      'focus:ring-indigo-500 bg-indigo-200 hover:bg-indigo-300 text-indigo-600 border border-transparent',
    light:
      'border border-gray-300 focus:ring-indigo-500 bg-white hover:bg-gray-100 text-gray-700',
    danger: 'focus:ring-red-500 bg-red-600 hover:bg-red-700 text-white border border-transparent',
    rounded: {
      base: 'rounded-md',
      full: 'rounded-full'
    },
    sizes: {
      base: 'px-3.5 py-2',
      large: 'px-4 py-2.5',
    },
  },
  switch: {
    background: 'relative inline-flex h-6 w-11 items-center rounded-full',
    circle:
      'inline-block h-4 w-4 transform rounded-full bg-white transition ease-in-out duration-200',
    on: {
      translate: 'translate-x-6',
      gray: 'bg-gray-300',
      indigo: 'bg-indigo-600',
    },
    off: {
      translate: 'translate-x-1',
      gray: 'bg-gray-200',
      indigo: 'bg-indigo-200',
    }
  },
  input: {
    base: 'block w-full text-gray-600 placeholder-gray-300  bg-white mt-1 focus:z-10',
    label: 'text-sm font-medium text-gray-700',
    helper: 'mt-2 text-sm text-gray-700 text-red-600',
    size: {
      base: 'px-3 py-2 sm:text-sm',
      large: 'px-4 py-3 sm:text-md',
    },
    colors: {
      gray: 'border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 placeholder:text-gray-400',
      error:
        'border-red-500 text-red-900 focus:border-red-500 focus:ring-red-500 placeholder-red-700',
    },
    icon: {
      base: 'absolute flex items-center',
      gray: 'text-gray-500',
      red: 'text-red-600',
      left: 'inset-y-0 left-0 pl-3',
      right: 'inset-y-0 right-0 pr-3',
      size: {
        base: 'h-5 w-5',
        large: 'h-6 w-6',
      },
    },
    rounded: {
      all: 'rounded-md',
      right: 'rounded-tl-md rounded-bl-md',
      top: 'rounded-br-md rounded-bl-md',
      left: 'rounded-tr-md rounded-br-md',
      bottom: 'rounded-tl-md rounded-tr-md',
    },
  },
  modal: {
    panel: {
      base: 'relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg',
      transition: {
        enter:"ease-out duration-300",
        enterFrom:"opacity-0",
        enterTo:"opacity-100",
        leave:"ease-in duration-200",
        leaveFrom:"opacity-100",
        leaveTo:"opacity-0"
      }
    },
    content: 'bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 sm:flex sm:items-start',
    background: {
      base: 'fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity',
      transition: {
        enter:"ease-out duration-300",
        enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",
        enterTo:"opacity-100 translate-y-0 sm:scale-100",
        leave:"ease-in duration-200",
        leaveFrom:"opacity-100 translate-y-0 sm:scale-100",
        leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
      }
    },
    actions: 'bg-gray-50 px-4 py-3 flex flex-col sm:flex-row-reverse  sm:px-6 gap-3',
    sizes: {
      base: '',
      large: '',
    },
  },
};

export default theme;
