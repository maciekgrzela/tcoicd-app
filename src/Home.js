import { Card, Image } from 'semantic-ui-react';
import { Link, useNavigate } from 'react-router-dom';

import InvitationCard from './InvitationCard';
import React from 'react';
import files from './images/files.png';
import images from './images/images.png';
import music from './images/music.png';
import premium from './images/premium.png';
import videos from './images/videos.png';

const Home = (props) => {
  const navigate = useNavigate();

  const tabNavigate = (link) => {
    navigate(link);
    console.log(link.substr(1));
    props.selectActiveItem(link.substr(1));
  };

  if (props.authorized) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: 1000, marginTop: 50 }}>
          <Card.Group itemsPerRow={3}>
            <Card
              style={{ background: '#1b1c1d', boxShadow: 'none' }}
              color='blue'
              onClick={() => tabNavigate('/video')}
            >
              <Image src={videos} wrapped ui={false} style={{ padding: 50 }} />
              <Card.Content style={{ background: '#000' }}>
                <Card.Header style={{ color: '#fff' }}>Wideo</Card.Header>
              </Card.Content>
            </Card>
            <Card
              style={{ background: '#1b1c1d', boxShadow: 'none' }}
              color='blue'
              onClick={() => tabNavigate('/premium-video')}
            >
              <Image src={premium} wrapped ui={false} style={{ padding: 50 }} />
              <Card.Content style={{ background: '#000' }}>
                <Card.Header style={{ color: '#fff' }}>
                  Wideo Premium
                </Card.Header>
              </Card.Content>
            </Card>
            <Card
              style={{ background: '#1b1c1d', boxShadow: 'none' }}
              color='blue'
              onClick={() => tabNavigate('/images')}
            >
              <Image src={images} wrapped ui={false} style={{ padding: 50 }} />
              <Card.Content style={{ background: '#000' }}>
                <Card.Header style={{ color: '#fff' }}>Zdjęcia</Card.Header>
              </Card.Content>
            </Card>
            <Card
              style={{ background: '#1b1c1d', boxShadow: 'none' }}
              color='blue'
              onClick={() => tabNavigate('/music')}
            >
              <Image src={music} wrapped ui={false} style={{ padding: 50 }} />
              <Card.Content style={{ background: '#000' }}>
                <Card.Header style={{ color: '#fff' }}>Muzyka</Card.Header>
              </Card.Content>
            </Card>
            <Card
              style={{ background: '#1b1c1d', boxShadow: 'none' }}
              color='blue'
              onClick={() => tabNavigate('/files')}
            >
              <Image src={files} wrapped ui={false} style={{ padding: 50 }} />
              <Card.Content style={{ background: '#000' }}>
                <Card.Header style={{ color: '#fff' }}>Pliki</Card.Header>
              </Card.Content>
            </Card>
          </Card.Group>
        </div>
      </div>
    );
  }

  return <InvitationCard />;
};

export default Home;
