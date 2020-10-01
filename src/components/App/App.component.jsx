import React, { useState, useReducer } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import AuthProvider from '../../providers/Auth';
import HomeVideosPage from '../../pages/HomeVideos';
import Favourites from '../../pages/Favorites';
import LoginPage from '../../pages/Login';
import NotFound from '../../pages/NotFound';
import Layout from '../Layout';
import VideoDetail from '../../pages/VideoDetail';
import VideosContext from '../../state/VideosContext';
import VideosReducer from '../../state/VideosListReducer';
import ProtectedRoute from '../ProtectedRoute';
import { theme1 } from './theme';

const theme = createMuiTheme(theme1);

function App() {

  const [selectedVideo, setSelectedVideo] = useState(null);
  const [strSearch, setStrSearch] = useState('Wizeline');

  const [state, dispatch] = useReducer(VideosReducer, {
    videoList: [],
    favouritesList: [],
  });

  return (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <AuthProvider>
          <VideosContext.Provider
            value={{
              selectedVideo,
              strSearch,
              setSelectedVideo,
              setStrSearch,
              state,
              dispatch,
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
                <ProtectedRoute path="/favourites" component={Favourites} />
                <Route exact path="/video">
                  <VideoDetail />
                </Route>
                <Route exact path="/login">
                  <LoginPage />
                </Route>
                <Route path="*">
                  <NotFound />
                </Route>
              </Switch>
            </Layout>
          </VideosContext.Provider>
        </AuthProvider>
      </BrowserRouter>
    </MuiThemeProvider>
  );
}

export default App;
