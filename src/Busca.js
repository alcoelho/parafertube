import React from 'react';
import { InputGroup, FormControl, Button, Row, Col, Form, Container } from 'react-bootstrap'

class Busca extends React.Component{
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <div className="header">
        <Container>
          <Row>
            <Col xs="12" md="6" lg="4" className="branding">
              <h1>Parafertube</h1>
            </Col>
            <Col>
              <Form onSubmit={this.props.acao}>
                <InputGroup className="search">
                  <FormControl
                    placeholder="digite os termos de busca"
                    value={this.props.texto}
                    onChange={this.props.acaoAlteracao}
                  />
                  <InputGroup.Append>
                    <Button variant="secondary" type="submit">Buscar</Button>
                  </InputGroup.Append>
                </InputGroup>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Busca;