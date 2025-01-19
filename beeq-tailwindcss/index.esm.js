import plugin from 'tailwindcss/plugin';
import ThemeSwapper from 'tailwindcss-theme-swapper';

const blendColor = ({
  color,
  base,
  percentage = 20,
  property = 'background-color'
}) => ({
  [property]: `color-mix(in srgb, ${color}, ${base} ${percentage}%)`
});

const {
  default: flattenColorPalette$1
} = require('tailwindcss/lib/util/flattenColorPalette');
const ColorMix = plugin(function ({
  matchUtilities,
  theme
}) {
  matchUtilities({
    'bg-hover': value => blendColor({
      color: value,
      base: 'var(--bq-hover)'
    }),
    'bg-active': value => blendColor({
      color: value,
      base: 'var(--bq-active)'
    }),
    'border-hover': value => blendColor({
      color: value,
      base: 'var(--bq-hover)',
      property: 'border-color'
    }),
    'border-active': value => blendColor({
      color: value,
      base: 'var(--bq-active)',
      property: 'border-color'
    }),
    'text-hover': value => blendColor({
      color: value,
      base: 'var(--bq-hover)',
      property: 'color'
    }),
    'text-active': value => blendColor({
      color: value,
      base: 'var(--bq-active)',
      property: 'color'
    })
  }, {
    values: flattenColorPalette$1(theme('colors'))
  });
  matchUtilities({
    'bg-hover': value => blendColor({
      color: value,
      base: 'var(--bq-hover)'
    }),
    'bg-active': value => blendColor({
      color: value,
      base: 'var(--bq-active)'
    })
  }, {
    values: flattenColorPalette$1(theme('backgroundColor'))
  });
  matchUtilities({
    'border-hover': value => blendColor({
      color: value,
      base: 'var(--bq-hover)',
      property: 'border-color'
    }),
    'border-active': value => blendColor({
      color: value,
      base: 'var(--bq-active)',
      property: 'border-color'
    })
  }, {
    values: flattenColorPalette$1(theme('borderColor'))
  });
  matchUtilities({
    'text-hover': value => blendColor({
      color: value,
      base: 'var(--bq-hover)',
      property: 'color'
    }),
    'text-active': value => blendColor({
      color: value,
      base: 'var(--bq-active)',
      property: 'color'
    })
  }, {
    values: flattenColorPalette$1(theme('textColor'))
  });
  matchUtilities({
    'stroke-hover': value => blendColor({
      color: value,
      base: 'var(--bq-hover)',
      property: 'color'
    }),
    'stroke-active': value => blendColor({
      color: value,
      base: 'var(--bq-active)',
      property: 'color'
    })
  }, {
    values: flattenColorPalette$1(theme('stroke'))
  });
});

const {
  default: flattenColorPalette
} = require('tailwindcss/lib/util/flattenColorPalette');
const LogicalProperties = plugin(function ({
  matchUtilities,
  theme
}) {
  matchUtilities({
    'border-bl': value => ({
      'border-block-width': value
    }),
    'border-bs': value => ({
      'border-block-start-width': value
    }),
    'border-be': value => ({
      'border-block-end-width': value
    }),
    'border-i': value => ({
      'border-inline-width': value
    }),
    'border-is': value => ({
      'border-inline-start-width': value
    }),
    'border-ie': value => ({
      'border-inline-end-width': value
    })
  }, {
    values: theme('borderWidth')
  });
  matchUtilities({
    'border-bl': value => ({
      'border-block-color': value
    }),
    'border-bs': value => ({
      'border-block-start-color': value
    }),
    'border-be': value => ({
      'border-block-end-color': value
    }),
    'border-i': value => ({
      'border-inline-color': value
    }),
    'border-is': value => ({
      'border-inline-start-color': value
    }),
    'border-ie': value => ({
      'border-inline-end-color': value
    })
  }, {
    values: flattenColorPalette(theme('colors'))
  });
  matchUtilities({
    bs: value => ({
      'block-size': value
    }),
    'max-bs': value => ({
      'max-block-size': value
    }),
    'min-bs': value => ({
      'min-block-size': value
    }),
    is: value => ({
      'inline-size': value
    }),
    'max-is': value => ({
      'max-inline-size': value
    }),
    'min-is': value => ({
      'min-inline-size': value
    })
  }, {
    values: theme('width')
  });
  matchUtilities({
    'border-bl': value => ({
      'border-block': value
    }),
    'border-bs': value => ({
      'border-block-start': value
    }),
    'border-be': value => ({
      'border-block-end': value
    }),
    'border-i': value => ({
      'border-inline': value
    }),
    'border-is': value => ({
      'border-inline-start': value
    }),
    'border-ie': value => ({
      'border-inline-end': value
    }),
    'p-b': value => ({
      'padding-block': value
    }),
    'p-bs': value => ({
      'padding-block-start': value
    }),
    'p-be': value => ({
      'padding-block-end': value
    }),
    'p-i': value => ({
      'padding-inline': value
    })
  }, {
    values: theme('spacing')
  });
  matchUtilities({
    'inset-b': value => ({
      'inset-block': value
    }),
    'inset-bs': value => ({
      'inset-block-start': value
    }),
    'inset-be': value => ({
      'inset-block-end': value
    }),
    'inset-i': value => ({
      'inset-inline': value
    }),
    'inset-is': value => ({
      'inset-inline-start': value
    }),
    'inset-ie': value => ({
      'inset-inline-end': value
    }),
    'm-b': value => ({
      'margin-block': value
    }),
    'm-bs': value => ({
      'margin-block-start': value
    }),
    'm-be': value => ({
      'margin-block-end': value
    }),
    'm-i': value => ({
      'margin-inline': value
    })
  }, {
    values: theme('spacing'),
    supportsNegativeValues: true
  });
});

