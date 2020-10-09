import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';

import AppProvidersTest from '../../components/App/AppProvidersTest.component';
import Favourites from './Favourites.page';
import { videosMock } from '../../__mocks__/videosMock';

afterEach(cleanup);

describe('Favourites', () => {
  it('Video List with testId', () => {
    const context = {
      selectedVideo: null,
      strSearch: 'Wizeline',
      setStrSearch: () => {},
      setSelectedVideo: () => {},
      state: { favouritesList: videosMock },
      dispatch: () => {},
    };

    render(
      <AppProvidersTest context={context}>
        <Favourites />
      </AppProvidersTest>
    );

    videosMock.forEach((videoMock) => {
      expect(screen.getByTestId(`videoelem-${videoMock.id.videoId}`)).toBeInTheDocument();
    });
  });
});
