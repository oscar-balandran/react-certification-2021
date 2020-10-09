import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';

import AppProvidersTest from '../App/AppProvidersTest.component';
import RelatedVideoPanel from './RelatedVideosPanel.component';
import { videoMock } from '../../__mocks__/videosMock';

afterEach(cleanup);

describe('RelatedVideoPanel', () => {
  it('Related video Loading', () => {
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
        <RelatedVideoPanel video={videoMock} />
      </AppProvidersTest>
    );

    expect(
      screen.getByText('Loading...') || screen.getByTitle(videoMock.snippet.title)
    ).toBeInTheDocument();
  });
});
