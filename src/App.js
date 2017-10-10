import React, { Component } from "react";
import styled, { css } from "styled-components";
import logo from "./logo.svg";
import "./App.css";

const Button = styled.button`
  background: lightgray;
  border: 0;
  height: 150px;
  width: 150px;
  margin: 100px;

  ${props => props.clicked && css`background: #5227ec;`};
`;

class SimpleBox extends Component {
  constructor(props) {
    super(props);
    this.state = { clicked: false };
  }
  render() {
    return (
      <Button
        clicked={this.state.clicked}
        onClick={() =>
          this.setState(() => {
            return { clicked: !this.state.clicked };
          })}
      />
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <SimpleBox />
      </div>
    );
  }
}

export default App;
