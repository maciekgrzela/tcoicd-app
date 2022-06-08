import { Card, List } from 'semantic-ui-react';
import { Navigate, useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

import LoadingContentScreen from './LoadingContentScreen';
import axios from 'axios';

const PremiumVideos = (props) => {
  const navigate = useNavigate();

  const [loadingContent, setLoadingContent] = useState(true);
  const [files, setFiles] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://localhost:5001/Samba/files?Email=${props.email.substring(
          0,
          props.email.indexOf('@')
        )}&Password=${props.password}&ShareName=premium-videos`
      )
      .then((res) => {
        setTimeout(() => {
          setFiles(res.data);
          setLoadingContent(false);
        }, 3000);
      })
      .catch((err) => {
        setLoadingContent(false);
        navigate('/unauthorized');
      });
  }, []);

  const downloadFile = (name) => {
    axios({
      url: `https://localhost:5001/Samba/download?Email=${props.email.substring(
        0,
        props.email.indexOf('@')
      )}&Password=${props.password}&ShareName=premium-videos&FileName=${name}`,
      method: 'GET',
      responseType: 'blob',
    })
      .then((res) => {
        const url = window.URL.createObjectURL(new Blob([res.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', name);
        document.body.appendChild(link);
        link.click();
      })
      .catch((err) => {
        setLoadingContent(false);
        navigate('/unauthorized');
      });
  };

  if (!props.authorized) {
    return <Navigate to='/unauthorized' replace={true} />;
  }

  if (loadingContent) {
    return <LoadingContentScreen />;
  }

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-start',
      }}
    >
      {files && (
        <Card style={{ width: '90vw', marginTop: 50, padding: 20 }}>
          <Card.Content>
            <Card.Header>Zawartość folderu: {files.shareName}</Card.Header>
            <Card.Meta>Przeglądaj dostępne pliki</Card.Meta>
            <Card.Description style={{ marginLeft: 30, marginTop: 30 }}>
              <List>
                {files.shareContentListItems.map((file) => (
                  <List.Item
                    style={{
                      cursor: 'pointer',
                      marginTop: 20,
                      marginBottom: 20,
                    }}
                    onClick={() => downloadFile(file.fileName)}
                  >
                    <List.Icon name='folder' />
                    <List.Content>
                      <List.Header>{`${file.fileName} (${file.fileSize} KB)`}</List.Header>
                      <List.Description>
                        {`Stworzono: ${file.createdAt}, ostatnia modyfikacja: ${file.lastModifiedAt}`}
                      </List.Description>
                    </List.Content>
                  </List.Item>
                ))}
              </List>
            </Card.Description>
          </Card.Content>
        </Card>
      )}
    </div>
  );
};

export default PremiumVideos;
