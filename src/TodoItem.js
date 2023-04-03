import React from "react";
import PropTypes from "prop-types";

TodoItem.prototype = {
  text: PropTypes.string.isRequired,
  Icon: PropTypes.element.isRequired,
  deleteicon: PropTypes.element.isRequired,
};
function TodoItem(props) {
  return (
    <li className="card-list">
      <span class="flex items-center">
        {props.Icon}
        <span className="flex-auto">
          <p>{props.text}</p>
        </span>
      <button className="del">{props.deleteicon}</button>
      </span>
    </li>
  );
}

export { TodoItem };
