import React from "react";
import ReactDOM from "react-dom";
import Roster from "./Roster/Roster";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Roster />
      </div>
    );
  }
}
