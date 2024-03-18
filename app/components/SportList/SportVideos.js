// SportVideos.js
import React, { useEffect, useState } from 'react';
import ListSportVideos from '../../../api/listSportVideo';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { BsPlay } from 'react-icons/bs'; 
import SearchInput  from '../Search/index';

const SportVideos = () => {
  const [videos, setVideos] = useState([]);
  const [visibleVideos, setVisibleVideos] = useState([]);
  const [loadMoreVisible, setLoadMoreVisible] = useState(false); 

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    try {
      const { data } = await ListSportVideos();
      if (Array.isArray(data)) {
        setVideos(data);
        setVisibleVideos(data.slice(0, 6)); 
        if (data.length > 6) {
          setLoadMoreVisible(true); 
        }
      } else {
        console.error('Erro: Os dados retornados pela API não são um array:', data);
      }
    } catch (error) {
      console.error('Erro ao buscar vídeos:', error);
    }
  };

  const loadMoreVideos = () => {
    const nextVideos = videos.slice(visibleVideos.length, visibleVideos.length + 6);
    setVisibleVideos(prevVideos => [...prevVideos, ...nextVideos]);
    if (visibleVideos.length + nextVideos.length >= videos.length) {
      setLoadMoreVisible(false); 
    }
  };

  const searchVideos = (term) => {
    const filteredVideos = videos.filter(video =>
      video.name.toLowerCase().includes(term.toLowerCase())
    );
    setVisibleVideos(filteredVideos);
    setLoadMoreVisible(false); // Oculta o botão "Carregar Mais" após a pesquisa
  };

  return (
    <Container>
        <SearchInput onSearch={searchVideos} />
        <h1 className='title-sports'>Em destaque</h1>
        <Row>
            {visibleVideos.map(video => (
                <Col key={video.uri} xs={4} style={{marginBottom:'50px'}}>
                <Card className="h-100">
                    <Card.Img variant="top" src={video.pictures.base_link} />
                    <Card.Body className="d-flex flex-column">
                    <Card.Title className='title-video'>{video.name}</Card.Title>
                        <a href={video.link} className='btn-play'><BsPlay style={{color:" #323334"}} /></a>
                    </Card.Body>
                </Card>
                </Col>
            ))}
        </Row>
      {loadMoreVisible && (
        <Row className="justify-content-center mt-3" style={{width: '200px', margin: 'auto'}}>
          <Button variant="outline-dark" onClick={loadMoreVideos} style={{marginBottom: '20px'}} >Carregar Mais</Button>
        </Row>
      )}
    </Container>
  );
};

export default SportVideos;
