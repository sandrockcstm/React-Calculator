import React from "react";

export default class Formula extends React.Component {
  render() {
    return (
      <div id="formula" className="container-fluid">
        {this.props.formula}
      </div>
    );
  }
}
