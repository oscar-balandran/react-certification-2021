import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';

import AppProvidersTest from '../App/AppProvidersTest.component';
import HeaderBar from './HeaderBar.component';

afterEach(cleanup);

describe('HeaderBar', () => {
  it('Renders with menu button', () => {
    const context = {
      selectedVideo: null,
      strSearch: 'Wizeline',
      setStrSearch: () => {},
      setSelectedVideo: () => {},
      state: null,
      dispatch: () => {},
    };

    render(
      <AppProvidersTest context={context}>
        <HeaderBar />
      </AppProvidersTest>
    );

    expect(screen.getByLabelText('open drawer')).toBeInTheDocument();
  });

  it('Renders with Anonymous Avatar', () => {
    const context = {
      selectedVideo: null,
      strSearch: 'Wizeline',
      setStrSearch: () => {},
      setSelectedVideo: () => {},
      state: null,
      dispatch: () => {},
    };

    render(
      <AppProvidersTest context={context}>
        <HeaderBar />
      </AppProvidersTest>
    );

    expect(screen.getByAltText('Anonymous account')).toBeInTheDocument();
  });

  it('Renders with text to search', () => {
    const context = {
      selectedVideo: null,
      strSearch: 'Test Search',
      setStrSearch: () => {},
      setSelectedVideo: () => {},
      state: null,
      dispatch: () => {},
    };

    render(
      <AppProvidersTest context={context}>
        <HeaderBar />
      </AppProvidersTest>
    );
    expect(screen.getByPlaceholderText(context.strSearch)).toBeInTheDocument();
  });

  it('Renders with default text to search', () => {
    const context = {
      selectedVideo: null,
      strSearch: null,
      setStrSearch: () => {},
      setSelectedVideo: () => {},
      state: null,
      dispatch: () => {},
    };

    render(
      <AppProvidersTest context={context}>
        <HeaderBar />
      </AppProvidersTest>
    );

    expect(screen.getByPlaceholderText('Search...')).toBeInTheDocument();
  });
});
