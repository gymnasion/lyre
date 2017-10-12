import React, { Component } from "react";
import styled, { css } from "styled-components";

export const Button = styled.button`
  background: darkgray;
  border: 0;
  height: 125px;
  width: 125px;
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
    const { clicked } = this.state;
    const { color } = this.props;
    return (
      <Button
        clicked={clicked}
        onClick={() =>
          this.setState(() => {
            return { clicked: !clicked };
          })}
        color={color}
      />
    );
  }
}

export default SimpleBox;
