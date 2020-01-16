import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const value1 = Math.floor(Math.random() * 100);
const value2 = Math.floor(Math.random() * 100);
const value3 = Math.floor(Math.random() * 100);
const proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3;
const numQuestions = 0;
const numCorrect = 0;

class App extends Component {
  state = {
  	value1: value1,
    value2: value2,
    value3: value3,
    proposedAnswer: proposedAnswer,
    numQuestions: numQuestions,
    numCorrect: numCorrect,
    answer: value1 + value2 + value3
  };

  updateScoreTrue = () => {
  	this.updateScore(true);
  };

  updateScoreFalse = () => {
  	this.updateScore(false);
  }

  updateScore = (buttonClicked) => {
      this.setState((prevState) => {
        	const value1 = Math.floor(Math.random() * 100);
			const value2 = Math.floor(Math.random() * 100);
			const value3 = Math.floor(Math.random() * 100);
        	const answer = value1 + value2 + value3;
        console.log(prevState);
        return {
          	answer : answer,
          	value1 : value1,
			value2 : value2,
			value3 : value3,
			proposedAnswer : Math.floor(Math.random() * 3) + value1 + value2 + value3,
          	numQuestions: ++prevState.numQuestions,
            numCorrect: ((prevState.answer !== prevState.proposedAnswer && !buttonClicked) || (prevState.answer === prevState.proposedAnswer && buttonClicked)) ? ++prevState.numCorrect : prevState.numCorrect
         };
      });
        
  }

  render() { console.log(this.state);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <h2>Mental Math</h2>
          <div className="equation">
            <p className="text">{`${this.state.value1} + ${this.state.value2} + ${this.state.value3} = ${this.state.proposedAnswer}`}</p>
          </div>
          <button onClick={this.updateScoreTrue}>True</button>
          <button onClick={this.updateScoreFalse}>False</button>
          <p className="text">
            Your Score: {this.state.numCorrect}/{this.state.numQuestions}
          </p>
        </div>
      </div>
    );
  }
}

export default App;
