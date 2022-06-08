import { Button, Card, Icon } from 'semantic-ui-react';

import { Link } from 'react-router-dom';
import React from 'react';
import warning from './images/warning.png';

const Unauthorized = (props) => {
  return (
    <div className='invitation-card'>
      <Card.Group centered>
        <Card color='blue' className='inverted-card'>
          <Card.Content className='invitation-content'>
            <div className='invitation-content-image'>
              <img
                src={warning}
                alt='Welcome image'
                height={270}
                style={{ marginTop: 20 }}
              />
            </div>
          </Card.Content>
          <Card.Header className='invitation-header'>
            Nie posiadasz dostępu!
          </Card.Header>
          <div className='invitation-text'>
            Strona na której aktualnie jesteś, dostępna jest tylko wtedy, gdy
            zalogujesz się, a Twoje uprawnienia pozwolą na wyświetlenie listy
            plików zasobu serwera. Przejdź do widoku logowania po czym wprowadź
            swoje dane uwierzytelniające. Następnie ponownie wybierz tę zakładkę
            i ciesz się dostępem do ulubionych treści.
          </div>
          <div className='invitation-go-to-login'>
            <Link to={props.authorized ? '/' : '/login'}>
              <Button primary animated>
                <Button.Content visible>
                  {props.authorized ? 'Powrót do menu' : 'Chcę się zalogować'}
                </Button.Content>
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

export default Unauthorized;
