import React from 'react';
import VideoPlayer from '../VideoPlayer/VideoPlayer.component';
import VideoInfoOps from '../VideoInfoOps/VideoInfoOps.component';

const VideoPanel = (props) => {
  console.log('VideoPanel', props);
  return (
    <div>
      <div>
        <VideoPlayer video={props.video} />
      </div>
      <div>
        <VideoInfoOps video={props.video} />
      </div>
    </div>
  );
};

export default VideoPanel;
