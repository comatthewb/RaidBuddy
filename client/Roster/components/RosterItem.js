import React from "react";

const RosterItem = (props) => {
  return props.rosterItem.map((item, index) => (
    <div key={index}>
      <li>{item}</li>
    </div>
  ));
};

export default RosterItem;