const CSS_COLORS = {
  '--bq-blue-100': '#e7f0fd',
  '--bq-blue-200': '#d0e2fb',
  '--bq-blue-300': '#a1c5f7',
  '--bq-blue-400': '#73a8f3',
  '--bq-blue-500': '#448bef',
  '--bq-blue-600': '#156eeb',
  '--bq-blue-700': '#1158bc',
  '--bq-blue-800': '#0d428d',
  '--bq-blue-900': '#082c5e',
  '--bq-blue-1000': '#04162f',
  '--bq-corai-100': '#fff2f2',
  '--bq-corai-200': '#ffe6e6',
  '--bq-corai-300': '#ffccce',
  '--bq-corai-400': '#ffb3b5',
  '--bq-corai-500': '#ff999d',
  '--bq-corai-600': '#ff8084',
  '--bq-corai-700': '#cc666a',
  '--bq-corai-800': '#994d4f',
  '--bq-corai-900': '#663335',
  '--bq-corai-1000': '#331a1a',
  '--bq-cyan-100': '#e8f7fb',
  '--bq-cyan-200': '#d2f0f8',
  '--bq-cyan-300': '#a5e1f1',
  '--bq-cyan-400': '#78d1e9',
  '--bq-cyan-500': '#4bc2e2',
  '--bq-cyan-600': '#1eb3db',
  '--bq-cyan-700': '#188faf',
  '--bq-cyan-800': '#126b83',
  '--bq-cyan-900': '#0c4858',
  '--bq-cyan-1000': '#06242c',
  '--bq-gold-100': '#fbf4ec',
  '--bq-gold-200': '#f7e9da',
  '--bq-gold-300': '#f0d3b6',
  '--bq-gold-400': '#e8bc91',
  '--bq-gold-500': '#e1a66d',
  '--bq-gold-600': '#d99048',
  '--bq-gold-700': '#ae733a',
  '--bq-gold-800': '#82562b',
  '--bq-gold-900': '#573a1d',
  '--bq-gold-1000': '#2b1d0e',
  '--bq-green-100': '#e8f8ef',
  '--bq-green-200': '#d2f1e0',
  '--bq-green-300': '#a5e3c1',
  '--bq-green-400': '#78d5a1',
  '--bq-green-500': '#4bc782',
  '--bq-green-600': '#1eb963',
  '--bq-green-700': '#18944f',
  '--bq-green-800': '#126f3b',
  '--bq-green-900': '#0c4a28',
  '--bq-green-1000': '#062514',
  '--bq-grey-100': '#f1f2f4',
  '--bq-grey-200': '#e7e8eb',
  '--bq-grey-300': '#caccd2',
  '--bq-grey-400': '#a6aab3',
  '--bq-grey-50': '#f6f6f8',
  '--bq-grey-500': '#898e99',
  '--bq-grey-600': '#646a77',
  '--bq-grey-700': '#3f4350',
  '--bq-grey-800': '#2a2c35',
  '--bq-grey-900': '#1c1d23',
  '--bq-grey-950': '#15161a',
  '--bq-grey-1000': '#0d0e11',
  '--bq-indigo-100': '#edecfc',
  '--bq-indigo-200': '#dcdafa',
  '--bq-indigo-300': '#b9b5f5',
  '--bq-indigo-400': '#9590ef',
  '--bq-indigo-500': '#726bea',
  '--bq-indigo-600': '#4f46e5',
  '--bq-indigo-700': '#3f38b7',
  '--bq-indigo-800': '#2f2a89',
  '--bq-indigo-900': '#201c5c',
  '--bq-indigo-1000': '#100e2e',
  '--bq-iris-100': '#e9f0ff',
  '--bq-iris-200': '#d6e0ff',
  '--bq-iris-300': '#b2c0fe',
  '--bq-iris-400': '#8691f8',
  '--bq-iris-500': '#6061ee',
  '--bq-iris-600': '#4f46e5',
  '--bq-iris-700': '#413abd',
  '--bq-iris-800': '#332e95',
  '--bq-iris-900': '#26216d',
  '--bq-iris-1000': '#181545',
  '--bq-lime-100': '#f5fae8',
  '--bq-lime-200': '#ecf6d2',
  '--bq-lime-300': '#d9eda5',
  '--bq-lime-400': '#c5e379',
  '--bq-lime-500': '#b2da4c',
  '--bq-lime-600': '#9fd11f',
  '--bq-lime-700': '#7fa719',
  '--bq-lime-800': '#5f7d13',
  '--bq-lime-900': '#40540c',
  '--bq-lime-1000': '#202a06',
  '--bq-magenta-100': '#fce7f4',
  '--bq-magenta-200': '#f9cfea',
  '--bq-magenta-300': '#f39fd6',
  '--bq-magenta-400': '#ee6fbf',
  '--bq-magenta-500': '#e83fab',
  '--bq-magenta-600': '#de1395',
  '--bq-magenta-700': '#b20f77',
  '--bq-magenta-800': '#850c59',
  '--bq-magenta-900': '#58083c',
  '--bq-magenta-1000': '#2c041e',
  '--bq-neutral-white': '#fbfbfc',
  '--bq-neutral-black': '#060708',
  '--bq-orange-100': '#fbf0e9',
  '--bq-orange-200': '#f8e1d4',
  '--bq-orange-300': '#f1c2a8',
  '--bq-orange-400': '#eaa47d',
  '--bq-orange-500': '#e38551',
  '--bq-orange-600': '#dc6726',
  '--bq-orange-700': '#b0521e',
  '--bq-orange-800': '#843e17',
  '--bq-orange-900': '#58290f',
  '--bq-orange-1000': '#2c1508',
  '--bq-purple-100': '#efebf8',
  '--bq-purple-200': '#e0d7f2',
  '--bq-purple-300': '#c1afe5',
  '--bq-purple-400': '#a388d8',
  '--bq-purple-500': '#8460cb',
  '--bq-purple-600': '#6538be',
  '--bq-purple-700': '#512d98',
  '--bq-purple-800': '#3d2272',
  '--bq-purple-900': '#28164c',
  '--bq-purple-1000': '#140b26',
  '--bq-red-100': '#fce7ea',
  '--bq-red-200': '#f9d1d5',
  '--bq-red-300': '#f3a2ac',
  '--bq-red-400': '#ed7482',
  '--bq-red-500': '#e74559',
  '--bq-red-600': '#e1172f',
  '--bq-red-700': '#b41226',
  '--bq-red-800': '#870e1c',
  '--bq-red-900': '#5a0913',
  '--bq-red-1000': '#2d0509',
  '--bq-sky-100': '#eff4fb',
  '--bq-sky-200': '#dfeaf8',
  '--bq-sky-300': '#bfd5f1',
  '--bq-sky-400': '#9ec1e9',
  '--bq-sky-500': '#7eace2',
  '--bq-sky-600': '#5e97db',
  '--bq-sky-700': '#4b79af',
  '--bq-sky-800': '#385b83',
  '--bq-sky-900': '#263c58',
  '--bq-sky-1000': '#131e2c',
  '--bq-teal-100': '#e5f7f5',
  '--bq-teal-200': '#ccf0eb',
  '--bq-teal-300': '#99e1d8',
  '--bq-teal-400': '#66d2c4',
  '--bq-teal-500': '#33c3b1',
  '--bq-teal-600': '#00b49d',
  '--bq-teal-700': '#00907e',
  '--bq-teal-800': '#006c5e',
  '--bq-teal-900': '#00483f',
  '--bq-teal-1000': '#00241f',
  '--bq-volcano-100': '#feede7',
  '--bq-volcano-200': '#fddbd1',
  '--bq-volcano-300': '#fbb8a3',
  '--bq-volcano-400': '#fa9474',
  '--bq-volcano-500': '#f87146',
  '--bq-volcano-600': '#f64d18',
  '--bq-volcano-700': '#c53e13',
  '--bq-volcano-800': '#942e0e',
  '--bq-volcano-900': '#621f0a',
  '--bq-volcano-1000': '#310f05',
  '--bq-yellow-100': '#fefbe7',
  '--bq-yellow-200': '#fcf6d0',
  '--bq-yellow-300': '#faeea0',
  '--bq-yellow-400': '#f7e571',
  '--bq-yellow-500': '#f5dd41',
  '--bq-yellow-600': '#f2d412',
  '--bq-yellow-700': '#c2aa0e',
  '--bq-yellow-800': '#917f0b',
  '--bq-yellow-900': '#615507',
  '--bq-yellow-1000': '#302a04',
  '--bq-endava-grey-50': '#f7f7f8',
  '--bq-endava-grey-100': '#e4e6e7',
  '--bq-endava-grey-200': '#b5babe',
  '--bq-endava-grey-300': '#949ca1',
  '--bq-endava-grey-400': '#737d84',
  '--bq-endava-grey-500': '#525f67',
  '--bq-endava-grey-600': '#30404b',
  '--bq-endava-grey-700': '#2b3942',
  '--bq-endava-grey-800': '#263139',
  '--bq-endava-grey-900': '#192b37',
  '--bq-endava-grey-950': '#151b1e',
  '--bq-endava-grey-1000': '#0f1316',
  '--bq-endava-neutral-white': '#fafbfb',
  '--bq-endava-neutral-black': '#060708',
  '--bq-endava-orange-100': '#fef3f1',
  '--bq-endava-orange-200': '#fbd6d1',
  '--bq-endava-orange-300': '#fab7af',
  '--bq-endava-orange-400': '#fa988b',
  '--bq-endava-orange-500': '#fc7866',
  '--bq-endava-orange-600': '#ff5640',
  '--bq-endava-orange-700': '#ce4a39',
  '--bq-endava-orange-800': '#a03d30',
  '--bq-endava-orange-900': '#722e25',
  '--bq-endava-orange-1000': '#471e19',
  '--bq-flypass-green-100': '#E1EA80',
  '--bq-flypass-green-200': '#D9E560',
  '--bq-flypass-green-300': '#D1E040',
  '--bq-flypass-green-400': '#CADA20',
  '--bq-flypass-green-500': '#C2D500',
  '--bq-flypass-green-600': '#AFBF00',
  '--bq-flypass-green-700': '#9BAA00',
  '--bq-flypass-green-800': '#889500',
  '--bq-flypass-green-900': '#738000',
  '--bq-flypass-dark-grey-100': '#BBBBBB',
  '--bq-flypass-dark-grey-200': '#A4A4A4',
  '--bq-flypass-dark-grey-300': '#8D8D8D',
  '--bq-flypass-dark-grey-400': '#767676',
  '--bq-flypass-dark-grey-500': '#606060',
  '--bq-flypass-dark-grey-600': '#494949',
  '--bq-flypass-dark-grey-700': '#323232',
  '--bq-flypass-dark-grey-800': '#2C2C2C',
  '--bq-flypass-dark-grey-900': '#272727',
  '--bq-flypass-sky-100': '#A0E1F0',
  '--bq-flypass-sky-200': '#5FCDE5',
  '--bq-flypass-sky-300': '#11B5D9',
  '--bq-flypass-sky-400': '#0F9EBD',
  '--bq-flypass-sky-500': '#0D87A2',
  '--bq-flypass-sky-600': '#0A6F86',
  '--bq-flypass-sky-700': '#085A6C',
  '--bq-flypass-sky-800': '#074553',
  '--bq-flypass-sky-900': '#05303A',
  '--bq-flypass-blue-100': '#CFE3F7',
  '--bq-flypass-blue-200': '#A0C8F0',
  '--bq-flypass-blue-300': '#70ACE8',
  '--bq-flypass-blue-400': '#4191E1',
  '--bq-flypass-blue-500': '#1175D9',
  '--bq-flypass-blue-600': '#0E5EAE',
  '--bq-flypass-blue-700': '#0A4682',
  '--bq-flypass-blue-800': '#072F57',
  '--bq-flypass-blue-900': '#03172B',
  '--bq-flypass-orange-100': '#FFDDC7',
  '--bq-flypass-orange-200': '#FFCCAB',
  '--bq-flypass-orange-300': '#FFAB74',
  '--bq-flypass-orange-400': '#FF812D',
  '--bq-flypass-orange-500': '#E17228',
  '--bq-flypass-orange-600': '#C16222',
  '--bq-flypass-orange-700': '#9F501C',
  '--bq-flypass-orange-800': '#804117',
  '--bq-flypass-orange-900': '#633211',
  '--bq-flypass-violet-100': '#E3CDFF',
  '--bq-flypass-violet-200': '#B179FF',
  '--bq-flypass-violet-300': '#9747FF',
  '--bq-flypass-violet-400': '#7C3BD2',
  '--bq-flypass-violet-500': '#6A32B4',
  '--bq-flypass-violet-600': '#5B2B9B',
  '--bq-flypass-violet-700': '#4F2585',
  '--bq-flypass-violet-800': '#4F2585',
  '--bq-flypass-violet-900': '#391C62',
  '--bq-flypass-yellow-100': '#FFDF8E',
  '--bq-flypass-yellow-200': '#FFD773',
  '--bq-flypass-yellow-300': '#FFCF57',
  '--bq-flypass-yellow-400': '#FFC73A',
  '--bq-flypass-yellow-500': '#FFBF1F',
  '--bq-flypass-yellow-600': '#DFA61D',
  '--bq-flypass-yellow-700': '#BF8F18',
  '--bq-flypass-yellow-800': '#9F7713',
  '--bq-flypass-yellow-900': '#806010',
  '--bq-flypass-red-100': '#F9CCCC',
  '--bq-flypass-red-200': '#F6ADAD',
  '--bq-flypass-red-300': '#EF8E8C',
  '--bq-flypass-red-400': '#ED6766',
  '--bq-flypass-red-500': '#E84241',
  '--bq-flypass-red-600': '#BC3535',
  '--bq-flypass-red-700': '#982C2B',
  '--bq-flypass-red-800': '#752121',
  '--bq-flypass-red-900': '#541718',
  '--bq-flypass-blue-grey-100': '#D3D7DD',
  '--bq-flypass-blue-grey-200': '#BCC2CB',
  '--bq-flypass-blue-grey-300': '#A5ADBB',
  '--bq-flypass-blue-grey-400': '#8F98AA',
  '--bq-flypass-blue-grey-500': '#798499',
  '--bq-flypass-blue-grey-600': '#657189',
  '--bq-flypass-blue-grey-700': '#545E72',
  '--bq-flypass-blue-grey-800': '#434C5C',
  '--bq-flypass-blue-grey-900': '#343A47',
  '--bq-flypass-grey-100': '#FFFFFF',
  '--bq-flypass-grey-200': '#F5F5F5',
  '--bq-flypass-grey-300': '#EFEFEF',
  '--bq-flypass-grey-400': '#E9E9E9',
  '--bq-flypass-grey-500': '#E3E3E3',
  '--bq-flypass-grey-600': '#DCDCDC',
  '--bq-flypass-grey-700': '#D6D6D6',
  '--bq-flypass-grey-800': '#D0D0D0',
  '--bq-flypass-grey-900': '#CACACA',
  '--bq-flypass-light-100': '#FFFFFF',
  '--bq-flypass-light-200': '#F5F5F5',
  '--bq-flypass-light-300': '#F4F7FA',
  '--bq-flypass-light-400': '#DDE8F2',
  '--bq-flypass-light-500': '#D3D7DD',
  '--bq-flypass-light-600': '#657189',
  '--bq-flypass-dart-100': '#A1A1A1',
  '--bq-flypass-dart-200': '#515151',
  '--bq-flypass-dart-300': '#404040',
  '--bq-flypass-dart-400': '#2A2A2A',
  '--bq-flypass-dart-500': '#1B1B1B',
  '--bq-flypass-dart-600': '#0E100F'
};

