import { Button, Menu, Segment } from 'semantic-ui-react';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';

import Files from './Files';
import Home from './Home';
import Images from './Images';
import InvitationCard from './InvitationCard';
import Login from './Login';
import Movies from './Movies';
import Music from './Music';
import PremiumVideos from './PremiumVideos';
import Unauthorized from './Unauthorized';
import logo from './images/logo.png';
import { useState } from 'react';

const STARTING_TAB = 'home';

const App = () => {
  const navigate = useNavigate();
  const [activeItem, setActiveItem] = useState(STARTING_TAB);

  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const [authorized, setAuthorized] = useState(false);

  const selectActiveItem = (name) => {
    setActiveItem(name);

    if (name === 'home') {
      navigate('/');
    } else {
      navigate(`/${name}`);
    }
  };

  const logoutUser = () => {
    setAuthorized(false);
    navigate('/');
  };

  return (
    <div>
      <header>
        <Segment inverted>
          <Menu inverted secondary>
            <Menu.Item>
              <img alt='logo' src={logo} />
            </Menu.Item>
            <Menu.Item
              name='Strona główna'
              active={activeItem === 'home'}
              onClick={() => selectActiveItem('home')}
            />
            <Menu.Item
              name='Wideo'
              active={activeItem === 'video'}
              onClick={() => selectActiveItem('video')}
            />
            <Menu.Item
              name='Wideo Premium'
              active={activeItem === 'premium-video'}
              onClick={() => selectActiveItem('premium-video')}
            />
            <Menu.Item
              name='Zdjęcia'
              active={activeItem === 'images'}
              onClick={() => selectActiveItem('images')}
            />
            <Menu.Item
              name='Muzyka'
              active={activeItem === 'music'}
              onClick={() => selectActiveItem('music')}
            />
            <Menu.Item
              name='Pliki'
              active={activeItem === 'files'}
              onClick={() => selectActiveItem('files')}
            />
            <Menu.Item position='right'>
              {authorized ? (
                <>
                  <span style={{ marginRight: 10 }}>Witaj {email}!</span>
                  <Button color='red' onClick={logoutUser}>
                    Wyloguj
                  </Button>
                </>
              ) : (
                <Link to='/login'>
                  <Button primary>Przejdź do logowania</Button>
                </Link>
              )}
            </Menu.Item>
          </Menu>
        </Segment>
      </header>
      <Routes>
        <Route path='/' element={<Home authorized={authorized} />} />
        <Route
          path='/files'
          element={
            <Files
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
              authorized={authorized}
              setAuthorized={setAuthorized}
              selectActiveItem={setActiveItem}
            />
          }
        />
        <Route
          path='/images'
          element={
            <Images
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
              authorized={authorized}
              setAuthorized={setAuthorized}
              selectActiveItem={setActiveItem}
            />
          }
        />
        <Route
          path='/music'
          element={
            <Music
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
              authorized={authorized}
              setAuthorized={setAuthorized}
              selectActiveItem={setActiveItem}
            />
          }
        />
        <Route
          path='/video'
          element={
            <Movies
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
              authorized={authorized}
              setAuthorized={setAuthorized}
              selectActiveItem={setActiveItem}
            />
          }
        />
        <Route
          path='/premium-video'
          element={
            <PremiumVideos
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
              authorized={authorized}
              setAuthorized={setAuthorized}
              selectActiveItem={setActiveItem}
            />
          }
        />
        <Route
          path='/login'
          element={
            <Login
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
              authorized={authorized}
              setAuthorized={setAuthorized}
              selectActiveItem={setActiveItem}
            />
          }
        />
        <Route
          path='/unauthorized'
          element={<Unauthorized authorized={authorized} />}
        />
      </Routes>
    </div>
  );
};

export default App;
