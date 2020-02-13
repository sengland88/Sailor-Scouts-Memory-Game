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

  imageClick = (id, name, clicked) => {

    const scoutImages = this.state.scouts

    scoutImages.forEach((scout) => {

      if (scout.id === id && scout.clicked) {
        scoutImages.forEach((element) => {
          element.clicked = false 
        });   
        this.setState({
          message: "Sorry - You Lose.", 
          score: 0});
      } else if (scout.id === id && !scout.clicked) {
          scout.clicked = true
          this.setState({
            message: "Yay - Adding 1 to Your Score.", 
            score: this.state.score + 1,
            topScore: this.state.score + 1 > this.state.topScore ? this.state.score + 1 : this.state.topScore
          });
      }
    })

    if (this.state.score +1 === scoutImages.length) {
      alert("you won!")
      this.setState({
        message: "Play again!", 
        score: 0,
        topScore: 0});
    } 

    this.shuffleImages()    
  };


  render() {
    return (
      <Container>
        <Title>The Sailor Scouts - {this.state.message} Your score is {this.state.score} || Top Score: {this.state.topScore}</Title>
          <Row>
            {this.state.scouts.map(scout => (
              <Col size="sm">
                <ScoutCard 
                id={scout.id} 
                key={scout.id} 
                name={scout.name}
                // clicked={scout.clicked}
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