import React from "react";
import PropTypes from "prop-types";

TodoItem.prototype = {
  text: PropTypes.string.isRequired,
  Icon: PropTypes.element.isRequired,
};
function TodoItem(props) {
  return (
    <li className="card-list">
      <span class="flex items-center">
        {props.Icon}
        <span>
          <p>{props.text}</p>
        </span>
      </span>
    </li>
  );
}

export { TodoItem };
