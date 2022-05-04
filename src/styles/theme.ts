import { DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  breakpoints: {
    mobile: 576,
    tablet: 768,
    desktop: 992,
  },
  colors: {
    neutral: {
      darkest: '#292A2C',
      dark: '#515C6F',
      medium: '#78849E',
      regular: '#D6DAE2',
      light: '#F5F5F5',
      lightest: '#FFFFFF',
      transparent: 'transparent',
    },
    primary: {
      darkest: '#00558D',
      dark: '#273EB2',
      regular: '#3859FF',
      regularHover: '#526EFF',
      light: '#E8ECFF',
      lightOpacity: '#f8f9ff',
    },
    secondary: {
      darkest: '#FFFFFF',
      dark: '#FFFFFF',
      regular: '#FFFFFF',
      light: '#3859FF',
      lightOpacity: '#3859FF',
    },
    success: {
      medium: '#1F800D',
      light: '#E4FFDF',
    },
    error: {
      medium: '#D20101',
      light: '#FDE6E6',
    },
    attention: {
      medium: '#AD5300',
    },
  },
};

export default theme;
