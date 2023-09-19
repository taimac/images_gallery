import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Search = (props) => {
  // passing (props) is same as passing{handleSubmit}
  return (
    <Container className='mt-4'>
      <Row className='justify-content-center'>
        <Col xs={12} md={8}>
          <Form onSubmit={props.handleSubmit}>
            <Row>
              <Col xs={9}>
                <Form.Control 
                    type="text"
                    value={props.word}
                    onChange={(e) => props.setWord(e.target.value)}
                    placeholder='Search for new image...' />
              </Col>
              <Col>
                <Button variant='primary' type='submit'>
                  Search
                </Button>
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Search;
