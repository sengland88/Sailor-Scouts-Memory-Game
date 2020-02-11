import React, { Component } from "react";
import ScoutCard from "./components/ScoutCard";
import Container from "./components/Container";
import Title from "./components/Title";
import Row from "./components/Row";
import Col from "./components/Col";
import scouts from "./scouts.json";

class App extends Component {

  state = {
    scouts,
    message: "Click An Image to Begin!",
    score: 0, 
    topScore: 0
  };

  imageClick = (id, name) => {

 

    console.log("this works")
    console.log(`You clicked on ${name}`)
    console.log(`This is ${name} id number ${id}`)

  };


  render() {
    return (
      <Container>
        <Title>The Sailor Scouts</Title>
          <Row>
            {this.state.scouts.map(scout => (
              <Col size="sm">
                <ScoutCard id={scout.id} key={scout.id} name={scout.name} image={scout.image} imageClick={this.imageClick} />
              </Col>
            ))}
          </Row>
      </Container>
    );
  }
}

export default App;
