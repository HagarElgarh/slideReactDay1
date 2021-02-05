// import logo from './logo.svg';
import './App.css';
import ReactDom from 'react-dom'
import React, { Component } from 'react'
import Slideimages from "./slide";


class App extends Component {
  constructor() {
    super();
    //intial state
    this.state = {
      name: "gogo",
    };
  }

  render() {
    const styles = {
      text: {
        padding: "5px",
        margin: "10px",
      },
      button: {
        backgroundColor: "blue",
        width: "100px",
        color: "white",
      },
    };

    console.log("App render method");
    return (
      <div>
        <Slideimages />

        <input
          style={styles.text}
          type="text"
          value={this.state.name}
          onChange={(e) => {
            console.log("ss");
            this.setState({ name: e.target.value });
          }}
        />
        <input
          style={styles.button}
          type="button"
          value="click"
          onClick={() => {
            this.setState({ name: "test", title: "FComponent" });
          }}
        />
        <p style={styles.text}>{this.state.name}</p>
      </div>
    );
  }
}

export default App;
