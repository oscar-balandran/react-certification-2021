import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';

import AppProvidersTest from '../../components/App/AppProvidersTest.component';
import VideoDetail from './VideoDetail.page';
import { videoMock } from '../../__mocks__/videosMock';

afterEach(cleanup);

describe('VideoDetail', () => {
  it('Video Info with title', () => {
    const context = {
      selectedVideo: videoMock,
      strSearch: 'Wizeline',
      setStrSearch: () => {},
      setSelectedVideo: () => {},
      state: null,
      dispatch: () => {},
    };

    render(
      <AppProvidersTest context={context}>
        <VideoDetail />
      </AppProvidersTest>
    );

    expect(screen.getAllByText(videoMock.snippet.title)).toHaveLength(1);
  });
});
