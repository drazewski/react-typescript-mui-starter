import OpenSansLatinRegularWoff from './assets/fonts/open-sans-v26-latin-regular.woff';
import OpenSansLatinRegularWoff2 from './assets/fonts/open-sans-v26-latin-regular.woff2';
import OpenSansLatin600Woff from './assets/fonts/open-sans-v26-latin-600.woff';
import OpenSansLatin600Woff2 from './assets/fonts/open-sans-v26-latin-600.woff2';
import OpenSansLatinItalicWoff from './assets/fonts/open-sans-v26-latin-italic.woff';
import OpenSansLatinItalicWoff2 from './assets/fonts/open-sans-v26-latin-italic.woff2';
import MuktaRegularWoff from './assets/fonts/mukta-regular.woff';
import MuktaRegularTtf from './assets/fonts/mukta-regular.ttf';
import MuktaSemiboldWoff from './assets/fonts/mukta-semibold.woff';
import MuktaSemiboldTtf from './assets/fonts/mukta-semibold.ttf';

export const globalStyles = {
  breakpoints: {
    values: {
      xs: 0,
      sm: 768,
      md: 1040,
      lg: 1280,
      xl: 1640,
    },
  },
  palette: {
    primary: {
      main: '#F0A202',
      contrastText: '#FFF',
      light: '#F0A202',
    },
    secondary: {
      main: '#3f4045',
      contrastText: '#FFF',
      light: '#3f4045',
    },
    text: {
      primary: '#171a21',
        secondary: '#5d737e',
      disabled: '#D2D8DD',
    },
    textPrimary: {
      main: '#171a21',
      contrastText: '#FFF',
      light: '#171a21',
    },
    textSecondary: {
      main: '#5d737e',
      contrastText: '#FFF',
      light: '#5d737e',
    },
    textDisabled: {
      main: '#D2D8DD',
      contrastText: '#FFF',
      light: '#D2D8DD',
    },
    error: {
      main: '#B00020',
      contrastText: '#FFF',
      light: '#B00020',
    },
    info: {
      main: '#0E71E3',
      contrastText: '#FFF',
      light: '#0E71E3',
    },
    success: {
      main: '#168154',
      contrastText: '#FFF',
      light: '#168154',
    },
    warning: {
      main: '#BC5316',
      contrastText: '#FFF',
      light: '#BC5316',
    },
  },
  typography: {
    fontFamily: 'Open Sans, sans-serif',
    fontSize: 16,
    h1: {
      fontSize: 28,
      fontWeight: 600,
      lineHeight: 1.25,
      fontFamily: 'Mukta',
    },
    h2: {
      fontSize: 18,
      fontWeight: 600,
      lineHeight: 1.25,
      fontFamily: 'Mukta',
    },
    h3: {
      fontSize: 17,
      fontWeight: 600,
      fontFamily: 'Mukta',
    },
    h4: {
      fontSize: 16,
      fontWeight: 600,
      fontFamily: 'Mukta',
    },
    caption: {
      fontSize: 13,
    },
    body1: {
      fontSize: 14,
      lineHeight: 1.4,
    },
    body2: {
      fontSize: 14,
      lineHeight: 1.4,
      fontWeight: 600,
    },
    button: {
      fontSize: 14,
      fontWeight: 400,
      fontFamily: 'Mukta',
    },
  },
  shape: {
    borderRadius: 10,
  },
  mixins: {
    toolbar: {
      minHeight: 64,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Open Sans';
          font-style: normal;
          font-weight: 400;
          src:
            local('Open Sans'),
            url(${OpenSansLatinRegularWoff2}) format('woff2'),
            url(${OpenSansLatinRegularWoff}) format('woff');
        }
        @font-face {
          font-family: 'Open Sans';
          font-style: normal;
          font-weight: 600;
          src:
            local('Open Sans'),
            url(${OpenSansLatin600Woff2}) format('woff2'),
            url(${OpenSansLatin600Woff}) format('woff');
        }
        @font-face {
          font-family: 'Open Sans';
          font-style: italic;
          font-weight: 400;
          src:
            local('Open Sans'),
            url(${OpenSansLatinItalicWoff2}) format('woff2'),
            url(${OpenSansLatinItalicWoff}) format('woff');
        }
        @font-face {
          font-family: 'Mukta';
          font-style: normal;
          font-weight: 400;
          src:
            local('Mukta'),
            url(${MuktaRegularTtf}) format('ttf'),
            url(${MuktaRegularWoff}) format('woff');
        }
        @font-face {
          font-family: 'Mukta';
          font-style: normal;
          font-weight: 600;
          src:
            local('Mukta'),
            url(${MuktaSemiboldTtf}) format('ttf'),
            url(${MuktaSemiboldWoff}) format('woff');
        }
      `,
    },
  },
};
