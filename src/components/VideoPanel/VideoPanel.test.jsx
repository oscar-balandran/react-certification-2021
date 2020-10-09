import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';

import AppProvidersTest from '../App/AppProvidersTest.component';
import VideoPanel from './VideoPanel.component';
import { videoMock } from '../../__mocks__/videosMock';

afterEach(cleanup);

describe('VideoPanel', () => {
  it('Video Info with title', () => {
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
        <VideoPanel video={videoMock} />
      </AppProvidersTest>
    );

    expect(screen.queryByText(videoMock.snippet.title)).toBeInTheDocument();
  });
});
