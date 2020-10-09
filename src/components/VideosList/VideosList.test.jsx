import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';

import AppProvidersTest from '../App/AppProvidersTest.component';
import VideosList from './VideosList.component';
import { videosMock } from '../../__mocks__/videosMock';

const context = {
  selectedVideo: null,
  strSearch: 'Wizeline',
  setStrSearch: () => {},
  setSelectedVideo: () => {},
  state: null,
  dispatch: () => {},
};

afterEach(cleanup);

describe('VideosList', () => {
  it('Video List with title', () => {
    const title = 'Test Title';

    render(
      <AppProvidersTest context={context}>
        <VideosList title={title} list={videosMock} />
      </AppProvidersTest>
    );

    expect(screen.getAllByRole('heading', { level: 3 })).toHaveLength(1);
  });

  it('Video List loading', () => {
    const title = 'Test Title';

    render(
      <AppProvidersTest context={context}>
        <VideosList title={title} list={null} />
      </AppProvidersTest>
    );

    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('Video List for each', () => {
    const title = 'Test Title';

    render(
      <AppProvidersTest context={context}>
        <VideosList title={title} list={videosMock} />
      </AppProvidersTest>
    );

    videosMock.forEach((videoMock) => {
      expect(screen.getByText(videoMock.snippet.title)).toBeInTheDocument();
    });
  });
});
