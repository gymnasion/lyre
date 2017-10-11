import React, { Component } from "react";
import styled, { css } from "styled-components";
import "./App.css";

const Button = styled.button`
  background: darkgray;
  border: 0;
  height: 100px;
  width: 100px;
  display: block;
  margin-top: 2px;
  margin-bottom: 2px;

  ${props =>
    props.clicked && props.color === "red" && css`background: #e2818a;`};
  ${props =>
    props.clicked && props.color === "violet" && css`background: #a8a2e8;`};
  ${props =>
    props.clicked && props.color === "green" && css`background: #98e1d6;`};
  ${props =>
    props.clicked && props.color === "sand" && css`background: #f0cc90;`};
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
        color={this.props.color}
      />
    );
  }
}

class ColumnOfBoxes extends Component {
  render() {
    return (
      <div className="columnOfBoxes">
        <SimpleBox color={this.props.color} />
        <SimpleBox color={this.props.color} />
        <SimpleBox color={this.props.color} />
        <SimpleBox color={this.props.color} />
      </div>
    );
  }
}

class Box extends Component {
  render() {
    return (
      <div>
        <ColumnOfBoxes color="red" />
        <ColumnOfBoxes color="violet" />
        <ColumnOfBoxes color="green" />
        <ColumnOfBoxes color="sand" />
      </div>
    );
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Box />
      </div>
    );
  }
}

export default App;
