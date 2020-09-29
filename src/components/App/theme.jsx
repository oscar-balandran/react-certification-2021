const { blue, indigo } = require('@material-ui/core/colors');

const theme1 = {
  palette: {
    primary: indigo, // blue
    secondary: blue, // red
  },
  typography: {
    fontFamily: ['Roboto', 'sans-serif'].toString(),
    overline: {
      fontSize: '0.875rem',
      fontWeight: 500,
      letterSpacing: 2,
    },
    button: {
      fontWeight: 500,
    },
    gutterBottom: true,
    paragraph: true,
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
