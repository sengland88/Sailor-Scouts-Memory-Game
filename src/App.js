import React, { Component } from "react";
import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";
import Container from "./components/Container";
import Title from "./components/Title";
import Row from "./components/Row";
import ScoutCard from "./components/ScoutCard";
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
          message: "Sorry - You Already Clicked That Scout. Try Again!",
          score: 0});
          console.log("lost")
      } else if (scout.id === id && !scout.clicked) {
          scout.clicked = true
          this.setState({
            message: "Great Choice!", 
            score: this.state.score + 1,
            topScore: this.state.score + 1 > this.state.topScore ? this.state.score + 1 : this.state.topScore
          });
      }
    })

    if (this.state.score + 1 === scoutImages.length) {
      this.setState({
        message: "You won! Play again!", 
        score: 0,
        topScore: 0});
    } 

    this.shuffleImages()    
  };


  render() {
    return (
      <div>
      <Nav/>
      <Jumbotron/>
      <Container>
        <Title
          message={this.state.message}
          score={this.state.score}
          topscore={this.state.topScore}        
        ></Title>
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
      </div>
    );
  }
}

export default App;