const DECLARATIVE_COLORS = {
  bg: {
    primary: 'var(--bq-background--primary)',
    secondary: 'var(--bq-background--secondary)',
    tertiary: 'var(--bq-background--tertiary)',
    alt: 'var(--bq-background--alt)',
    inverse: 'var(--bq-background--inverse)',
    brand: 'var(--bq-background--brand)',
    overlay: 'var(--bq-background--overlay)'
  },
  data: {
    '01': 'var(--bq-data-01)',
    '02': 'var(--bq-data-02)',
    '03': 'var(--bq-data-03)',
    '04': 'var(--bq-data-04)',
    '05': 'var(--bq-data-05)',
    '06': 'var(--bq-data-06)',
    '07': 'var(--bq-data-07)',
    '08': 'var(--bq-data-08)',
    '09': 'var(--bq-data-09)',
    '10': 'var(--bq-data-10)',
    '11': 'var(--bq-data-11)',
    '12': 'var(--bq-data-12)'
  },
  focus: 'var(--bq-focus)',
  icon: {
    primary: 'var(--bq-icon--primary)',
    alt: 'var(--bq-icon--alt)',
    secondary: 'var(--bq-icon--secondary)',
    inverse: 'var(--bq-icon--inverse)',
    brand: 'var(--bq-icon--brand)',
    info: 'var(--bq-icon--info)',
    success: 'var(--bq-icon--success)',
    warning: 'var(--bq-icon--warning)',
    danger: 'var(--bq-icon--danger)'
  },
  state: {
    hover: 'var(--bq-state--hover)',
    active: 'var(--bq-state--active)'
  },
  stroke: {
    primary: 'var(--bq-stroke--primary)',
    secondary: 'var(--bq-stroke--secondary)',
    tertiary: 'var(--bq-stroke--tertiary)',
    inverse: 'var(--bq-stroke--inverse)',
    brand: 'var(--bq-stroke--brand)',
    alt: 'var(--bq-stroke--alt)',
    success: 'var(--bq-stroke--success)',
    warning: 'var(--bq-stroke--warning)',
    danger: 'var(--bq-stroke--danger)'
  },
  text: {
    primary: 'var(--bq-text--primary)',
    alt: 'var(--bq-text--alt)',
    secondary: 'var(--bq-text--secondary)',
    inverse: 'var(--bq-text--inverse)',
    brand: 'var(--bq-text--brand)',
    info: 'var(--bq-text--info)',
    success: 'var(--bq-text--success)',
    warning: 'var(--bq-text--warning)',
    danger: 'var(--bq-text--danger)'
  },
  ui: {
    primary: 'var(--bq-ui--primary)',
    alt: 'var(--bq-ui--alt)',
    secondary: 'var(--bq-ui--secondary)',
    tertiary: 'var(--bq-ui--tertiary)',
    inverse: 'var(--bq-ui--inverse)',
    brand: 'var(--bq-ui--brand)',
    'brand-alt': 'var(--bq-ui--brand-alt)',
    success: 'var(--bq-ui--success)',
    'success-alt': 'var(--bq-ui--success-alt)',
    warning: 'var(--bq-ui--warning)',
    'warning-alt': 'var(--bq-ui--warning-alt)',
    danger: 'var(--bq-ui--danger)',
    'danger-alt': 'var(--bq-ui--danger-alt)'
  }
};

