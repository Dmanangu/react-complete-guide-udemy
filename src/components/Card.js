import React from "react";

export default function Card(props) {
  // to add whatever is set as a class name on card
  const classes = "card " + props.className;
  return (
    // Acts as a shell
    // children is a reserve name,
    // the value will always be the content of each element inside the opening and closing tags
    // using the brackets will make it dynamic?
    <div className={classes}>{props.children}</div>
  );
}
