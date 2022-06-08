import { Button, Card, Icon, Menu, Segment } from 'semantic-ui-react';

import { Link } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import React from 'react';
import welcomeBanner from './images/welcome-image.png';

const InvitationCard = () => {
  return (
    <div className='invitation-card'>
      <Card.Group centered>
        <Card color='blue' className='inverted-card'>
          <Card.Content className='invitation-content'>
            <div className='invitation-content-image'>
              <img src={welcomeBanner} alt='Welcome image' height={270} />
            </div>
          </Card.Content>
          <Card.Header className='invitation-header'>
            Witaj w Cloud Media Center!
          </Card.Header>
          <div className='invitation-text'>
            Oto aplikacja za pomocą której połączyć możesz się z naszym serwerem
            mediów TrueNAS w celu uzyskania dostępu do swoich ulubionych plików,
            zdjęć, muzyki oraz wideo. Przejdź do panelu logowania, wybierz treść
            która Cię interesuje i korzystaj z niej dowoli. Pamiętaj, będąc
            użytkownikiem premium możesz odwiedzić folder <i>Premium Videos</i>{' '}
            w ramach którego czekają na Ciebie najnowsze superprodukcje. Miłej
            zabawy 😉
          </div>
          <div className='invitation-go-to-login'>
            <Link to='/login'>
              <Button primary animated>
                <Button.Content visible>Chcę się zalogować</Button.Content>
                <Button.Content hidden>
                  <Icon name='arrow right' />
                </Button.Content>
              </Button>
            </Link>
          </div>
        </Card>
      </Card.Group>
    </div>
  );
};

export default InvitationCard;
