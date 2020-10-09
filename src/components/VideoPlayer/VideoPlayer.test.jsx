import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';

import AppProvidersTest from '../App/AppProvidersTest.component';
import VideoPlayer from './VideoPlayer.component';
import { videoMock } from '../../__mocks__/videosMock';

afterEach(cleanup);

describe('VideoPlayer', () => {
  it('Video player with testId', () => {
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
        <VideoPlayer video={videoMock} />
      </AppProvidersTest>
    );

    expect(screen.getByTestId(`videoplayer-${videoMock.id.videoId}`)).toBeInTheDocument();
  });
});
