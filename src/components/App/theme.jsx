const { blue, red } = require('@material-ui/core/colors');

const headingStyles = {
  fontFamily: ["'Helvetica Neue'", 'Helvetica', 'sans-serif'].toString(),
  fontWeight: 700,
};

const theme1 = {
  palette: {
    primary: blue,
    secondary: red,
  },
  typography: {
    fontFamily: ["'Fira Mono'", 'Menlo', 'monospace'].toString(),
    h1: headingStyles,
    h2: headingStyles,
    h3: headingStyles,
    h4: headingStyles,
    h5: headingStyles,
    h6: {
      fontWeight: 400,
    },
    overline: {
      fontSize: '0.875rem',
      fontWeight: 500,
      letterSpacing: 2,
    },
    button: {
      fontWeight: 500,
    },
  },
  shape: {
    borderRadius: 6,
  },
  overrides: {
    MuiFab: {
      extended: {
        padding: '0 24px',
      },
      label: {
        fontSize: '1rem',
      },
    },
  },
};

const theme2 = {
  palette: {
    primary: {
      main: '#00F',
    },
  },
  typography: {
    body1: {
      fontFamily: 'Comic Sans',
    },
  },
  custom: {
    myOwnComponent: {
      margin: '10px 10px',
      backgroundColor: 'lightgreen',
    },
  },
};

export { theme1, theme2 };