const PRIMITIVE_COLORS = {
  blue: {
    100: 'var(--bq-blue-100)',
    200: 'var(--bq-blue-200)',
    300: 'var(--bq-blue-300)',
    400: 'var(--bq-blue-400)',
    500: 'var(--bq-blue-500)',
    600: 'var(--bq-blue-600)',
    700: 'var(--bq-blue-700)',
    800: 'var(--bq-blue-800)',
    900: 'var(--bq-blue-900)',
    1000: 'var(--bq-blue-1000)'
  },
  corai: {
    100: 'var(--bq-corai-100)',
    200: 'var(--bq-corai-200)',
    300: 'var(--bq-corai-300)',
    400: 'var(--bq-corai-400)',
    500: 'var(--bq-corai-500)',
    600: 'var(--bq-corai-600)',
    700: 'var(--bq-corai-700)',
    800: 'var(--bq-corai-800)',
    900: 'var(--bq-corai-900)',
    1000: 'var(--bq-corai-1000)'
  },
  cyan: {
    100: 'var(--bq-cyan-100)',
    200: 'var(--bq-cyan-200)',
    300: 'var(--bq-cyan-300)',
    400: 'var(--bq-cyan-400)',
    500: 'var(--bq-cyan-500)',
    600: 'var(--bq-cyan-600)',
    700: 'var(--bq-cyan-700)',
    800: 'var(--bq-cyan-800)',
    900: 'var(--bq-cyan-900)',
    1000: 'var(--bq-cyan-1000)'
  },
  gold: {
    100: 'var(--bq-gold-100)',
    200: 'var(--bq-gold-200)',
    300: 'var(--bq-gold-300)',
    400: 'var(--bq-gold-400)',
    500: 'var(--bq-gold-500)',
    600: 'var(--bq-gold-600)',
    700: 'var(--bq-gold-700)',
    800: 'var(--bq-gold-800)',
    900: 'var(--bq-gold-900)',
    1000: 'var(--bq-gold-1000)'
  },
  green: {
    100: 'var(--bq-green-100)',
    200: 'var(--bq-green-200)',
    300: 'var(--bq-green-300)',
    400: 'var(--bq-green-400)',
    500: 'var(--bq-green-500)',
    600: 'var(--bq-green-600)',
    700: 'var(--bq-green-700)',
    800: 'var(--bq-green-800)',
    900: 'var(--bq-green-900)',
    1000: 'var(--bq-green-1000)'
  },
  grey: {
    50: 'var(--bq-grey-50)',
    100: 'var(--bq-grey-100)',
    200: 'var(--bq-grey-200)',
    300: 'var(--bq-grey-300)',
    400: 'var(--bq-grey-400)',
    500: 'var(--bq-grey-500)',
    600: 'var(--bq-grey-600)',
    700: 'var(--bq-grey-700)',
    800: 'var(--bq-grey-800)',
    900: 'var(--bq-grey-900)',
    950: 'var(--bq-grey-950)',
    1000: 'var(--bq-grey-1000)'
  },
  indigo: {
    100: 'var(--bq-indigo-100)',
    200: 'var(--bq-indigo-200)',
    300: 'var(--bq-indigo-300)',
    400: 'var(--bq-indigo-400)',
    500: 'var(--bq-indigo-500)',
    600: 'var(--bq-indigo-600)',
    700: 'var(--bq-indigo-700)',
    800: 'var(--bq-indigo-800)',
    900: 'var(--bq-indigo-900)',
    1000: 'var(--bq-indigo-1000)'
  },
  iris: {
    100: 'var(--bq-iris-100)',
    200: 'var(--bq-iris-200)',
    300: 'var(--bq-iris-300)',
    400: 'var(--bq-iris-400)',
    500: 'var(--bq-iris-500)',
    600: 'var(--bq-iris-600)',
    700: 'var(--bq-iris-700)',
    800: 'var(--bq-iris-800)',
    900: 'var(--bq-iris-900)',
    1000: 'var(--bq-iris-1000)'
  },
  lime: {
    100: 'var(--bq-lime-100)',
    200: 'var(--bq-lime-200)',
    300: 'var(--bq-lime-300)',
    400: 'var(--bq-lime-400)',
    500: 'var(--bq-lime-500)',
    600: 'var(--bq-lime-600)',
    700: 'var(--bq-lime-700)',
    800: 'var(--bq-lime-800)',
    900: 'var(--bq-lime-900)',
    1000: 'var(--bq-lime-1000)'
  },
  magenta: {
    100: 'var(--bq-magenta-100)',
    200: 'var(--bq-magenta-200)',
    300: 'var(--bq-magenta-300)',
    400: 'var(--bq-magenta-400)',
    500: 'var(--bq-magenta-500)',
    600: 'var(--bq-magenta-600)',
    700: 'var(--bq-magenta-700)',
    800: 'var(--bq-magenta-800)',
    900: 'var(--bq-magenta-900)',
    1000: 'var(--bq-magenta-1000)'
  },
  neutral: {
    white: 'var(--bq-neutral-white)',
    black: 'var(--bq-neutral-black)'
  },
  orange: {
    100: 'var(--bq-orange-100)',
    200: 'var(--bq-orange-200)',
    300: 'var(--bq-orange-300)',
    400: 'var(--bq-orange-400)',
    500: 'var(--bq-orange-500)',
    600: 'var(--bq-orange-600)',
    700: 'var(--bq-orange-700)',
    800: 'var(--bq-orange-800)',
    900: 'var(--bq-orange-900)',
    1000: 'var(--bq-orange-1000)'
  },
  purple: {
    100: 'var(--bq-purple-100)',
    200: 'var(--bq-purple-200)',
    300: 'var(--bq-purple-300)',
    400: 'var(--bq-purple-400)',
    500: 'var(--bq-purple-500)',
    600: 'var(--bq-purple-600)',
    700: 'var(--bq-purple-700)',
    800: 'var(--bq-purple-800)',
    900: 'var(--bq-purple-900)',
    1000: 'var(--bq-purple-1000)'
  },
  red: {
    100: 'var(--bq-red-100)',
    200: 'var(--bq-red-200)',
    300: 'var(--bq-red-300)',
    400: 'var(--bq-red-400)',
    500: 'var(--bq-red-500)',
    600: 'var(--bq-red-600)',
    700: 'var(--bq-red-700)',
    800: 'var(--bq-red-800)',
    900: 'var(--bq-red-900)',
    1000: 'var(--bq-red-1000)'
  },
  sky: {
    100: 'var(--bq-sky-100)',
    200: 'var(--bq-sky-200)',
    300: 'var(--bq-sky-300)',
    400: 'var(--bq-sky-400)',
    500: 'var(--bq-sky-500)',
    600: 'var(--bq-sky-600)',
    700: 'var(--bq-sky-700)',
    800: 'var(--bq-sky-800)',
    900: 'var(--bq-sky-900)',
    1000: 'var(--bq-sky-1000)'
  },
  teal: {
    100: 'var(--bq-teal-100)',
    200: 'var(--bq-teal-200)',
    300: 'var(--bq-teal-300)',
    400: 'var(--bq-teal-400)',
    500: 'var(--bq-teal-500)',
    600: 'var(--bq-teal-600)',
    700: 'var(--bq-teal-700)',
    800: 'var(--bq-teal-800)',
    900: 'var(--bq-teal-900)',
    1000: 'var(--bq-teal-1000)'
  },
  volcano: {
    100: 'var(--bq-volcano-100)',
    200: 'var(--bq-volcano-200)',
    300: 'var(--bq-volcano-300)',
    400: 'var(--bq-volcano-400)',
    500: 'var(--bq-volcano-500)',
    600: 'var(--bq-volcano-600)',
    700: 'var(--bq-volcano-700)',
    800: 'var(--bq-volcano-800)',
    900: 'var(--bq-volcano-900)',
    1000: 'var(--bq-volcano-1000)'
  },
  yellow: {
    100: 'var(--bq-yellow-100)',
    200: 'var(--bq-yellow-200)',
    300: 'var(--bq-yellow-300)',
    400: 'var(--bq-yellow-400)',
    500: 'var(--bq-yellow-500)',
    600: 'var(--bq-yellow-600)',
    700: 'var(--bq-yellow-700)',
    800: 'var(--bq-yellow-800)',
    900: 'var(--bq-yellow-900)',
    1000: 'var(--bq-yellow-1000)'
  }
};

const DefaultDarkTheme = {
  'bq-background--primary': 'var(--bq-neutral-1000)',
  'bq-background--secondary': 'var(--bq-neutral-950)',
  'bq-background--tertiary': 'var(--bq-neutral-800)',
  'bq-background--alt': 'var(--bq-neutral-700)',
  'bq-background--inverse': 'var(--bq-neutral-600)',
  'bq-background--brand': 'var(--bq-brand)',
  'bq-background--overlay': 'var(--bq-neutral-900)',
  'bq-icon--primary': 'var(--bq-neutral-100)',
  'bq-icon--secondary': 'var(--bq-neutral-400)',
  'bq-icon--inverse': 'var(--bq-neutral-800)',
  'bq-icon--brand': 'var(--bq-brand)',
  'bq-icon--alt': 'var(--bq-white)',
  'bq-icon--info': 'var(--bq-brand)',
  'bq-icon--success': 'var(--bq-success)',
  'bq-icon--warning': 'var(--bq-warning)',
  'bq-icon--danger': 'var(--bq-danger)',
  'bq-stroke--primary': 'var(--bq-neutral-900)',
  'bq-stroke--secondary': 'var(--bq-neutral-700)',
  'bq-stroke--tertiary': 'var(--bq-neutral-400)',
  'bq-stroke--inverse': 'var(--bq-neutral-950)',
  'bq-stroke--brand': 'var(--bq-brand)',
  'bq-stroke--alt': 'var(--bq-neutral-1000)',
  'bq-stroke--success': 'var(--bq-success)',
  'bq-stroke--warning': 'var(--bq-warning)',
  'bq-stroke--danger': 'var(--bq-danger)',
  'bq-stroke--info': 'var(--bq-brand)',
  'bq-text--primary': 'var(--bq-neutral-100)',
  'bq-text--secondary': 'var(--bq-neutral-400)',
  'bq-text--inverse': 'var(--bq-neutral-800)',
  'bq-text--brand': 'var(--bq-brand)',
  'bq-text--alt': 'var(--bq-white)',
  'bq-text--info': 'var(--bq-brand)',
  'bq-text--success': 'var(--bq-success)',
  'bq-text--warning': 'var(--bq-warning)',
  'bq-text--danger': 'var(--bq-danger)',
  'bq-ui--primary': 'var(--bq-neutral-900)',
  'bq-ui--secondary': 'var(--bq-neutral-800)',
  'bq-ui--tertiary': 'var(--bq-neutral-700)',
  'bq-ui--inverse': 'var(--bq-neutral-100)',
  'bq-ui--brand': 'var(--bq-brand)',
  'bq-ui--brand-alt': 'var(--bq-brand-dark)',
  'bq-ui--alt': 'var(--bq-neutral-950)',
  'bq-ui--success': 'var(--bq-success)',
  'bq-ui--success-alt': 'var(--bq-success-dark)',
  'bq-ui--warning': 'var(--bq-warning)',
  'bq-ui--warning-alt': 'var(--bq-warning-dark)',
  'bq-ui--danger': 'var(--bq-danger)',
  'bq-ui--danger-alt': 'var(--bq-danger-dark)',
  'bq-ui--info': 'var(--bq-brand)',
  'bq-ui--info-alt': 'var(--bq-brand-dark)',
  'bq-hover': '#444546',
  'bq-active': '#1F2026'
};

