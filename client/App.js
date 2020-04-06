import React from "react";
import ReactDOM from "react-dom";
import Roster from "./Roster/Roster";
import $ from "jquery";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // componentDidMount() {
  //
  // }

  render() {
    return (
      <div className="container">
        <Roster />
      </div>
    );
  }
}
