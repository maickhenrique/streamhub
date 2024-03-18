// SearchInput.js
import React, { useState } from 'react';
import { Container, Form, Button, InputGroup } from 'react-bootstrap';
import './style.css';

const SearchInput = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <Container className='search-input'>
        <Form onSubmit={handleSubmit}>
            <InputGroup className="mb-3">
            <Form.Control
                type="text"
                placeholder="Pesquisar vídeo.."
                value={searchTerm}
                onChange={handleChange}
            />
                <Button variant="outline-dark" type="submit">
                  Pesquisar
                </Button>
            </InputGroup>
        </Form>
    </Container>
  );
};

export default SearchInput;