const DefaultLightTheme = {
  'bq-background--primary': 'var(--bq-white)',
  'bq-background--secondary': 'var(--bq-neutral-100)',
  'bq-background--tertiary': 'var(--bq-neutral-200)',
  'bq-background--alt': 'var(--bq-neutral-300)',
  'bq-background--inverse': 'var(--bq-neutral-900)',
  'bq-background--brand': 'var(--bq-brand)',
  'bq-background--overlay': 'var(--bq-neutral-900)',
  'bq-icon--primary': 'var(--bq-neutral-800)',
  'bq-icon--alt': 'var(--bq-white)',
  'bq-icon--secondary': 'var(--bq-neutral-600)',
  'bq-icon--inverse': 'var(--bq-neutral-50)',
  'bq-icon--brand': 'var(--bq-brand)',
  'bq-icon--info': 'var(--bq-brand)',
  'bq-icon--success': 'var(--bq-success)',
  'bq-icon--warning': 'var(--bq-warning)',
  'bq-icon--danger': 'var(--bq-danger)',
  'bq-stroke--primary': 'var(--bq-neutral-200)',
  'bq-stroke--secondary': 'var(--bq-neutral-600)',
  'bq-stroke--tertiary': 'var(--bq-neutral-900)',
  'bq-stroke--inverse': 'var(--bq-white)',
  'bq-stroke--brand': 'var(--bq-brand)',
  'bq-stroke--alt': 'var(--bq-neutral-50)',
  'bq-stroke--success': 'var(--bq-success)',
  'bq-stroke--warning': 'var(--bq-warning)',
  'bq-stroke--danger': 'var(--bq-danger)',
  'bq-stroke--info': 'var(--bq-brand)',
  'bq-text--primary': 'var(--bq-neutral-800)',
  'bq-text--secondary': 'var(--bq-neutral-600)',
  'bq-text--inverse': 'var(--bq-neutral-50)',
  'bq-text--brand': 'var(--bq-brand)',
  'bq-text--alt': 'var(--bq-white)',
  'bq-text--info': 'var(--bq-brand)',
  'bq-text--success': 'var(--bq-success)',
  'bq-text--warning': 'var(--bq-warning)',
  'bq-text--danger': 'var(--bq-danger)',
  'bq-ui--primary': 'var(--bq-white)',
  'bq-ui--secondary': 'var(--bq-neutral-200)',
  'bq-ui--tertiary': 'var(--bq-neutral-500)',
  'bq-ui--inverse': 'var(--bq-neutral-900)',
  'bq-ui--brand': 'var(--bq-brand)',
  'bq-ui--brand-alt': 'var(--bq-brand-light)',
  'bq-ui--alt': 'var(--bq-neutral-50)',
  'bq-ui--success': 'var(--bq-success)',
  'bq-ui--success-alt': 'var(--bq-success-light)',
  'bq-ui--warning': 'var(--bq-warning)',
  'bq-ui--warning-alt': 'var(--bq-warning-light)',
  'bq-ui--danger': 'var(--bq-danger)',
  'bq-ui--danger-alt': 'var(--bq-danger-light)',
  'bq-ui--info': 'var(--bq-brand)',
  'bq-ui--info-alt': 'var(--bq-brand-light)',
  'bq-hover': '#bcbfc5',
  'bq-active': '#444546'
};

const DefaultRootTheme = {
  'bq-white': '#ffffff',
  'bq-black': '#060708',
  'bq-neutral-50': 'var(--bq-grey-50)',
  'bq-neutral-100': 'var(--bq-grey-100)',
  'bq-neutral-200': 'var(--bq-grey-200)',
  'bq-neutral-300': 'var(--bq-grey-300)',
  'bq-neutral-400': 'var(--bq-grey-400)',
  'bq-neutral-500': 'var(--bq-grey-500)',
  'bq-neutral-600': 'var(--bq-grey-600)',
  'bq-neutral-700': 'var(--bq-grey-700)',
  'bq-neutral-800': 'var(--bq-grey-800)',
  'bq-neutral-900': 'var(--bq-grey-900)',
  'bq-neutral-950': 'var(--bq-grey-950)',
  'bq-neutral-1000': 'var(--bq-grey-1000)',
  'bq-brand-light': 'var(--bq-iris-100)',
  'bq-brand': 'var(--bq-iris-600)',
  'bq-brand-dark': 'var(--bq-iris-1000)',
  'bq-accent-light': 'var(--bq-purple-100)',
  'bq-accent': 'var(--bq-purple-600)',
  'bq-accent-dark': 'var(--bq-purple-1000)',
  'bq-success-light': 'var(--bq-teal-100)',
  'bq-success': 'var(--bq-teal-600)',
  'bq-success-dark': 'var(--bq-teal-1000)',
  'bq-danger-light': 'var(--bq-red-100)',
  'bq-danger': 'var(--bq-red-600)',
  'bq-danger-dark': 'var(--bq-red-1000)',
  'bq-warning-light': 'var(--bq-gold-100)',
  'bq-warning': 'var(--bq-gold-600)',
  'bq-warning-dark': 'var(--bq-gold-1000)',
  'bq-info-light': 'var(--bq-iris-100)',
  'bq-info': 'var(--bq-iris-600)',
  'bq-info-dark': 'var(--bq-iris-1000)',
  'bq-focus': 'var(--bq-iris-600)',
  'bq-data-01': 'var(--bq-brand)',
  'bq-data-02': 'var(--bq-purple-600)',
  'bq-data-03': 'var(--bq-magenta-600)',
  'bq-data-04': 'var(--bq-cyan-600)',
  'bq-data-05': 'var(--bq-teal-600)',
  'bq-data-06': 'var(--bq-orange-600)',
  'bq-data-07': 'var(--bq-yellow-600)',
  'bq-data-08': 'var(--bq-red-600)',
  'bq-data-09': 'var(--bq-blue-600)',
  'bq-data-10': 'var(--bq-grey-600)',
  'bq-data-11': 'var(--bq-black)',
  'bq-data-12': 'var(--bq-white)',
  'bq-radius--none': '0',
  'bq-radius--xs2': '0.125rem',
  'bq-radius--xs': '0.313rem',
  'bq-radius--s': '0.625rem',
  'bq-radius--m': '0.75rem',
  'bq-radius--l': '1.5rem',
  'bq-radius--full': '9999px',
  'bq-box-shadow--xs': '0 2px 0 rgba(0, 0, 0, 0.016)',
  'bq-box-shadow--s': '0 8px 24px rgba(0, 0, 0, 0.04)',
  'bq-box-shadow--m': '0 10px 48px -16px rgba(0, 0, 0, 0.12)',
  'bq-box-shadow--l': '0 20px 58px -16px rgba(0, 0, 0, 0.16)',
  'bq-font-family': "'Outfit', sans-serif",
  'bq-font-size--xs': '0.75rem',
  'bq-font-size--s': '0.875rem',
  'bq-font-size--m': '1rem',
  'bq-font-size--l': '1.125rem',
  'bq-font-size--xl': '1.5rem',
  'bq-font-size--xxl': '2rem',
  'bq-font-size--xxl2': '2.5rem',
  'bq-font-size--xxl3': '3rem',
  'bq-font-size--xxl4': '3.5rem',
  'bq-font-size--xxl5': '4rem',
  'bq-font-weight--thin': '100',
  'bq-font-weight--light': '300',
  'bq-font-weight--regular': '400',
  'bq-font-weight--medium': '500',
  'bq-font-weight--semibold': '600',
  'bq-font-weight--bold': '700',
  'bq-font-line-height--small': '1.2',
  'bq-font-line-height--regular': '1.5',
  'bq-font-line-height--large': '1.5',
  'bq-spacing-xs3': '0.125rem',
  'bq-spacing-xs2': '0.25rem',
  'bq-spacing-xs': '0.5rem',
  'bq-spacing-s': '0.75rem',
  'bq-spacing-m': '1rem',
  'bq-spacing-l': '1.5rem',
  'bq-spacing-xl': '2rem',
  'bq-spacing-xxl': '2.5rem',
  'bq-spacing-xxl2': '3.5rem',
  'bq-spacing-xxl3': '4rem',
  'bq-spacing-xxl4': '4.5rem',
  'bq-stroke-s': '1px',
  'bq-stroke-m': '2px',
  'bq-stroke-l': '3px'
};

const EndavaDarkTheme = {
  'bq-background--primary': 'var(--bq-neutral-1000)',
  'bq-background--secondary': 'var(--bq-neutral-900)',
  'bq-background--tertiary': 'var(--bq-neutral-800)',
  'bq-background--alt': 'var(--bq-neutral-700)',
  'bq-background--inverse': 'var(--bq-neutral-600)',
  'bq-background--brand': 'var(--bq-brand)',
  'bq-background--overlay': 'var(--bq-neutral-900)',
  'bq-icon--primary': 'var(--bq-neutral-100)',
  'bq-icon--secondary': 'var(--bq-neutral-400)',
  'bq-icon--inverse': 'var(--bq-neutral-800)',
  'bq-icon--brand': 'var(--bq-brand)',
  'bq-icon--alt': 'var(--bq-white)',
  'bq-icon--info': 'var(--bq-info)',
  'bq-icon--success': 'var(--bq-success)',
  'bq-icon--warning': 'var(--bq-warning)',
  'bq-icon--danger': 'var(--bq-danger)',
  'bq-stroke--primary': 'var(--bq-neutral-900)',
  'bq-stroke--secondary': 'var(--bq-neutral-700)',
  'bq-stroke--tertiary': 'var(--bq-neutral-400)',
  'bq-stroke--inverse': 'var(--bq-neutral-950)',
  'bq-stroke--brand': 'var(--bq-brand)',
  'bq-stroke--brand-alt': 'var(--bq-brand-dark)',
  'bq-stroke--alt': 'var(--bq-neutral-1000)',
  'bq-stroke--success': 'var(--bq-success)',
  'bq-stroke--warning': 'var(--bq-warning)',
  'bq-stroke--danger': 'var(--bq-danger)',
  'bq-stroke--info': 'var(--bq-info)',
  'bq-text--primary': 'var(--bq-neutral-100)',
  'bq-text--secondary': 'var(--bq-neutral-400)',
  'bq-text--inverse': 'var(--bq-neutral-800)',
  'bq-text--brand': 'var(--bq-brand)',
  'bq-text--alt': 'var(--bq-neutral-white)',
  'bq-text--info': 'var(--bq-info)',
  'bq-text--success': 'var(--bq-success)',
  'bq-text--warning': 'var(--bq-warning)',
  'bq-text--danger': 'var(--bq-danger)',
  'bq-ui--primary': 'var(--bq-neutral-900)',
  'bq-ui--secondary': 'var(--bq-neutral-800)',
  'bq-ui--tertiary': 'var(--bq-neutral-700)',
  'bq-ui--inverse': 'var(--bq-neutral-100)',
  'bq-ui--brand': 'var(--bq-brand)',
  'bq-ui--brand-alt': 'var(--bq-brand-dark)',
  'bq-ui--alt': 'var(--bq-neutral-950)',
  'bq-ui--success': 'var(--bq-success)',
  'bq-ui--success-alt': 'var(--bq-success-dark)',
  'bq-ui--warning': 'var(--bq-warning)',
  'bq-ui--warning-alt': 'var(--bq-warning-dark)',
  'bq-ui--danger': 'var(--bq-danger)',
  'bq-ui--danger-alt': 'var(--bq-danger-dark)',
  'bq-ui--info': 'var(--bq-info)',
  'bq-ui--info-alt': 'var(--bq-info-dark)',
  'bq-hover': '#444546',
  'bq-active': '#1F2026'
};

