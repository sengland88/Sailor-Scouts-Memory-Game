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
    message: "Click a Sailor Scout to Begin!",
    score: 0, 
    topScore: 0
  };

  shuffleImages = () => {
    console.log(this.state.scouts)
    this.setState({scouts: this.state.scouts.sort(() => Math.random() - 0.5)});
  }

  componentDidMount() {
    this.shuffleImages();
  }

  imageClick = (id, name) => {
    //when the image is clicked, checks to see if the image has been click.
    // if no, re-shuffle images, increase score by one, display a correct message
    // if yes, re-shuffle images, and reset score and check to see if score is higher than top score, display a incorrect message

    this.shuffleImages()

    this.setState({score: this.state.score + 1});

    console.log("this works")
    console.log(`You clicked on ${name}`)
    console.log(`This is ${name} id number ${id}`)

  };




  render() {
    return (
      <Container>
        <Title>The Sailor Scouts. Your score is {this.state.score} || Top Score: {this.state.topScore}</Title>
          <Row>
            {this.state.scouts.map(scout => (
              <Col size="sm">
                <ScoutCard 
                id={scout.id} 
                key={scout.id} 
                name={scout.name} 
                image={scout.image}
                shuffle={this.shuffleImages}
                imageClick={this.imageClick} />
              </Col>
            ))}
          </Row>
      </Container>
    );
  }
}

export default App;
