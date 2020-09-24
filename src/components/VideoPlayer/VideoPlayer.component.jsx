import React from 'react';

const VideoPlayer = (props) => {
  console.log('VideoPlayer', props);
  const { videoId } = props.video.id;

  return (
    <>
      <section>
        <iframe
          width="800"
          height="450"
          allowFullScreen
          frameBorder="0"
          title="rick roll"
          src={`https://www.youtube.com/embed/${videoId}?controls=0&autoplay=1`}
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        />
      </section>
    </>
  );
};

export default VideoPlayer;