const EndavaLightTheme = {
  'bq-background--primary': 'var(--bq-white)',
  'bq-background--secondary': 'var(--bq-neutral-100)',
  'bq-background--tertiary': 'var(--bq-neutral-200)',
  'bq-background--alt': 'var(--bq-neutral-300)',
  'bq-background--inverse': 'var(--bq-neutral-900)',
  'bq-background--brand': 'var(--bq-brand)',
  'bq-background--overlay': 'var(--bq-neutral-900)',
  'bq-icon--primary': 'var(--bq-neutral-800)',
  'bq-icon--secondary': 'var(--bq-neutral-600)',
  'bq-icon--inverse': 'var(--bq-neutral-50)',
  'bq-icon--brand': 'var(--bq-brand)',
  'bq-icon--alt': 'var(--bq-white)',
  'bq-icon--info': 'var(--bq-info)',
  'bq-icon--success': 'var(--bq-success)',
  'bq-icon--warning': 'var(--bq-warning)',
  'bq-icon--danger': 'var(--bq-danger)',
  'bq-stroke--primary': 'var(--bq-neutral-200)',
  'bq-stroke--secondary': 'var(--bq-neutral-600)',
  'bq-stroke--tertiary': 'var(--bq-neutral-900)',
  'bq-stroke--inverse': 'var(--bq-white)',
  'bq-stroke--brand': 'var(--bq-brand)',
  'bq-stroke--alt': 'var(--bq-neutral-50)',
  'bq-stroke--brand-alt': 'var(--bq-brand-light)',
  'bq-stroke--success': 'var(--bq-success)',
  'bq-stroke--warning': 'var(--bq-warning)',
  'bq-stroke--danger': 'var(--bq-danger)',
  'bq-stroke--info': 'var(--bq-info)',
  'bq-text--primary': 'var(--bq-neutral-800)',
  'bq-text--secondary': 'var(--bq-neutral-600)',
  'bq-text--inverse': 'var(--bq-neutral-50)',
  'bq-text--brand': 'var(--bq-brand)',
  'bq-text--alt': 'var(--bq-white)',
  'bq-text--info': 'var(--bq-info)',
  'bq-text--success': 'var(--bq-success)',
  'bq-text--warning': 'var(--bq-warning)',
  'bq-text--danger': 'var(--bq-danger)',
  'bq-ui--primary': 'var(--bq-white)',
  'bq-ui--secondary': 'var(--bq-neutral-200)',
  'bq-ui--tertiary': 'var(--bq-neutral-500)',
  'bq-ui--inverse': 'var(--bq-neutral-900)',
  'bq-ui--alt': 'var(--bq-neutral-50)',
  'bq-ui--brand-alt': 'var(--bq-brand-light)',
  'bq-ui--brand': 'var(--bq-brand)',
  'bq-ui--success': 'var(--bq-success)',
  'bq-ui--success-alt': 'var(--bq-success-light)',
  'bq-ui--warning': 'var(--bq-warning)',
  'bq-ui--warning-alt': 'var(--bq-warning-light)',
  'bq-ui--danger': 'var(--bq-danger)',
  'bq-ui--danger-alt': 'var(--bq-danger-light)',
  'bq-ui--info': 'var(--bq-info)',
  'bq-ui--info-alt': 'var(--bq-info-light)',
  'bq-hover': '#444546',
  'bq-active': '#1F2026'
};

const EndavaRootTheme = {
  'bq-font-family': "'Poppins', sans-serif",
  'bq-white': '#fafbfb',
  'bq-black': '#030406',
  'bq-neutral-50': 'var(--bq-endava-grey-50)',
  'bq-neutral-100': 'var(--bq-endava-grey-100)',
  'bq-neutral-200': 'var(--bq-endava-grey-200)',
  'bq-neutral-300': 'var(--bq-endava-grey-300)',
  'bq-neutral-400': 'var(--bq-endava-grey-400)',
  'bq-neutral-500': 'var(--bq-endava-grey-500)',
  'bq-neutral-600': 'var(--bq-endava-grey-600)',
  'bq-neutral-700': 'var(--bq-endava-grey-700)',
  'bq-neutral-800': 'var(--bq-endava-grey-800)',
  'bq-neutral-900': 'var(--bq-endava-grey-900)',
  'bq-neutral-950': 'var(--bq-endava-grey-950)',
  'bq-neutral-1000': 'var(--bq-endava-grey-1000)',
  'bq-brand-light': 'var(--bq-endava-orange-100)',
  'bq-brand': 'var(--bq-endava-orange-600)',
  'bq-brand-dark': 'var(--bq-endava-orange-1000)',
  'bq-accent-light': 'var(--bq-endava-orange-100)',
  'bq-accent': 'var(--bq-endava-orange-600)',
  'bq-accent-dark': 'var(--bq-endava-orange-1000)',
  'bq-success-light': 'var(--bq-green-100)',
  'bq-success': 'var(--bq-green-600)',
  'bq-success-dark': 'var(--bq-green-1000)',
  'bq-danger-light': 'var(--bq-corai-100)',
  'bq-danger': 'var(--bq-corai-600)',
  'bq-danger-dark': 'var(--bq-corai-1000)',
  'bq-warning-light': 'var(--bq-yellow-100)',
  'bq-warning': 'var(--bq-yellow-600)',
  'bq-warning-dark': 'var(--bq-yellow-1000)',
  'bq-info-light': 'var(--bq-blue-100)',
  'bq-info': 'var(--bq-blue-600)',
  'bq-info-dark': 'var(--bq-blue-1000)',
  'bq-focus': 'var(--bq-endava-orange-600)',
  'bq-data-01': 'var(--bq-brand)',
  'bq-data-02': '#af0cd8',
  'bq-data-03': '#0ca8d8',
  'bq-data-04': 'var(--bq-teal-600)',
  'bq-data-05': 'var(--bq-yellow-600)',
  'bq-data-06': 'var(--bq-orange-600)',
  'bq-data-07': 'var(--bq-blue-600)',
  'bq-data-08': 'var(--bq-red-600)',
  'bq-data-09': 'var(--bq-purple-600)',
  'bq-data-10': '#394b56',
  'bq-data-11': 'var(--bq-black)',
  'bq-data-12': 'var(--bq-white)'
};

const FlypassDarkTheme = {
  'bq-background--primary': 'var(--bq-neutral-1000)',
  'bq-background--secondary': 'var(--bq-neutral-900)',
  'bq-background--tertiary': 'var(--bq-neutral-800)',
  'bq-background--alt': 'var(--bq-neutral-700)',
  'bq-background--inverse': 'var(--bq-neutral-600)',
  'bq-background--brand': 'var(--bq-brand)',
  'bq-background--overlay': 'var(--bq-neutral-900)',
  'bq-icon--primary': 'var(--bq-neutral-100)',
  'bq-icon--secondary': 'var(--bq-neutral-400)',
  'bq-icon--inverse': 'var(--bq-neutral-800)',
  'bq-icon--brand': 'var(--bq-brand)',
  'bq-icon--alt': 'var(--bq-white)',
  'bq-icon--info': 'var(--bq-info)',
  'bq-icon--success': 'var(--bq-success)',
  'bq-icon--warning': 'var(--bq-warning)',
  'bq-icon--danger': 'var(--bq-danger)',
  'bq-stroke--primary': 'var(--bq-neutral-900)',
  'bq-stroke--secondary': 'var(--bq-neutral-700)',
  'bq-stroke--tertiary': 'var(--bq-neutral-400)',
  'bq-stroke--inverse': 'var(--bq-neutral-950)',
  'bq-stroke--brand': 'var(--bq-brand)',
  'bq-stroke--brand-alt': 'var(--bq-brand-dark)',
  'bq-stroke--alt': 'var(--bq-neutral-1000)',
  'bq-stroke--success': 'var(--bq-success)',
  'bq-stroke--warning': 'var(--bq-warning)',
  'bq-stroke--danger': 'var(--bq-danger)',
  'bq-stroke--info': 'var(--bq-info)',
  'bq-text--primary': 'var(--bq-neutral-100)',
  'bq-text--secondary': 'var(--bq-neutral-400)',
  'bq-text--inverse': 'var(--bq-neutral-800)',
  'bq-text--brand': 'var(--bq-brand)',
  'bq-text--alt': 'var(--bq-neutral-white)',
  'bq-text--info': 'var(--bq-info)',
  'bq-text--success': 'var(--bq-success)',
  'bq-text--warning': 'var(--bq-warning)',
  'bq-text--danger': 'var(--bq-danger)',
  'bq-ui--primary': 'var(--bq-neutral-900)',
  'bq-ui--secondary': 'var(--bq-neutral-800)',
  'bq-ui--tertiary': 'var(--bq-neutral-700)',
  'bq-ui--inverse': 'var(--bq-neutral-100)',
  'bq-ui--brand': 'var(--bq-brand)',
  'bq-ui--brand-alt': 'var(--bq-brand-dark)',
  'bq-ui--alt': 'var(--bq-neutral-950)',
  'bq-ui--success': 'var(--bq-success)',
  'bq-ui--success-alt': 'var(--bq-success-dark)',
  'bq-ui--warning': 'var(--bq-warning)',
  'bq-ui--warning-alt': 'var(--bq-warning-dark)',
  'bq-ui--danger': 'var(--bq-danger)',
  'bq-ui--danger-alt': 'var(--bq-danger-dark)',
  'bq-ui--info': 'var(--bq-info)',
  'bq-ui--info-alt': 'var(--bq-info-dark)',
  'bq-hover': '#444546',
  'bq-active': '#1F2026'
};

