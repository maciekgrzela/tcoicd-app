import { Button, Card, Checkbox, Form } from 'semantic-ui-react';
import { Navigate, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

const Login = (props) => {
  const navigate = useNavigate();

  const [accepted, setAccepted] = useState(false);

  if (props.authorized) {
    return <Navigate to='/' />;
  }

  const loginUser = () => {
    props.setAuthorized(true);
    navigate('/', {
      replace: true,
    });
  };

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.7)), url('https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/netflixteaser.png')`,
      }}
    >
      <div className='invitation-card'>
        <Card.Group centered>
          <Card color='blue' className='inverted-card'>
            <Card.Content className='invitation-content'>
              <div
                style={{
                  marginTop: 50,
                  marginBottom: 50,
                  marginLeft: 20,
                  marginRight: 20,
                }}
              >
                <h1 style={{ marginBottom: 20 }}>
                  Witaj nieznajomy! Zaloguj się!
                </h1>
                <Form>
                  <Form.Field>
                    <label>Email</label>
                    <input
                      required
                      placeholder='Email'
                      value={props.email}
                      onChange={(e) => props.setEmail(e.currentTarget.value)}
                    />
                  </Form.Field>
                  <Form.Field>
                    <label>Hasło</label>
                    <input
                      placeholder='Hasło'
                      required
                      type='password'
                      value={props.password}
                      onChange={(e) => props.setPassword(e.currentTarget.value)}
                    />
                  </Form.Field>
                  <Form.Field>
                    <Checkbox
                      label='Wyrażam zgodę na przetwarzanie moich danych osobowych'
                      checked={accepted}
                      onChange={() => setAccepted((val) => !val)}
                    />
                  </Form.Field>
                  <Button
                    primary
                    style={{ marginTop: 30 }}
                    fluid
                    type='submit'
                    disabled={!props.email || !props.password || !accepted}
                    onClick={loginUser}
                  >
                    Zaloguj
                  </Button>
                </Form>
              </div>
            </Card.Content>
          </Card>
        </Card.Group>
      </div>
    </div>
  );
};

export default Login;
