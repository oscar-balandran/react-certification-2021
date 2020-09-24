import React from 'react';
import Button from '@material-ui/core/Button';

const VideoInfoOps = (props) => {
  console.log('VideoInfoOps', props);
  return (
    <div>
      <div>
        <div>
          <h4>{props.video.snippet.title}</h4>
        </div>
        <div>
          <Button onClick={() => console.log(`Add Favorites: ${props}`)}>
            + Fvoritos
          </Button>
        </div>
      </div>
      <div>{props.video.snippet.description}</div>
    </div>
  );
};

export default VideoInfoOps;
