import React from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from '../../providers/Auth';
import VideosContext from '../../state/VideosContext';

const AppProvidersTest = (props) => {
  return (
    <MuiThemeProvider theme={createMuiTheme()}>
      <BrowserRouter>
        <AuthProvider>
          <VideosContext.Provider value={props.context}>
            {props.children}
          </VideosContext.Provider>
        </AuthProvider>
      </BrowserRouter>
    </MuiThemeProvider>
  );
};

export default AppProvidersTest;
