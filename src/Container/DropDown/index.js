import React, { useState } from "react";
import "./DropDown.css";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

const Lists = (option) => {
  const options = (
    <List>
      {" "}
      {option.map((item) => (
        <ListItem key={item.name}>
          <li>{item.option1}</li>
        </ListItem>
      ))}
    </List>
  );
  console.log("list is", options);

  return options;
};

const DropDown = (props) => {
  const [visibility, setVisibility] = useState(false);
  return (
    <div class="dropdown">
    <div class="dropbtn"><div>{props.name}</div><div className="icon">&#10095;</div></div>
    <div class="dropdown-content">
    {Lists(props.option)}
    </div>
  </div>
    );
};

export default DropDown;
