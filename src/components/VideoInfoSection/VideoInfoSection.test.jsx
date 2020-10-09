import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';

import AppProvidersTest from '../App/AppProvidersTest.component';
import VideoInfoSection from './VideoInfoSection.component';
import { videoMock } from '../../__mocks__/videosMock';

afterEach(cleanup);

describe('VideoInfoSection', () => {
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
        <VideoInfoSection video={videoMock} />
      </AppProvidersTest>
    );

    expect(screen.getByText(videoMock.snippet.title)).toBeInTheDocument();
  });

  it('Video Info without Message component', () => {
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
        <VideoInfoSection video={videoMock} />
      </AppProvidersTest>
    );

    expect(screen.queryAllByText('Message')).toHaveLength(0);
  });
});
