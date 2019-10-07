import React from "react";

export default class Buttons extends React.Component {
  render() {
    return (
      <div>
        <div className="row">
          <button
            id="clear"
            className="col-9 btn btn-danger"
            onClick={this.props.initialize}
            value="AC"
          >
            AC
          </button>
          <button
            id="divide"
            className="col-3 btn btn-primary"
            onClick={this.props.operators}
            value="/"
          >
            /
          </button>
        </div>
        <div className="row">
          <button
            id="seven"
            className="col-3 btn btn-secondary"
            onClick={this.props.numbers}
            value="7"
          >
            7
          </button>
          <button
            id="eight"
            className="col-3 btn btn-secondary"
            onClick={this.props.numbers}
            value="8"
          >
            8
          </button>
          <button
            id="nine"
            className="col-3 btn btn-secondary"
            onClick={this.props.numbers}
            value="9"
          >
            9
          </button>
          <button
            id="multiply"
            className="col-3 btn btn-primary"
            onClick={this.props.operators}
            value="x"
          >
            x
          </button>
        </div>
        <div className="row">
          <button
            id="four"
            className="col-3 btn btn-secondary"
            onClick={this.props.numbers}
            value="4"
          >
            4
          </button>
          <button
            id="five"
            className="col-3 btn btn-secondary"
            onClick={this.props.numbers}
            value="5"
          >
            5
          </button>
          <button
            id="six"
            className="col-3 btn btn-secondary"
            onClick={this.props.numbers}
            value="6"
          >
            6
          </button>
          <button
            id="subtract"
            className="col-3 btn btn-primary"
            onClick={this.props.operators}
            value="‑"
          >
            -
          </button>
        </div>
        <div className="row">
          <button
            id="one"
            className="col-3 btn btn-secondary"
            onClick={this.props.numbers}
            value="1"
          >
            1
          </button>
          <button
            id="two"
            className="col-3 btn btn-secondary"
            onClick={this.props.numbers}
            value="2"
          >
            2
          </button>
          <button
            id="three"
            className="col-3 btn btn-secondary"
            onClick={this.props.numbers}
            value="3"
          >
            3
          </button>
          <button
            id="add"
            className="col-3 btn btn-primary"
            onClick={this.props.operators}
            value="+"
          >
            +
          </button>
        </div>
        <div className="row">
          <button
            className="col-6 btn btn-secondary"
            id="zero"
            onClick={this.props.numbers}
            value="0"
          >
            0
          </button>
          <button
            id="decimal"
            className="col-3 btn btn-secondary"
            onClick={this.props.decimal}
            value="."
          >
            .
          </button>
          <button
            id="equals"
            className="col-3 btn btn-primary"
            onClick={this.props.evaluate}
            value="="
          >
            =
          </button>
        </div>
      </div>
    );
  }
}
