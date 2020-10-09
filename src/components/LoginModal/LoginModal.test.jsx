import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from '../../providers/Auth';
import LoginModal from './LoginModal.component';

afterEach(cleanup);

const wrapperComponent = () => {
  return render(
    <MuiThemeProvider theme={createMuiTheme()}>
      <BrowserRouter>
        <AuthProvider>
          <LoginModal open />
        </AuthProvider>
      </BrowserRouter>
    </MuiThemeProvider>
  );
};

describe('LoginModal', () => {
  it('Render with Button=>Login', () => {
    const { getByText } = wrapperComponent();

    expect(getByText('Login')).toBeInTheDocument();
  });

  it('Render with Button=>Cancel', () => {
    const { getByText } = wrapperComponent();

    expect(getByText('Cancel')).toBeInTheDocument();
  });
});
