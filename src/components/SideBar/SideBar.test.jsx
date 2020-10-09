import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from '../../providers/Auth';
import SideBar from './SideBar.component';

afterEach(cleanup);

const wrapperComponent = () => {
  return render(
    <MuiThemeProvider theme={createMuiTheme()}>
      <BrowserRouter>
        <AuthProvider>
          <SideBar open />
        </AuthProvider>
      </BrowserRouter>
    </MuiThemeProvider>
  );
};

describe('SideBar', () => {
  it('Renders with Home element', () => {
    const { getByText } = wrapperComponent();

    expect(getByText('Home')).toBeInTheDocument();
  });
});
