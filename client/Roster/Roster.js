import React from "react";
import RosterItem from "./components/RosterItem";
import Bench from "./components/Bench";

class Roster extends React.Component {
  constructor(props) {
    super(props);
    this.state = { roster: [], rosterItem: "", bench: [], benchRender: false };
    this.addItem = this.addItem.bind(this);
    this.updateItem = this.updateItem.bind(this);
  }

  addItem() {
    if (this.state.roster.length <= 5) {
      this.setState({
        roster: [...this.state.roster, this.state.rosterItem],
      });
    } else {
      alert("Maximum roster capacity exceeded! added to bench");
      this.setState({
        bench: [...this.state.bench, this.state.rosterItem],
        benchRender: true,
      });
    }
  }

  updateItem(event) {
    event.preventDefault();
    this.setState({
      rosterItem: event.target.value,
    });
  }
  render() {
    return (
      <div>
        <h1> ROSTER</h1>
        <input placeholder="Add Member" onChange={this.updateItem} />
        <button onClick={this.addItem}> Submit</button>
        <ul>
          <RosterItem rosterItem={this.state.roster} />
        </ul>
        <ul>
          <Bench state={this.state} benchItem={this.state.bench} />
        </ul>
      </div>
    );
  }
}

export default Roster;
