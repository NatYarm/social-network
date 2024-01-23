import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import AppLayout from './layout/AppLayout';
import GlobalStyles from './styles/GlobalStyles';
import Timeline from './pages/Timeline';
import Messenger from './pages/Messenger';
import Newsfeed from './pages/Newsfeed';
import Settings from './pages/Settings';
import Friends from './pages/Friends';
import ErrorPage from './pages/ErrorPage';
import styled from 'styled-components';

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="timeline" />} />
            <Route path="timeline" element={<Timeline />} />
            <Route path="messenger" element={<Messenger />} />
            <Route path="newsfeed" element={<Newsfeed />} />
            <Route path="settings" element={<Settings />} />
            <Route path="friends" element={<Friends />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
