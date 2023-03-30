import React from "react";
import PropTypes from "prop-types";

TodoItem.prototype = {
  text: PropTypes.string.isRequired,
};
function TodoItem(props) {
  return (
    <li>
      <span>
        <p>{props.text}</p>
      </span>
    </li>
  );
}

export { TodoItem };
