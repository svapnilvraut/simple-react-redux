import React from "react";
import { Button } from "reactstrap";
import { connect } from "react-redux";
import { incrementCounter, resetCounter } from "../action";

class Counter extends React.Component {
  render() {
    return (
      <div className="jumbotron containter-fluid">
        <h1>Counter Component</h1>
        <p>This component just has a button, which increments the counter</p>
        <h2>Click on the button below to see the incremented values</h2>
        <div>
          <Button color="success" onClick={this.props.increment}>
            Click to Increment
          </Button>{" "}
          <Button
            onClick={this.props.reset}
            disabled={this.props.counter === 0}
            color="danger"
          >
            Reset Counter
          </Button>
        </div>
        <h3>{this.props.counter}</h3>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    counter: state.counter
  };
};

const mapDispatchToProps = dispatch => {
  return {
    increment: () => {
      dispatch(incrementCounter());
    },
    reset: () => {
      dispatch(resetCounter());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
