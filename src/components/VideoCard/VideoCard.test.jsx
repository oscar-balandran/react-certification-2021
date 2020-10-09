import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';

import AppProvidersTest from '../App/AppProvidersTest.component';
import VideoCard from './VideoCard.component';
import { videoMock } from '../../__mocks__/videosMock';

afterEach(cleanup);

describe('VideoCard', () => {
  it('Video Card with title', () => {
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
        <VideoCard video={videoMock} />
      </AppProvidersTest>
    );

    expect(screen.getByText(videoMock.snippet.title)).toBeInTheDocument();
  });
});