const FlypassLightTheme = {
  'bq-background--primary': 'var(--bq-white)',
  'bq-background--secondary': 'var(--bq-neutral-100)',
  'bq-background--tertiary': 'var(--bq-neutral-200)',
  'bq-background--alt': 'var(--bq-neutral-300)',
  'bq-background--inverse': 'var(--bq-neutral-900)',
  'bq-background--brand': 'var(--bq-brand)',
  'bq-background--overlay': 'var(--bq-neutral-900)',
  'bq-icon--primary': 'var(--bq-neutral-800)',
  'bq-icon--secondary': 'var(--bq-neutral-600)',
  'bq-icon--inverse': 'var(--bq-neutral-50)',
  'bq-icon--brand': 'var(--bq-brand)',
  'bq-icon--alt': 'var(--bq-white)',
  'bq-icon--info': 'var(--bq-info)',
  'bq-icon--success': 'var(--bq-success)',
  'bq-icon--warning': 'var(--bq-warning)',
  'bq-icon--danger': 'var(--bq-danger)',
  'bq-stroke--primary': 'var(--bq-neutral-200)',
  'bq-stroke--secondary': 'var(--bq-neutral-600)',
  'bq-stroke--tertiary': 'var(--bq-neutral-900)',
  'bq-stroke--inverse': 'var(--bq-white)',
  'bq-stroke--brand': 'var(--bq-brand)',
  'bq-stroke--alt': 'var(--bq-neutral-50)',
  'bq-stroke--brand-alt': 'var(--bq-brand-light)',
  'bq-stroke--success': 'var(--bq-success)',
  'bq-stroke--warning': 'var(--bq-warning)',
  'bq-stroke--danger': 'var(--bq-danger)',
  'bq-stroke--info': 'var(--bq-info)',
  'bq-text--primary': 'var(--bq-neutral-700)',
  'bq-text--secondary': 'var(--bq-neutral-600)',
  'bq-text--inverse': 'var(--bq-neutral-50)',
  'bq-text--brand': 'var(--bq-brand)',
  'bq-text--alt': 'var(--bq-neutral-700)',
  'bq-text--info': 'var(--bq-info)',
  'bq-text--success': 'var(--bq-success)',
  'bq-text--warning': 'var(--bq-warning)',
  'bq-text--danger': 'var(--bq-danger)',
  'bq-ui--primary': 'var(--bq-white)',
  'bq-ui--secondary': 'var(--bq-neutral-200)',
  'bq-ui--tertiary': 'var(--bq-neutral-500)',
  'bq-ui--inverse': 'var(--bq-neutral-900)',
  'bq-ui--alt': 'var(--bq-neutral-50)',
  'bq-ui--brand-alt': 'var(--bq-brand-light)',
  'bq-ui--brand': 'var(--bq-brand)',
  'bq-ui--success': 'var(--bq-success)',
  'bq-ui--success-alt': 'var(--bq-success-light)',
  'bq-ui--warning': 'var(--bq-warning)',
  'bq-ui--warning-alt': 'var(--bq-warning-light)',
  'bq-ui--danger': 'var(--bq-danger)',
  'bq-ui--danger-alt': 'var(--bq-danger-light)',
  'bq-ui--info': 'var(--bq-info)',
  'bq-ui--info-alt': 'var(--bq-info-light)',
  'bq-hover': '#444546',
  'bq-active': '#1F2026'
};

const FlypassRootTheme = {
  'bq-font-family': "'Inter', sans-serif",
  'bq-white': '#ffffff',
  'bq-black': '#0e100f',
  'bq-neutral-50': 'var(--bq-flypass-dark-grey-100)',
  'bq-neutral-100': 'var(--bq-flypass-dart-100)',
  'bq-neutral-200': 'var(--bq-flypass-grey-200)',
  'bq-neutral-300': 'var(--bq-flypass-dark-grey-300)',
  'bq-neutral-400': 'var(--bq-flypass-dark-grey-400)',
  'bq-neutral-500': 'var(--bq-flypass-dark-grey-500)',
  'bq-neutral-600': 'var(--bq-flypass-dark-grey-600)',
  'bq-neutral-700': 'var(--bq-flypass-dark-grey-700)',
  'bq-neutral-800': 'var(--bq-flypass-dark-grey-800)',
  'bq-neutral-900': 'var(--bq-flypass-dark-grey-900)',
  'bq-neutral-950': 'var(--bq-flypass-dark-grey-900)',
  'bq-neutral-1000': 'var(--bq-flypass-dark-grey-900)',
  'bq-brand-light': 'var(--bq-flypass-green-200)',
  'bq-brand': 'var(--bq-flypass-green-500)',
  'bq-brand-dark': 'var(--bq-flypass-green-700)',
  'bq-accent-light': 'var(--bq-flypass-green-300)',
  'bq-accent': 'var(--bq-flypass-green-600)',
  'bq-accent-dark': 'var(--bq-flypass-green-800)',
  'bq-success-light': 'var(--bq-green-100)',
  'bq-success': 'var(--bq-green-600)',
  'bq-success-dark': 'var(--bq-green-1000)',
  'bq-danger-light': 'var(--bq-corai-100)',
  'bq-danger': 'var(--bq-corai-600)',
  'bq-danger-dark': 'var(--bq-corai-1000)',
  'bq-warning-light': 'var(--bq-yellow-100)',
  'bq-warning': 'var(--bq-yellow-600)',
  'bq-warning-dark': 'var(--bq-yellow-1000)',
  'bq-info-light': 'var(--bq-blue-100)',
  'bq-info': 'var(--bq-blue-600)',
  'bq-info-dark': 'var(--bq-blue-1000)',
  'bq-focus': 'var(--bq-flypass-green-500)',
  'bq-data-01': 'var(--bq-brand)',
  'bq-data-02': '#af0cd8',
  'bq-data-03': '#0ca8d8',
  'bq-data-04': 'var(--bq-teal-600)',
  'bq-data-05': 'var(--bq-yellow-600)',
  'bq-data-06': 'var(--bq-orange-600)',
  'bq-data-07': 'var(--bq-blue-600)',
  'bq-data-08': 'var(--bq-red-600)',
  'bq-data-09': 'var(--bq-purple-600)',
  'bq-data-10': '#394b56',
  'bq-data-11': 'var(--bq-black)',
  'bq-data-12': 'var(--bq-white)'
};

const reset = {
  '*, *::before, *::after': {
    'box-sizing': 'border-box'
  },
  '*': {
    margin: '0'
  },
  '[class^="bq-"] *': {
    font: 'inherit'
  },
  'ul[role="list"], ol[role="list"]': {
    'list-style-type': 'none'
  },
  'html:focus-within': {
    'scroll-behavior': 'smooth'
  },
  '[class^="bq-"]': {
    '-webkit-font-smoothing': 'antialiased',
    '-moz-osx-font-smoothing': 'grayscale',
    color: 'var(--bq-text--primary)',
    'font-size': 'var(--bq-font-size--m)',
    'font-family': 'var(--bq-font-family)',
    'letter-spacing': 'var(--bq-font-letter-spacing)',
    'line-height': 'var(--bq-font-line-height--regular)',
    'text-rendering': 'optimizeSpeed'
  },
  'a:not([class])': {
    'text-decoration-skip-ink': 'auto'
  },
  'img, picture, video, canvas, svg': {
    'max-width': '100%',
    display: 'block'
  },
  'input, button, select, textarea': {
    font: 'inherit'
  },
  'p, h1, h2, h3, h4, h5, h6': {
    'overflow-wrap': 'break-word'
  },
  '@media (prefers-reduced-motion: reduce)': {
    'html:focus-within': {
      'scroll-behavior': 'auto'
    },
    '*, *::before, *::after': {
      'animation-duration': '0.01ms !important',
      'animation-iteration-count': '1 !important',
      'transition-duration': '0.01ms !important',
      'scroll-behavior': 'auto'
    }
  }
};

