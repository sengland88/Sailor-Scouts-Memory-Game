import React, { Component } from "react";
import ScoutCard from "./components/ScoutCard";
import Container from "./components/Container";
import Title from "./components/Title";
import Row from "./components/Row";
import Col from "./components/Col";
import scouts from "./scouts.json";

class App extends Component {

  state = {
    scouts
  };


  render() {
    return (
      <Container>
        <Title>The Sailor Scouts</Title>
          <Row>
            {this.state.scouts.map(scout => (
              <Col size="sm-5">
                <ScoutCard image={scout.image} />
              </Col>
            ))}
          </Row>
      </Container>
    );
  }
}

export default App;
