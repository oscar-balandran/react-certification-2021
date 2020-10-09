import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { BrowserRouter } from 'react-router-dom';
import AuthProvider from '../../providers/Auth';

import MessageDialog from './MessageDialog.component';

afterEach(cleanup);

const wrapperComponent = (props) => {
  return render(
    <MuiThemeProvider theme={createMuiTheme()}>
      <BrowserRouter>
        <AuthProvider>
          <MessageDialog {...props} />
        </AuthProvider>
      </BrowserRouter>
    </MuiThemeProvider>
  );
};

describe('MessageDialog', () => {
  it('Renders with Title', () => {
    const props = { open: true, title: 'Test Title', message: 'Message Test' };
    const { getByText } = wrapperComponent(props);

    expect(getByText(props.title)).toBeInTheDocument();
  });
});