const TYPOGRAPHY_DEFAULT = {
  '.display': {
    fontSize: 'var(--bq-font-size--xxl5)'
  },
  '.display,.h1,h1': {
    fontFamily: 'inherit',
    fontWeight: 'var(--bq-font-weight--regular)',
    lineHeight: 'var(--bq-font-line-height--small)'
  },
  '.h1,h1': {
    fontSize: 'var(--bq-font-size--xxl4)'
  },
  '.h2,h2': {
    fontSize: 'var(--bq-font-size--xxl3)'
  },
  '.h2,.h3,h2,h3': {
    fontFamily: 'inherit',
    fontWeight: 'var(--bq-font-weight--regular)',
    lineHeight: 'var(--bq-font-line-height--small)'
  },
  '.h3,h3': {
    fontSize: 'var(--bq-font-size--xxl2)'
  },
  '.h4,h4': {
    fontFamily: 'inherit',
    fontSize: 'var(--bq-font-size--xxl)',
    fontWeight: 'var(--bq-font-weight--regular)',
    lineHeight: 'var(--bq-font-line-height--small)'
  },
  '.h5,h5': {
    fontSize: 'var(--bq-font-size--xl)'
  },
  '.h5,.h6,h5,h6': {
    fontFamily: 'inherit',
    fontWeight: 'var(--bq-font-weight--regular)',
    lineHeight: 'var(--bq-font-line-height--regular)'
  },
  '.h6,h6': {
    fontSize: 'var(--bq-font-size--l)'
  },
  '.caption,figcaption': {
    fontSize: 'var(--bq-font-size--s)'
  },
  '.caption,.overline,figcaption': {
    fontFamily: 'inherit',
    fontWeight: 'var(--bq-font-weight--regular)',
    lineHeight: 'var(--bq-font-line-height--regular)'
  },
  '.overline': {
    fontSize: 'var(--bq-font-size--xs)'
  },
  [`.caption.semibold,
    .display.semibold,
    .h1.semibold,
    .h2.semibold,
    .h3.semibold,
    .h4.semibold,
    .h5.semibold,
    .h6.semibold,
    .overline.semibold,
    caption.semibold,
    h1.semibold,
    h2.semibold,
    h3.semibold,
    h4.semibold,
    h5.semibold,
    h6.semibold`]: {
    fontWeight: 'var(--bq-font-weight--semibold)'
  },
  [`.caption.bold,
    .display.bold,
    .h1.bold,
    .h2.bold,
    .h3.bold,
    .h4.bold,
    .h5.bold,
    .h6.bold,
    .overline.bold,
    caption.bold,
    h1.bold,
    h2.bold,
    h3.bold,
    h4.bold,
    h5.bold,
    h6.bold`]: {
    fontWeight: 'var(--bq-font-weight--bold)'
  }
};

const inherit = 'inherit';
var index = {
  theme: {
    colors: Object.assign({
      inherit,
      current: 'currentColor',
      transparent: 'transparent'
    }, PRIMITIVE_COLORS, {
      focus: DECLARATIVE_COLORS.focus,
      data: Object.assign({}, DECLARATIVE_COLORS.data),
      icon: Object.assign({}, DECLARATIVE_COLORS.icon),
      ui: Object.assign({}, DECLARATIVE_COLORS.ui)
    }),
    borderRadius: {
      none: 'var(--bq-radius--none)',
      xs2: 'var(--bq-radius--xs2)',
      xs: 'var(--bq-radius--xs)',
      s: 'var(--bq-radius--s)',
      m: 'var(--bq-radius--m)',
      l: 'var(--bq-radius--l)',
      full: 'var(--bq-radius--full)'
    },
    borderWidth: {
      0: '0',
      s: 'var(--bq-stroke-s)',
      m: 'var(--bq-stroke-m)',
      l: 'var(--bq-stroke-l)'
    },
    boxShadow: {
      xs: 'var(--bq-box-shadow--xs)',
      s: 'var(--bq-box-shadow--s)',
      m: 'var(--bq-box-shadow--m)',
      l: 'var(--bq-box-shadow--l)'
    },
    fontFamily: {
      inherit,
      default: 'var(--bq-font-family)',
      outfit: 'var(--bq-font-family--outfit)',
      poppins: 'var(--bq-font-family--poppins)',
      inter: 'var(--bq-font-family--inter)'
    },
    fontSize: {
      xs: 'var(--bq-font-size--xs)',
      s: 'var(--bq-font-size--s)',
      m: 'var(--bq-font-size--m)',
      l: 'var(--bq-font-size--l)',
      xl: 'var(--bq-font-size--xl)',
      xxl: 'var(--bq-font-size--xxl)',
      xxl2: 'var(--bq-font-size--xxl2)',
      xxl3: 'var(--bq-font-size--xxl3)',
      xxl4: 'var(--bq-font-size--xxl4)',
      xxl5: 'var(--bq-font-size--xxl5)'
    },
    fontWeight: {
      thin: 'var(--bq-font-weight--thin)',
      light: 'var(--bq-font-weight--light)',
      regular: 'var(--bq-font-weight--regular)',
      medium: 'var(--bq-font-weight--medium)',
      semibold: 'var(--bq-font-weight--semibold)',
      bold: 'var(--bq-font-weight--bold)'
    },
    lineHeight: {
      inherit,
      xs: 'var(--bq-font-line-height--xs)',
      small: 'var(--bq-font-line-height--small)',
      medium: 'var(--bq-font-line-height--medium)',
      base: 'var(--bq-font-line-height--base)',
      regular: 'var(--bq-font-line-height--regular)',
      large: 'var(--bq-font-line-height--large)',
      xl: 'var(--bq-font-line-height--xl)',
      xxl: 'var(--bq-font-line-height--xxl)',
      xxl2: 'var(--bq-font-line-height--xxl2)'
    },
    strokeWidth: {
      inherit,
      none: '0',
      s: 'var(--bq-stroke-s)',
      m: 'var(--bq-stroke-m)',
      l: 'var(--bq-stroke-l)'
    },
    extend: {
      backgroundColor: Object.assign({}, DECLARATIVE_COLORS.bg),
      borderColor: Object.assign({}, DECLARATIVE_COLORS.stroke),
      stroke: Object.assign({}, DECLARATIVE_COLORS.stroke),
      textColor: Object.assign({}, DECLARATIVE_COLORS.text),
      fill: Object.assign({}, DECLARATIVE_COLORS.icon),
      content: {
        empty: "''"
      },
      cursor: {
        inherit
      },
      height: {
        inherit,
        'dynamic-vh': '100dvh'
      },
      spacing: {
        xs3: 'var(--bq-spacing-xs3)',
        xs2: 'var(--bq-spacing-xs2)',
        xs: 'var(--bq-spacing-xs)',
        s: 'var(--bq-spacing-s)',
        m: 'var(--bq-spacing-m)',
        l: 'var(--bq-spacing-l)',
        xl: 'var(--bq-spacing-xl)',
        xxl: 'var(--bq-spacing-xxl)',
        xxl2: 'var(--bq-spacing-xxl2)',
        xxl3: 'var(--bq-spacing-xxl3)',
        xxl4: 'var(--bq-spacing-xxl4)',
        xxl5: 'var(--bq-spacing-xxl5)',
        xxl6: 'var(--bq-spacing-xxl6)',
        xxl7: 'var(--bq-spacing-xxl7)'
      }
    }
  },
  plugins: [plugin(function ({
    addBase,
    addComponents,
    theme
  }) {
    addBase(Object.assign({
      ':root, ::backdrop': Object.assign({}, CSS_COLORS)
    }, reset));
    addComponents({
      '.focus': {
        outline: `var(--bq-ring-width, 2px) solid var(--bq-ring-color-focus, ${String(theme('colors.focus'))})`,
        outlineOffset: 'var(--bq-ring-offset-width, 1px)'
      }
    });
  }), ColorMix, LogicalProperties, ThemeSwapper({
    themes: [{
      name: 'root',
      selectors: [':root'],
      theme: Object.assign({}, DefaultRootTheme)
    }, {
      name: 'light',
      selectors: [':root', '.light', '.beeq.light', '[bq-mode="light"]'],
      theme: Object.assign({}, DefaultLightTheme)
    }, {
      name: 'dark',
      selectors: ['.dark', '.beeq.dark', '[bq-mode="dark"]'],
      theme: Object.assign({}, DefaultDarkTheme)
    }, {
      name: 'endava',
      selectors: ['.endava', '[bq-theme="endava"]'],
      theme: Object.assign({}, EndavaRootTheme)
    }, {
      name: 'endava-light',
      selectors: ['.endava.light', '[bq-theme="endava"][bq-mode="light"]'],
      theme: Object.assign({}, EndavaLightTheme)
    }, {
      name: 'endava-dark',
      selectors: ['.endava.dark', '[bq-theme="endava"][bq-mode="dark"]'],
      theme: Object.assign({}, EndavaDarkTheme)
    }, {
      name: 'flypass',
      selectors: ['.flypass', '[bq-theme="flypass"]'],
      theme: Object.assign({}, FlypassRootTheme)
    }, {
      name: 'flypass-light',
      selectors: ['.flypass.light', '[bq-theme="flypass"][bq-mode="light"]'],
      theme: Object.assign({}, FlypassLightTheme)
    }, {
      name: 'flypass-dark',
      selectors: ['.flypass.dark', '[bq-theme="flypass"][bq-mode="dark"]'],
      theme: Object.assign({}, FlypassDarkTheme)
    }]
  })]
};

export { CSS_COLORS, DECLARATIVE_COLORS, DefaultDarkTheme, DefaultLightTheme, DefaultRootTheme, EndavaDarkTheme, EndavaLightTheme, EndavaRootTheme, FlypassDarkTheme, FlypassLightTheme, FlypassRootTheme, PRIMITIVE_COLORS, TYPOGRAPHY_DEFAULT, index as default };
