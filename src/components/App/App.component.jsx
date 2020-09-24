import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import AuthProvider from '../../providers/Auth';
import HomeVideosPage from '../../pages/HomeVideos';
import LoginPage from '../../pages/Login';
import NotFound from '../../pages/NotFound';
import SecretPage from '../../pages/Secret';
import Private from '../Private';
import Layout from '../Layout';
import VideoDetail from '../../pages/VideoDetail';
import VideosContext from '../../state/VideosContext';

import { theme1 } from './theme';

const theme = createMuiTheme(theme1);

function App() {
  // useLayoutEffect(() => {
  //   const { body } = document;

  //   function rotateBackground() {
  //     const xPercent = random(100);
  //     const yPercent = random(100);
  //     body.style.setProperty('--bg-position', `${xPercent}% ${yPercent}%`);
  //   }

  //   const intervalId = setInterval(rotateBackground, 3000);
  //   body.addEventListener('click', rotateBackground);

  //   return () => {
  //     clearInterval(intervalId);
  //     body.removeEventListener('click', rotateBackground);
  //   };
  // }, []);

  const [videoList, setVideoList] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [strSearch, setStrSearch] = useState('Wizeline');

  return (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <AuthProvider>
          <VideosContext.Provider
            value={{
              selectedVideo,
              videoList,
              strSearch,
              setSelectedVideo,
              setVideoList,
              setStrSearch,
            }}
          >
            <Layout>
              <Switch>
                <Route exact path="/">
                  <HomeVideosPage />
                </Route>
                <Route exact path="/videos">
                  <HomeVideosPage />
                </Route>
                <Route exact path="/video">
                  <VideoDetail />
                </Route>
                <Route exact path="/login">
                  <LoginPage />
                </Route>
                <Private exact path="/secret">
                  <SecretPage />
                </Private>
                <Route path="*">
                  <NotFound />
                </Route>
              </Switch>
              {/* <Fortune /> */}
            </Layout>
          </VideosContext.Provider>
        </AuthProvider>
      </BrowserRouter>
    </MuiThemeProvider>
  );
}

export default App;
