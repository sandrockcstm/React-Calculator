import React from "react";

export default class Display extends React.Component {
  render() {
    return (
      <div id="display" className="container-fluid" id="display">
        {this.props.currentValue}
      </div>
    );
  }
}
