import React, { Component } from "react";
import { findRenderedComponentWithType } from "react-dom/test-utils";

class Quiz extends Component {
  renderButtons() {
    const btnStyle = {
      fontSize: "80%"
    };
    return (
      <div>
        <button
          style={btnStyle}
          onClick={() => this.props.onClick("anger")}
          className="btn btn-danger col-3 m-1"
        >
          Anger
        </button>
        <button
          style={btnStyle}
          onClick={() => this.props.onClick("contempt")}
          className="btn btn-secondary col-3 m-1"
        >
          Contempt
        </button>
        <button
          style={btnStyle}
          onClick={() => this.props.onClick("disgust")}
          className="btn btn-warning col-3 m-1"
        >
          Disgust
        </button>
        <button
          style={btnStyle}
          onClick={() => this.props.onClick("fear")}
          className="btn btn-dark col-3 m-1"
        >
          Fear
        </button>
        <button
          style={btnStyle}
          onClick={() => this.props.onClick("happiness")}
          className="btn btn-info col-3 m-1"
        >
          Happiness
        </button>
        <button
          style={btnStyle}
          onClick={() => this.props.onClick("neutral")}
          className="btn btn-primary col-3 m-1"
        >
          Neutral
        </button>
        <button
          style={btnStyle}
          onClick={() => this.props.onClick("sadness")}
          className="btn btn-light col-3 m-1"
        >
          Sadness
        </button>
        <button
          style={btnStyle}
          onClick={() => this.props.onClick("surprise")}
          className="btn btn-success col-3 m-1"
        >
          Surprise
        </button>
      </div>
    );
  }

  renderResult(text, color) {
    const titleStyle = {
      fontSize: "250%",
      color: color,
      marginTop: "5%"
    };

    const textStyle = {
      color: "white",
      fontSize: "150%",
      lineHeight: "110%",
    };
    return (
      <div>
        <div style={titleStyle}>{text}</div>
        <br></br>
        <div style={textStyle}>
          {"The correct answer was " + this.props.correct.name}
        </div>
      </div>
    );
  }

  renderOptions() {
    console.log(this.props.result);
    if (this.props.result === "waiting") {
      return this.renderButtons();
    } else if (this.props.result === "win") {
      return this.renderResult("Correct!", "green");
    } else if (this.props.result === "lose") {
      return this.renderResult("Incorrect!", "red");
    }
  }

  render() {
    const resultsStyle = {
      backgroundColor: "#282828",
      textAlign: "center",
      padding: "5%",
      lineHeight: "90%",
      position: "absolute",
      bottom: 0,
      height: "12em",
      width: "100%"
    };

    return <div style={resultsStyle}>{this.renderOptions()}</div>;
  }
}

export default Quiz;
