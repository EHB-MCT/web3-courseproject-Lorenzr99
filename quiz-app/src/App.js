import './App.scss';
import React from "react";
import { Question } from './components/Question/Question';
import { Answer } from './components/Answer/Answer';
import { Overview } from './components/Overview/Overview';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      madeChoice: false,
      profileChoice: '',
      enteredName: false,
      profileName: '',
      nameValue: ''
    };
    this.handleChoice = this.handleChoice.bind(this);
    this.handleName = this.handleName.bind(this);
    this.updateNameValue = this.updateNameValue.bind(this);
    this.skipName = this.skipName.bind(this);
  }

  skipName() {
    this.setState({madeChoice: true, enteredName: true});
    sessionStorage.setItem("profile-name", "Test");
  }

  handleChoice(e) {
    console.log(e.target.className);
    this.setState({madeChoice: true, profileChoice: e.target.className});
  }

  updateNameValue(e) {
    this.setState({nameValue: e.target.value});
  }

  handleName(e) {
    e.preventDefault();
    console.log(this.state.nameValue);
    if(this.state.nameValue !== "") {
      let profileName = this.state.nameValue;
      this.setState({enteredName: true, profileName});
      sessionStorage.setItem("profile-name", profileName);
    }
  }

  render() {
    if(this.state.madeChoice === false) {
      return (
        <div className="App">
          <h1 className="title">QUIZ-APP</h1>
            <div className="profile-choice">
              <button className="profile-ask" onClick={this.handleChoice}>Vraag stellen</button>
              <button className="profile-answer" onClick={this.handleChoice}>Vraag beantwoorden</button>
              <button className="overview" onClick={this.handleChoice}>Overzicht vragen + antwoorden</button>
            </div>
        </div>
      );
    }

    else if(this.state.enteredName === false) {
      return (
        <div className="App">
          <h1 className="title" onClick={this.skipName}>QUIZ-APP</h1>
            <form className="profile-name" onSubmit={this.handleName}>
              <input type="text" onChange={this.updateNameValue} className="profile-name-input" placeholder="Geef een gebruikersnaam in" autoFocus></input>
              <input type="submit" value={this.state.nameValue || "GEEF NAAM IN"} className="profile-name-submit"></input>
            </form>
        </div>
      );
    }
    
    else {
      if(this.state.profileChoice === "profile-ask") {
        return (
           <Question />
        );
      }
      else if(this.state.profileChoice === "profile-answer") {
        return (
          <Answer />
       );
      }
      else if(this.state.profileChoice === "overview") {
        return (
          <Overview />
        );
      }
    }
  }
}

export default App;
