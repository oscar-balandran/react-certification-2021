const VideosReducer = (state, action) => {
  switch (action.type) {
    case 'SET_FAVOURITESLIST': {
      return { ...state, favouritesList: action.payload };
    }
    case 'ADD_FAVOURITE_VIDEO': {
      const videoToAdd = action.payload.video;

      let { favouritesList } = state;

      // Looking for pre-existent video with same videoId
      const matchedVideos = state.favouritesList.filter((video) => {
        return video.id.videoId === videoToAdd.id.videoId;
      });

      if (matchedVideos.length <= 0) {
        // No pre-existent video, adding new video
        favouritesList = state.favouritesList.concat(videoToAdd);
      }

      return {
        ...state,
        favouritesList,
      };
    }
    case 'RESET_FAVOURITES': {
      return { ...state, favouritesList: [] };
    }
    case 'SET_VIDEOLIST': {
      return { ...state, videoList: action.payload };
    }
    case 'REMOVE_VIDEO': {
      // Getting videos distinct to the requested to be removed
      const videoList = state.videoList.filter(
        (video) => video.id.videoId !== action.payload.video.id.videoId
      );
      return {
        ...state,
        videoList,
      };
    }
    default:
      return state;
  }
};

export default VideosReducer;
