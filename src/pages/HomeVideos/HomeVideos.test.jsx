import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';

import AppProvidersTest from '../../components/App/AppProvidersTest.component';
import HomeVideos from './HomeVideos.page';
import { videosMock } from '../../__mocks__/videosMock';

afterEach(cleanup);

describe('HomeVideos', () => {
  it('Video List with testId', () => {
    const context = {
      selectedVideo: null,
      strSearch: 'Wizeline',
      setStrSearch: () => {},
      setSelectedVideo: () => {},
      state: { videoList: videosMock },
      dispatch: () => {},
    };

    render(
      <AppProvidersTest context={context}>
        <HomeVideos />
      </AppProvidersTest>
    );

    videosMock.forEach((videoMock) => {
      expect(screen.getByTestId(`videoelem-${videoMock.id.videoId}`)).toBeInTheDocument();
    });
  });
});
